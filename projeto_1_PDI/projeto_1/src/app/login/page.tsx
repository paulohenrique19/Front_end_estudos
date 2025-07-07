"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"

const loginPageForm = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

type LoginPageForm = z.infer<typeof loginPageForm>

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginPageForm>({
    resolver: zodResolver(loginPageForm),
  })

  const [firebaseError, setFirebaseError] = useState("")
  const router = useRouter()

  const onSubmit = async (data: LoginPageForm) => {
    setFirebaseError("")
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      router.push("/dashboard")
    } catch (err: any) {
      setFirebaseError("E-mail ou senha inválidos.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-6 bg-card p-8 rounded-2xl shadow-lg"
      >
        <div className="text-2xl font-semibold text-center">Login</div>

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

        {firebaseError && <p className="text-sm text-red-500">{firebaseError}</p>}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </div>
  )
}
