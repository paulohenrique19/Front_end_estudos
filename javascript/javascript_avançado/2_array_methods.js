// Map
/* O método map() chama a função callback recebida por
parâmetro para cada elemento do Array original, em ordem, e
construí um novo array com base nos retornos de cada chamada. 
E no final, devolve o novo array.*/

const products = ["Teclado", "Mouse", "Monitor"]

// Percorrendo os itens do array
products.map((product) => {
    console.log(product)
})

// Sintaxe reduzida do map.
products.map((product) => console.log(product))

// Utilizando o novo objeto retornado
const formatted = products.map((product) => {
    //return product.toUpperCase();
    
    return {
        id: Math.random(),
        description: product,
        price: 150
    }

})

console.log(formatted)


/*O método filter() cria um novo array com todos os 
elementos que passaram na condição */

const words = ["Javascript", "HTML", "CSS", "Web", "HTML5"]

// retornando os itens que não sejam "HTML"
const result = words.filter((item) => item != "HTML")
console.log(result)

const produtos = [
    { description: "Teclado", price: 150, promotion: true },
    { description: "Mouse", price: 70, promotion: false},
    { description: "Monitor", price: 900, promotion: true},
]

// retornando os itens que estão na promoção
const promotion = produtos.filter ((produto) => produto.promotion === true)
console.log(...promotion)

/* O método findIndex() retorna o indice no array do primeiro elemento
que satisfazer a condição. Caso contrário, retorna -1, indicando que nenhum elemento
passou no teste.*/



const values = [2, 5, 7, 1, 8, 4]

// retorna o indice do primeiro número ímpar encontrado
console.log(values.findIndex((value) => !(value % 2 === 0)))

/* O método find() retorna o valor do primeiro elemento do array
que satisfazer a condição. Caso contrário, undefined é retornado */

const valores = [5, 12, 8, 130, 44]

const found = valores.find((value) => value > 10)
console.log(found)

// exemplo com objetos

const fruits = [
    { name: "apples", quantity: 23 },
    { name: "bananas", quantity: 28 },
    { name: "oranges", quantity: 52}
]

// retorna as frutas com quantidade entre 25 e 30
const foundFruit = fruits.find((fruit) => fruit.quantity >= 25 && fruit.quantity <= 30)

console.log(foundFruit)

/* O método every() testa se todos os elementos do array passam na condição
e retorna um valor Boolean*/

// Exemplo de array de números
const numbers = [15, 30, 39, 29]

// Verificando se todos os números são maiores ou iguais a 20
const resultNumbers = numbers.every((number) => number >= 20)
console.log(resultNumbers)

/* O método some() testa se ao menos um dos elementos no array passam na condição
e retorna um valor Boolean */

const resultNumbersSome = numbers.some((number) => number >= 20)
console.log(resultNumbersSome)

/* 
    O método reduce é utilizado para reduzir um array a um único valor

    Parâmetros:
    - Array original (someValues)
    - Acumulador (accumulator)
    - Valor da iteração (currentValue)
    - Valor inicial (0)
    - Index (index da iteração atual - opcional)

*/

const someValues = [1, 2, 3, 4, 5]

const sum = someValues.reduce((accumulator, currentValue, index) => {
    console.log("Acumulador", accumulator)
    console.log("Current value", currentValue)
    console.log("Index", index)

    console.log("########################")
    console.log("Soma:". accumulator + currentValue)


    return accumulator + currentValue
}, 0 /* <--- Valor inicial*/)

console.log("Resultado da soma final:", sum)