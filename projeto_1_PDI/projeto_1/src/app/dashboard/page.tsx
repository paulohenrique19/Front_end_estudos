"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { User, onAuthStateChanged } from "firebase/auth"
import { auth, db } from "@/lib/firebase"
import {
  collection,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
  addDoc
} from "firebase/firestore"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Trash2, PlayCircle, BarChart2 } from "lucide-react"
import EditSite from "@/components/editSite"

type Site = { id: string; site: string; userId: string; nome: string }
type SiteTestState = { result: string | null; screenshot: string | null; testing: boolean }

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [sites, setSites] = useState<Site[]>([])
  const [search, setSearch] = useState("")
  const [results, setResults] = useState<Record<string, SiteTestState>>({})
  const [user, setUser] = useState<User | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingSite, setEditingSite] = useState<Site | null>(null)

  const filteredSites = sites.filter((site) =>
    site.nome.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) router.push("/login")
      else {
        setUser(firebaseUser)
        setLoading(false)
        refreshSites(firebaseUser)
      }
    })
    return () => unsubscribe()
  }, [router])

  const refreshSites = (currentUser: User | null = user) => {
    if (!currentUser) return
    const q = query(collection(db, "sites"), where("userId", "==", currentUser.uid))
    return onSnapshot(q, (snapshot) => {
      const siteList: Site[] = snapshot.docs.map((doc) => ({
        ...(doc.data() as Site), 
        id: doc.id               
      }))
      setSites(siteList)
    })
  }

  const deleteSite = async (id: string) => {
    await deleteDoc(doc(db, "sites", id))
    setSites((prev) => prev.filter((site) => site.id !== id))
    setResults((prev) => {
      const newResults = { ...prev }
      delete newResults[id]
      return newResults
    })
  }

  const testSite = async (siteId: string, siteUrl: string) => {
    setResults((prev) => ({
      ...prev,
      [siteId]: { result: "⏳ Testando...", screenshot: null, testing: true }
    }))

    try {
      const res = await fetch("/api/test-site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: siteUrl })
      })
      const data = await res.json()

      await addDoc(collection(db, "sites", siteId, "tests"), {
        status: data.success ? "success" : "failure",
        timestamp: new Date()
      })

      setResults((prev) => ({
        ...prev,
        [siteId]: {
          result: data.message,
          screenshot: data.screenshot || null,
          testing: false
        }
      }))
    } catch (err: any) {
      setResults((prev) => ({
        ...prev,
        [siteId]: {
          result: `❌ Erro de requisição: ${err.message}`,
          screenshot: null,
          testing: false
        }
      }))
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        <Loader2 className="animate-spin mr-2" /> Carregando dashboard...
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 bg-muted/30">
      <Header
        usuario={user}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onSiteAdded={() => refreshSites(user)}
      />

      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">📊 Dashboard</h1>
        <p className="text-muted-foreground">
          Gerencie seus sites monitorados. Teste disponibilidade e visualize capturas.
        </p>

        <Button
          variant="outline"
          className="mb-4 flex items-center gap-2"
          onClick={() => router.push("dashboard/charts")}
        >
          <BarChart2 /> Estatísticas
        </Button>

        <Input
          type="text"
          placeholder="🔎 Buscar site por nome..."
          className="w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid gap-4">
          {filteredSites.length > 0 ? (
            filteredSites.map((site) => {
              const siteState = results[site.id] || { result: null, screenshot: null, testing: false }

              return (
                <Card key={site.id} className="shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">
                      {site.nome} <span className="text-sm text-muted-foreground">({site.site})</span>
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="green"
                        size="sm"
                        disabled={siteState.testing}
                        onClick={() => testSite(site.id, site.site)}
                      >
                        {siteState.testing ? (
                          <Loader2 className="animate-spin size-4" />
                        ) : (
                          <PlayCircle className="size-4" />
                        )}
                        Testar
                      </Button>

                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setEditingSite(site)}
                      >
                        ✏️ Editar
                      </Button>

                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteSite(site.id)}
                      >
                        <Trash2 className="size-4" />
                        Excluir
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {siteState.result && (
                      <div className="p-3 rounded-md border bg-muted space-y-2">
                        <div className="flex justify-between items-start">
                          <p>{siteState.result}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              setResults((prev) => ({
                                ...prev,
                                [site.id]: { ...prev[site.id], screenshot: null, result: null }
                              }))
                            }
                          >
                            Fechar
                          </Button>
                        </div>
                        {siteState.screenshot && (
                          <img
                            src={siteState.screenshot}
                            alt="Screenshot do site"
                            className="mt-2 rounded-md border shadow-sm"
                          />
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })
          ) : (
            <p className="text-center text-muted-foreground">
              Nenhum site encontrado.
            </p>
          )}
        </div>
      </div>

      {editingSite && (
        <EditSite
          usuario={user}
          open={!!editingSite}
          onOpenChange={(open) => { if (!open) setEditingSite(null) }}
          siteData={editingSite}
          onSiteUpdated={() => refreshSites(user)}
        />
      )}
    </div>
  )
}
