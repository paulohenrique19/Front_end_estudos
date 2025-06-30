import { useReducer} from "react";

type State = {
    count: number
}

type Action = | { type: 'increment' } | { type: 'decrement' };

const initializeState = { count: 0 };

function reducer(state: State, action: Action)
{
    switch(action.type)
    {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };     
            
    }
}


export function Contador() {

    // state: estado atual da variável
    // dispatch: função para enviar ações para o reducer
    // reducer: função que define como o estado será modificado
    // initializeState: valor inicial do estado
    const [state, dispatch] = useReducer(reducer, initializeState)

    return (
        <div>
            <h1>Contador</h1>
            <div>
               <button onClick={ () => dispatch({ type: 'decrement' })}>-</button>
               <span>{state.count}</span>
               <button onClick={ () => dispatch({ type: 'increment' })}>+</button>
            </div>
        </div>
    )
}