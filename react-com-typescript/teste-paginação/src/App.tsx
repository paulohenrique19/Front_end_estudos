import { useState } from 'react';
import estilos from './estilos.module.css'

const array = [
  "item 1", "item 2", "item 3", "item 4", "item 5",
  "item 6", "item 7", "item 8", "item 9", "item 10",
  "item 11", "item 12", "item 13", "item 14", "item 15",
  "item 16", "item 17", "item 18", "item 19", "item 20"
];

function App() {

  const [page, setPage] = useState(1)

  function switchPage(number: any) {
      setPage(number)
  }

  function sliceArray(array: any, pag: any) {
      const newArray = array.slice(((pag * 4) - 4), (pag * 4))
      return newArray;
  }


  return (
    <>
      {sliceArray(array, page).map((item: any, index: any) => {
        return (
          <div key={index}>
            {item}
          </div>
        );
      })}

      <div className={estilos.flex}>
        <button onClick={() => switchPage(1)}>1</button>
        <button onClick={() => switchPage(2)}>2</button>
        <button onClick={() => switchPage(3)}>3</button>
        <button onClick={() => switchPage(4)}>4</button>
        <button onClick={() => switchPage(5)}>5</button>
      </div>
  
      
    </>
  );
}

export default App;
