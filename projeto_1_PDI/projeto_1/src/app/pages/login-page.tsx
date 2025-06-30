"use client"

import { z } from 'zod'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const loginPageForm = z.object({
    email: z.string().email(),
    password: z.string()
  })

type LoginPageForm = z.infer<typeof loginPageForm>

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



    const { register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<LoginPageForm>({
            defaultValues: {
            email: '',
            password: '',
        }
    })

    function handleSignIn {
        console.log('Login')
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-background' onSubmit={handleSubmit(handleSignIn)}>
            <div>
                <Label htmlFor="email">Seu e-mail</Label>
                <Input id="email" type="email" {...register('email')}/>
            </div>
            <div>
                <Label htmlFor="password">Seu e-mail</Label>
                <Input id="password" type="password" {...register('password')}/>
            </div>
            <Button disabled={isSubmitting} type="submit">Acessar painel</Button>
            <p>Teste</p>
        </div>
    )
}



function useForm<T>(arg0: { defaultValues: { email: string; password: string } }): { register: any; handleSubmit: any; formState: { isSubmitting: any } } {
    throw new Error('Function not implemented.')
}

