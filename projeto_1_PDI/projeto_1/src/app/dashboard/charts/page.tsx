"use client"

import { useEffect, useState, useRef } from "react"
import { collection, query, where, onSnapshot, Unsubscribe } from "firebase/firestore"
import { db, auth } from "@/lib/firebase"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { onAuthStateChanged, User } from "firebase/auth"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type Site = { id: string; nome: string }

export default function ChartsPage() {
  const [sites, setSites] = useState<Site[]>([])
  const [siteStats, setSiteStats] = useState<Record<string, { success: number; failure: number }>>({})
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const testListeners = useRef<Record<string, Unsubscribe>>({})

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) return router.push("/login")
      setUser(firebaseUser)

      const qSites = query(collection(db, "sites"), where("userId", "==", firebaseUser.uid))
      const unsubscribeSites = onSnapshot(qSites, (snapshot) => {
        const newSites: Site[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          nome: doc.data().nome || ""
        }))
        setSites(newSites)

        Object.keys(testListeners.current).forEach((siteId) => {
          if (!newSites.find((s) => s.id === siteId)) {
            testListeners.current[siteId]()
            delete testListeners.current[siteId]
            setSiteStats((prev) => {
              const copy = { ...prev }
              delete copy[siteId]
              return copy
            })
          }
        })

        newSites.forEach((site) => {
          if (!testListeners.current[site.id]) {
            const qTests = collection(db, "sites", site.id, "tests")
            const unsubscribeTest = onSnapshot(qTests, (snapshotTests) => {
              let success = 0, failure = 0
              snapshotTests.docs.forEach((doc) => {
                const data = doc.data()
                if (data.status === "success") success++
                else failure++
              })
              setSiteStats((prev) => ({ ...prev, [site.id]: { success, failure } }))
            })
            testListeners.current[site.id] = unsubscribeTest
          }
        })
      })

      return () => {
        unsubscribeSites()
        Object.values(testListeners.current).forEach((unsub) => unsub())
        testListeners.current = {}
      }
    })

    return () => unsubscribeAuth()
  }, [router])

  const data = {
    labels: sites.map((s) => s.nome),
    datasets: [
      {
        label: "Sucesso",
        data: sites.map((s) => siteStats[s.id]?.success || 0),
        backgroundColor: "green"
      },
      {
        label: "Falha",
        data: sites.map((s) => siteStats[s.id]?.failure || 0),
        backgroundColor: "red"
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        precision: 0
      }
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {user && <Header usuario={user} isModalOpen={false} setIsModalOpen={() => {}} onSiteAdded={() => {}} />}

      <div className="p-6 max-w-4xl mx-auto mt-24 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-6">📊 Testes de Sites</h1>
          <Button variant="outline" onClick={() => router.push("/dashboard")}>
            ← Voltar para Dashboard
          </Button>
        </div>

        <Bar data={data} options={options} />
      </div>
    </div>
  )
}
