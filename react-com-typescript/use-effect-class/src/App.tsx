import { useEffect, useState } from 'react'

function avisarAPI(){
  console.log('Lista salva!');
}


function App() {

  const [list, setList] = useState<String[]>([])
  const [filter, setFilter] = useState('')

  // primeiro parâmetro -> qual função será executada
  // segundo parâmetro -> variável a ser monitorada

  /**
   * 
   * UseEffect executa pelo menos uma vez quando o oponente é exibido em tela, então uma boa prática seria usar condicionais para evitar com que
   * ele seja executado no início
   * 
   * 
   */
  useEffect(() => {
    avisarAPI()
  }, [list])


  //useEffect com array vazio significa que ele irá executar apenas na primeira renderização
  useEffect(() => {
    fetch('https://api.github.com/users/paulohenrique19/repos')
    .then(response => response.json())
    .then(data => {
      setList(data.map((item: any) => item.full_name))
    })
  }, [])

  const filteredList = list.filter(item => item.includes(filter))


  function addToList() {
    setList(state => [...state, 'Novo Item'])  
  }

  return (
    <>
      <div>
        <input 
          type='text' 
          onChange={e => setFilter(e.target.value)}
          value= {filter}>
        </input>

        <ul>
          {list.map(item => <li>{item}</li>)}
        </ul>

        <ul>
          {filteredList.map(item => <li>{item}</li>)}
        </ul>

        <button onClick={addToList}>Add to list</button>
      </div>
    </>
  )
}

export default App

// useEffect -> Side-effect -> Efeito Colateral
