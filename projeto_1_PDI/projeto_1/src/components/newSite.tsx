import React, { useState, useEffect } from 'react'
import { User } from 'firebase/auth'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useRouter } from 'next/navigation'

const registerSiteForm = z.object({
  site: z.string().url({ message: "Insira uma URL válida" }),
})

type RegisterSiteForm = z.infer<typeof registerSiteForm>

type NewSiteProps = {
  usuario: User | null 
  open: boolean
  onOpenChange: (open: boolean) => void
}

const NewSite = ({ usuario, open, onOpenChange }: NewSiteProps) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    setUser(usuario)
  }, [usuario]) 

  const router = useRouter()

  const form = useForm<RegisterSiteForm>({
    resolver: zodResolver(registerSiteForm),
    defaultValues: {
      site: ""
    }
  })

  const handleCreateNewSite = async (data: RegisterSiteForm) => {

    const urlId = encodeURIComponent(data.site)
    try {
      await setDoc(doc(db, "sites", urlId), {
        site: data.site,
        userId: user?.uid
      })
    } catch (firestoreErr: any) {
      console.error("Erro ao cadastrar um site", firestoreErr)
      return
    }

    router.push('/dashboard')

    console.log("Usuário:", user?.uid)
    console.log("Dados do formulário:", data)
    
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar novo site</DialogTitle>
          <DialogDescription>
            Insira a URL do site que você deseja monitorar.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <div className='space-y-8'>
            <FormField
              control={form.control}
              name="site"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira a URL do site aqui" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={form.handleSubmit(handleCreateNewSite)}
            >
              Cadastrar
            </button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default NewSite
