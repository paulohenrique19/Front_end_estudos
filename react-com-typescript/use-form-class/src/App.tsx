import { useState } from 'react'
import './App.css'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

/**
 * Tópicos abordados
 * 
 * [ ] Validação / transformação
 * [ ] Field Arrays
 * [ ] Upload de arquivos
 * [ ] Composition Pattern
 */


// o zod é usado para validação
const createUserFormSchema = z.object({
  name: z.string()
    .nonempty('O nome é obrigatório')
    .transform(name => { //transform() aplica uma transformação PERSONALIZADA no objeto
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }), 
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase()
    .refine(email => {
      return email.endsWith('.com')
    }, 'O email deve terminar .com')
    , 
  password: z.string()
    .min(6, 'Password must be at least 6 characters long')
})

//criando tipagem para os dados e inferindo o tipo com base no tipo do createUserFormSchema
type CreateUserFormData = z.infer<typeof createUserFormSchema>

function App() {
  const [ output, setOutput ] = useState('')
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  const {} = useFieldArray ({
    name: ''
  })
  
  
  /*register serve pra registrar os campos nos inputs
    usando register, não precisamos mais do atributo 'name'
  */

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <div>
        <main>
          <form onSubmit={handleSubmit(createUser)} action="">
            <div>
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                {...register('name')}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            
            
            <div>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                {...register('email')}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <input 
                type="password" 
                {...register('password')}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <button type='submit'>Salvar</button>
          </form>
          <pre>{output}</pre>
        </main>
      </div>
    </>
  )
}

export default App
