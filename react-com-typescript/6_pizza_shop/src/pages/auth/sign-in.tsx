import { useEffect } from "react";
import { Container, 
        ContainerChild, 
        FormHeader, 
        FormContent, 
        Title, 
        Description, 
        InputContainer,
        ButtonInput,
        ButtonToggle} from "./sign-in";

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";



const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>



export default function SignIn() {

  //hook semelhante ao useState, retorna os search params da URL e também atualiza eles
  const [searchParams] = useSearchParams()

  const { register, 
          handleSubmit, 
          formState: { isSubmitting } 
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? ''
    }
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,

  })

  async function handleSignIn(data: SignInForm) {
      try {
  
  
          await authenticate({ email: data.email })
      
          toast.success('Enviamos um link de autenticação para seu e-mail', {
          action: {
              label: 'Reenviar',
              onClick: () => handleSignIn(data)
          }
          })
      } catch {
          toast.error('Erro ao fazer login')
      }
  }

  useEffect(() => {
      document.title = "Login";
    }, []);
    
  return (
    <Container>
      <ButtonToggle asChild variant="ghost">
        <Link to="/sign-up">Novo estabelecimento</Link>
      </ButtonToggle>
      <ContainerChild>
        <FormHeader>
          <Title>Acessar painel</Title>
          <Description>Acompanhe suas vendas pelo painel do parceiro!</Description>
        </FormHeader>

        <FormContent onSubmit={handleSubmit(handleSignIn)}>
          <InputContainer>
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')}/>
          </InputContainer>

          <ButtonInput disabled={isSubmitting} type="submit">Acessar painel</ButtonInput>
        </FormContent>

      </ContainerChild>
    </Container>
  );
}
