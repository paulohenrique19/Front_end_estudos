import React, { useState, useEffect } from 'react'
import { User } from 'firebase/auth'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from './ui/form'
import { Input } from './ui/input'

const registerSiteForm = z.object({
    site: z.string(),
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

  const form = useForm<RegisterSiteForm>({
    resolver: zodResolver(registerSiteForm),
    defaultValues: {
      site: ""
    }
  })

  const handleCreateNewSite = (data: RegisterSiteForm) =>
  {
    console.log(data)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar novo site</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleCreateNewSite)} className='space-y-8'>
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
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default NewSite
