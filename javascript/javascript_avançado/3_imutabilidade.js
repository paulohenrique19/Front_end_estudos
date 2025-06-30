const address1 = {
    street: "Av. Fernando Machado",
    number: 5,
}

/*
(const address2 = address1), address2 não cria um novo
objeto na memória, apenas faz uma referencia para o
espaço alocado na memória de address1, se alterarmos algum valor em
address2, a mudança ocorrerá também address1 

logo, address 2 === address1 (são iguais)

*/
const address2 = address1
address2.number = 30
console.log(address1, address2)


/* Para criar um novo objeto na memória herdando e copiando as antigas propriedades,
podemos fazer isso: */

/* newAddress herda as propriedades e valores de address, porém cria um novo
objeto ao invés de referenciar, ou seja, se alterarmos algum valor de newAddress, 
a mudança ocorrerá somente nele  */

const address = {
    street: "Av. Fernando Machado",
    number: 5,
}

const newAddress = { ...address}
newAddress.number = 30

console.log(address, newAddress)

/* Outra maneira de criar um objeto e alterar um valor de forma simplificada */

const newAddress2 = {...address, number: 50}
console.log(address, newAddress, newAddress2)

// Exemplo de referência de array

const list1 = ["apple", "orange"]

const list2 = list1 
list2.push("watermelon")

console.log(list1, list2)


// Exemplo de cópia de array para um novo objeto

const list3 = [...list1]
list3.push("strawberry")

console.log(list1, list3)

// ou:

const list4 = [...list1, "grape"]
console.log(list1, list4)

// Shallow Copy (cópia superficial): não pega os itens aninhados
const htmlCourse = {
    course: "HTML",
    students: [{ name: "Paulo", email: "paulo@email.com"}]
}

// herda os atributos e valores de students, mas altera o atributo course
/*
const jsCourse = {
    ...htmlCourse,
    course: "Javascript"
}
*/
// Vai modificar o html course também porque students é uma referência e não uma cópia
// jsCourse.students.push({name: "another_user", email: "another_user@email.com"})


// Deep Copy (cópia profunda)
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    students: [...htmlCourse.students], /*{name: "another_user", email: "another_user@email.com"}]*/
}

jsCourse.students.push({name: "another_user", email: "another_user@email.com"})
console.log(htmlCourse, jsCourse)

// Shallow Freezing (congela o objeto e impede a modificação, menos para itens aninhados)
const book = {
    title: "objetos imutáveis",
    category: "javascript",
    author: {
        name: "paulo",
        email: "paulo@email.com"
    },
}

// Utiliando operador de desestruturação (rest operator) para remover propriedades.

const { category, ...bookWithoutCategory} = book
console.log(bookWithoutCategory)

/*O JS em si não impoe restrições a modificação dos objetos */
book.category = "HTML"
// congelando o objeto para impedir modificações
Object.freeze(book)
book.category = "CSS" // Não modificada


// Porém, o Object.freeze() permite modificações em objetos aninhados (shallow freezing)
book.author.name = "pedro"
console.log(book)

// Deep Freezing, proibindo modificações em objetos aninhados
const livro = {
    title: "objetos imutáveis",
    category: "javascript",
    author: {
        name: "paulo",
        email: "paulo@email.com"
    },
}

// Algorítmo para aplicar o deep freeze:
function deepFreeze(object) {

    // pega todas as propriedades do objeto e devolve como um array
    const props = Reflect.ownKeys(object)

    // iterando sobre todas as propriedades do objeto
    for (const prop of props)
    {
        // obtém o valor associado a propriedade atual.
        const value = object[prop]

        /* verifica se o valor é um objeto ou função para continuar aplicando
        o deepFreeze em objetos aninhados, em resumo, essa recursão é para atingir
        níveis mais profundos de aninhamento*/
        if(value && typeof value === "object" || typeof value === "function") {
            deepFreeze(value)
        }
    }

    // Retorna o objeto congelado.
    return Object.freeze(object)
}


deepFreeze(livro)