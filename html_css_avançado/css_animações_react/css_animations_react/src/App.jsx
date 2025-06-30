import './App.css'
import './styles/global.css'
import { useState } from 'react'
import CSS_Transitions from './Components/CSS_Transitions'
import CSS_Animations from './Components/CSS_Animations'

function App() {
  // Estado para controlar se o componente será exibido
  const [showTransition, setShowTransition] = useState(true)
  const [showAnimation, setShowAnimation] = useState(true)

  // Função para alternar a exibição do componente
  const toggleTransitions = () => {
    setShowTransition(prevState => !prevState)
    setShowAnimation(prevState => !prevState)
  }

  const toggleAnimations = () => {
    setShowAnimation(prevState => !prevState)
  }

  return (
    <>
      <div>
        <h1>CSS Animations</h1>
        <h2>Transições:</h2>

        <div className='m-2'>
          <button onClick={toggleTransitions}>
            {showTransition ? 'Esconder' : 'Mostrar'} transições
          </button>
          
          {showTransition && <CSS_Transitions />}
        </div>

        <h2>Animações</h2>

        <div className='m-2'>
          <button onClick={toggleAnimations}>
            {showTransition ? 'Esconder' : 'Mostrar'} animações
          </button>
          
          {showAnimation && <CSS_Animations />}
        </div>


      </div>  
    </>
  )
}

export default App
