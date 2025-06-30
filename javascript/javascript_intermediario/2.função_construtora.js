function createProduct(name) {
    const product = {}

    product.name = name 
    product.details = function () {
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}

/* O new cria um novo objeto utilizando a 
estrutura da função construtora. */
const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()


// Os objetos são diferentes, logo, vai dar false
console.log(product1 === product2)

// Mas os tipos são iguais, então vai dar true
console.log(typeof(product1) === typeof(product2))

/* Exemplos de funções construtoras disponíveis 
no próprio JS */
let str = new String("String")
console.log(str)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2024-1-1")
console.log(date)

// Outra forma de criar funções construtoras

function Person(name) {
    this.name = name
    this.message = function() {
        console.log(`Name: ${this.name}`)
    }
}

const person1 = new Person("Name")
console.log(person1.name)
person1.message()