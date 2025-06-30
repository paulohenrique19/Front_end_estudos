import { Link } from "react-router-dom"
import tw from "tailwind-styled-components"

const NotFound = () => {
  return (
    <Container>
        <Title>Página não encontrada</Title>
        <Text>Voltar para o <Link to="/" className="text-sky-600 dark:text-sky-400">Dashboard</Link>
        </Text>
    </Container>
  )
}

export default NotFound

export const Container = tw.div`
    flex h-screen flex-col items-center justify-center gap-2
`
export const Title = tw.h1`
    text-4xl font-bold 
`
export const Text = tw.p`
    text-accent-foregroud
`
