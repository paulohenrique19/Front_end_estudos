"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "@/lib/firebase"
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

type Site = {
  id: string
  site: string
  userId: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [sites, setSites] = useState<Site[]>([])
  const [search, setSearch] = useState("")

  const filteredSites = sites.filter((site) =>
    site.site.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login")
      } else {
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [router])

  const getAllSites = async () => {
    const snapshot = await getDocs(collection(db, "sites"))
    const siteList: Site[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Site)
    }))
    setSites(siteList)
  }

  const deleteSite = async (id: string) => {
    await deleteDoc(doc(db, "sites", id))
    setSites((prev) => prev.filter((site) => site.id !== id))
  }

  useEffect(() => {
    getAllSites()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Carregando dashboard...
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Buscar site por URL"
          className="w-full p-2 border rounded mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredSites.length > 0 ? (
          filteredSites.map((site) => (
            <div
              key={site.id}
              className="border p-4 rounded shadow-sm bg-white flex justify-between items-center"
            >
              <div>
                <p><strong>URL:</strong> {site.site}</p>
                <p><strong>ID do Usuário:</strong> {site.userId}</p>
              </div>
              <Button
                variant="destructive"
                onClick={() => deleteSite(site.id)}
              >
                Excluir
              </Button>
            </div>
          ))
        ) : (
          <p>Nenhum site encontrado.</p>
        )}
      </div>
    </div>
  )
}
