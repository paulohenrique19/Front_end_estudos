/* strict mode (modo estrito): ativando esse modo, os
erros que eram silenciosos passam a gear exceções no JS 

declaração: "use strict", pode ser a nivel global ou a nivel de escopo local

*/

// use strict a escopo global
"use strict"

function showMessage() {

    
    // use strict a escopo local
    "use strict"


    // declarando uma variável sem especificar let, const ou var
    // sem o "use strict", ela não dá erro, com o use strict, ela dá erro
    personName = "user"

    console.log("Hi", personName)
}

showMessage()


"use strict"

/* sem o use strict, o programa não reclama por tentarmos alterar o valor de uma
propriedade através de um método de leitura "get" (isso não faz sentido), com ele, não
*/

class Student {
    get point() {
        return 7
    }
}

let student = new Student()
student.point = 10
console.log(student.point)


// quando passamos parâmetros duplicados

function sum(a, a, c) {
    return a + a + c
}

const result = sum(1, 3, 2) // resultado será 8 porque o ultimo parametro da mesma variável sobrepoe os outros
console.log(result)

/* destructuring assignment (desestruturação) permite extrair
dados de arrays ou objetos em variáveis distintas. */

const data = ["paulo", "paulo@gmail.com"]

// desestruturando array

const [username, email] = data
console.log("Nome:", username)
console.log("Email:", email)

// desestruturando somente o primeiro

const fruits = ["Banana", "Apple", "Orange"]
const [banana] = fruits
console.log(banana)

// ignorando o primeiro na desestruturação
const [_, apple] = fruits
console.log(apple)

// ignorando o primeiro e o segundo na desestruturação
const [, , orange] = fruits
console.log(orange)

// desestruturando objetos

const product = {
    description: "Keyboard",
    price: 150
}

const {description, price} = product

console.log("Description:", description)
console.log("Preço:", price)

function newProduct(description, price) {
    console.log("### new product ###")
    console.log("Description:", description)
    console.log("Preço:", price)
}

// dessa maneira, passamos os itens para função e a ordem definida dentro dela já não importa mais
newProduct({
    description: "Mouse",
    price: 70
})

/* rest params (...) permite representar um
número indefinido de argumentos como um array */

/*Na função values, o ...rest seria o array de argumentos indefinidos,
por isso conseguimos acessar através de um for */
function values(a, ...args) {
    //console.log(a)
    console.log(args.length)
    console.log(...args) /*Retorna a lista de valores sem o formato de array */
    console.log(args) /*Retorna a lista de valores com o formato de array */

    for (index of args) {
        console.log(index)
    }

}

// passando o 2 e os outros argumentos indefinidos
values(2, 1, 2, !false, {})

/* spread (espalhar) permite que um objeto
iterável, como uma expressão de array ou uma
string seja expandido para ser usado onde zero ou mais argumentos */

const numbers = [1, 2, 3]

console.log(numbers)

// spread
console.log(...numbers)


const data1 = 
[
    {
        name: "a",
        email: "a@gmail.com"
    },
    {
        name: "b",
        email: "b@gmail.com"
    }
]

console.log(data1)

// utilizando o spread no array com objetos (só vai printar o conteúdo do array)
console.log(...data1)