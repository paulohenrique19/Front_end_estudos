// criando array com construtor

const newArray = new Array()
console.log(typeof newArray)
console.log(newArray)
console.log("Teste".length) // strings são arrays de char
console.log(newArray.length)

// [] - Array
// {} - Object

// cria o array com 10 posições vazias
const another_array = new Array(10)
console.log(another_array)
console.log(another_array.length)

let letters = ['a', 'b', 'c' ,'d', 'e']

console.log(letters)
console.log(letters.length)

// retorna o item na posição 3, se não existir essa posição no array, retorna undefined
console.log(letters[3])

// retornando o item na última posição do array
console.log(letters[letters.length - 1])


//convertendo string para array
let fullName = "Teste de Souza dos Santos"

// cria um array com os nomes separando pelo espaço
console.log(fullName.split(" "))

// cria um array com as letras
console.log(Array.from(fullName))

// adicionando e removendo item do array
let users = []

// adiciona um item ao final do array
users.push("user 1")
users.push("user 2")
users.push("user 3")
// adiciona um item ao inicio do array
users.unshift("user 4")
// remove do inicio do array
users.shift()
// remove do final do array
users.pop()

console.log(users)

//usando o indice
letters = ['a', 'b', 'c' ,'d', 'e', 'f', 'g']

// encontra e retorna o indice do elemento do array, if not found, returns -1
let position = letters.indexOf("b")
console.log(position)

// remove um conjunto de elementos do array a partir de uma distancia partindo de um elemento
// aqui estamos removendo os itens da distancia 1 até 3
letters.splice(1, 3)

position = letters.indexOf("f")
//removendo o item de uma posição específica encontrada no indexOf()
letters.splice(position, 1)


console.log(letters)

let arrayObjetos = [
    "Um texto",
    10,
    true,
    function f() {
        console.log("Função dentro do array")
    },
    {
        name: "paulo",
        email: "paulo@mail.com"
    }
]

console.log(arrayObjetos[arrayObjetos.length - 1])

//executando a função dentro do array
arrayObjetos[3]()

// acessando os itens do objeto {} do array
console.log(arrayObjetos[4].name, arrayObjetos[4].email)

// verificando se existe um item no array
console.log(arrayObjetos.includes(10))