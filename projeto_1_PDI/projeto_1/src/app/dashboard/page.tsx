"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Header } from "@/components/header"

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Carregando dashboard...
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
        <Header />
      <h1 className="text-2xl font-bold">Bem-vindo ao Dashboard</h1>
    </div>
  )
}
