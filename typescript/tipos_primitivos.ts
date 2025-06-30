//Notação para a variável do TS aceitar um tipo especifico
let username: string


username = "a"
// TS retorna erro nesses dois abaixo por não serem string
//username = 10
//username = !!!!!!!!!!false

//Para números
let numeros: number 

//Para booleanos
let bool: boolean


// Tipagem explícita:
// Essa variável "myName" é uma string porque estamos definindo ela como tal
let myName: string

// Inferência de Tipos
// Essa variável "message" é uma string porque estamos atribuindo uma string a ela
let message = "Oi, tudo bem?"
message = "Sim. Tudo ótimo!"


// Tipo any

// Com o tipo any a variável aceita qualquer valor.
// Inferindo tipos
let anyType
anyType = "Esse é um texto"
anyType = 45
anyType = true
// De forma explicita
let anyType2: any

// Tipagem de arrays

// Tipagem explícita ou anotação de tipo (type annotation)
let arrayNames: string[] = ["name1", "name2"]
let arrayNumbers: number[] = [1, 2, 3, 4, 5]
// Inferência de tipo
let products = ["Product A", "Product B", "Product C"]

// Tipagem em funções
                                        
function sum(x: number, y: number)  /*se adicionar ": void", ele dá erro no return */   {
    const result = x + y
    console.log("Resultado = " + result)

    /*Adicionando o return, a variável "resultado" vai assumir que o tipo retornado é number
    porque a variável retornada "result" é number*/
    return result
}

const resultado = sum(7, 3)

// tipo de parametro: string. tipo de retorno: string
const showMesage = (name: string): string => {
    console.log(name)
    return name

}

showMesage("string")

// Tipagem em objetos

// tornando address opicional: (adicionar ? após o nome da variável)
let userName: { name: string, age: number, address?
    : string} = { name: "Paulo", age: 22}

// ou sigIn(data :{email, password}){}
function signIn({ email, password, address }:{email: string, password: string, address?: string})
{

}
signIn({email: "paulo@gmail.com", password: "123"})

//null e undefined

// undefined
let value: number
value = 12
console.log(value)

let user = {
    name: "Paulo"
}

// console.log(user.email)

// null (ausência intencional de valor)
let email: null
console.log(email)

if (!email){
    console.log("Informe o e-mail!")
}

// union types (quando a variável pode assumir mais de um tipo)

let response: string | null | number

response = "Teste"
response = null
response = 19