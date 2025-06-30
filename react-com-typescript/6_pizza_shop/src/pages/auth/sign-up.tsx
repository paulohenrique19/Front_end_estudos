import { useEffect } from "react";
import { Container, 
        ContainerChild, 
        FormHeader, 
        FormContent, 
        Title, 
        Description, 
        InputContainer,
        ButtonInput,
        ButtonToggle,
        TermsService,
        UnderLine} from "./sign-in";

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link, useNavigate } from "react-router-dom";

import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { registerRestaurant } from "@/api/register-restaurant";



const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>



export default function SignUp() {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

  const { mutateAsync: registerNewRestaurant } = useMutation({
      mutationFn: registerRestaurant,
  
    })

  async function handleSignUp(data: SignUpForm) {
    try {

        console.log(data)

        await registerNewRestaurant(data);
    
        toast.success('Restaurante cadastrado com sucesso!', {
        action: {
            label: 'Login',
            onClick: () => navigate(`/sign-in?email=${data.email}`),
        }
        })
    } catch {
        toast.error('Erro ao cadastrar restaurante')
    }
  }

  useEffect(() => {
    document.title = "Cadastro";
  }, []);
    
  return (
    <Container>
      <ButtonToggle asChild variant="ghost">
        <Link to="/sign-in">Fazer Login</Link>
      </ButtonToggle>
      <ContainerChild>
        <FormHeader>
          <Title>Criar conta grátis</Title>
          <Description>
            Seja um parceiro e comece suas vendas!
          </Description>
        </FormHeader>

        <FormContent onSubmit={handleSubmit(handleSignUp)}>
          <InputContainer>
            <Label htmlFor="restaurantName">Nome do restaurante</Label>
            <Input id="restaurantName" type="text" {...register('restaurantName')}/>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="managerName">Seu nome</Label>
            <Input id="managerName" type="text" {...register('managerName')}/>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')}/>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="phone">Seu celular</Label>
            <Input id="phone" type="tel" {...register('phone')}/>
          </InputContainer>

          <ButtonInput disabled={isSubmitting} type="submit">
            Finalizar cadastro
          </ButtonInput>

          <TermsService>
            Ao continuar, você concorda com nossos{' '}
            <UnderLine href="">
                termos de serviço
            </UnderLine>{' '}
            e{' '}
            <UnderLine>
                políticas de privacidade 
            </UnderLine>
          </TermsService>

        </FormContent>

      </ContainerChild>
    </Container>
  );
}
