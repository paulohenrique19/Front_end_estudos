"use client"

import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut, User } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import NewSite from "./newSite"

export function Header() {
  const [user, setUser] = useState<User | null>(null)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const router = useRouter()


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
    })

    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
    router.push("/login")
  }

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  return (
    <div>
        <div className="w-full px-6 py-4 bg-card border-b flex justify-between items-center shadow-sm fixed top-0 left-0 z-50">
            <div className="text-xl font-bold">Testes automáticos</div>
            <div className="flex items-center gap-4">
                {user && <span className="text-sm text-muted-foreground">{user.email}</span>}
                <Button variant='destructive' onClick={handleOpenModal}>
                    Cadastrar Site            
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </div>
        {isOpenModal && 
        (<NewSite
            usuario={user}
            open={isOpenModal}
            onOpenChange={setIsOpenModal}
            
        />
        )}
    </div>
  )
}
