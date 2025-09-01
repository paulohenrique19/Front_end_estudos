"use client"

import React, { useEffect, useState } from 'react'
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
import { Loader2 } from 'lucide-react'

const editSiteForm = z.object({
  nome: z.string().max(100, "Tamanho máximo, 100 caractéres"),
  site: z.string()
    .min(1, "Insira uma URL")
    .refine((val) => {
      const url = val.startsWith("http://") || val.startsWith("https://") ? val : `https://${val}`
      try {
        new URL(url)
        return true
      } catch {
        return false
      }
    }, { message: "Insira uma URL válida" }),
})

type EditSiteForm = z.infer<typeof editSiteForm>

type EditSiteProps = {
  usuario: User | null
  open: boolean
  onOpenChange: (open: boolean) => void
  siteData: {
    id: string
    nome: string
    site: string
  }
  onSiteUpdated: () => void
}

const EditSite = ({ usuario, open, onOpenChange, siteData, onSiteUpdated }: EditSiteProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setUser(usuario)
  }, [usuario])

  const form = useForm<EditSiteForm>({
    resolver: zodResolver(editSiteForm),
    defaultValues: {
      nome: siteData.nome,
      site: siteData.site,
    }
  })

  const handleUpdateSite = async (data: EditSiteForm) => {
    setLoading(true)

    const normalizedUrl = data.site.startsWith("http://") || data.site.startsWith("https://")
      ? data.site
      : `https://${data.site}`

    const urlId = encodeURIComponent(normalizedUrl)

    try {
      await setDoc(doc(db, "sites", urlId), {
        nome: data.nome,
        site: normalizedUrl,
        userId: user?.uid
      })

      onOpenChange(false)
      onSiteUpdated()
    } catch (err: any) {
      console.error("Erro ao atualizar site", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar site</DialogTitle>
          <DialogDescription>
            Atualize os dados do site monitorado.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <div className="space-y-8">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="site"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="button"
              className="btn btn-primary"
              disabled={loading}
              onClick={form.handleSubmit(handleUpdateSite)}
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : null}
              Salvar alterações
            </button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default EditSite
