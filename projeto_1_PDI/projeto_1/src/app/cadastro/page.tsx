"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"

const cadastroForm = z.object({
  email: z.string().email("Digite um e-mail válido"),
  password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres"),
})

type CadastroForm = z.infer<typeof cadastroForm>

export default function CadastroPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CadastroForm>({ resolver: zodResolver(cadastroForm) })

  const [firebaseError, setFirebaseError] = useState("")
  const router = useRouter()

  const onSubmit = async (data: CadastroForm) => {
    setFirebaseError("")
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
  
      try {
        await setDoc(doc(db, "usuarios", userCred.user.uid), {
          email: data.email,
          criadoEm: new Date(),
        })
      } catch (firestoreErr: any) {
        console.error("Erro ao salvar no Firestore:", firestoreErr)
        setFirebaseError("Cadastro criado, mas houve erro ao salvar os dados.")
        return 
      }
  
      router.push("/login")
    } catch (authErr: any) {
      console.error("Erro no Auth:", authErr)
      setFirebaseError("Erro ao cadastrar. Verifique e-mail e senha.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-6 bg-card p-8 rounded-2xl shadow-lg"
      >
        <div className="text-2xl font-semibold text-center">Cadastro</div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {firebaseError && (
          <p className="text-sm text-red-500">{firebaseError}</p>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </form>
    </div>
  )
}
