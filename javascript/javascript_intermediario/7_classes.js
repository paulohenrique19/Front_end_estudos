class MyClass {
    constructor(str) {
        console.log("classe instanciada " + str)
    }
}

/* no momento da instanciação da classe, o construtor é executado,
por isso printamos a o console.log() sem nenhum método, já que ele
está dentro do construtor*/
const myclass = new MyClass("string")

class Product {
    constructor(name) {
        /* o this.name, serve pra referenciar o próprio 
        name de product, não o que está sendo passado no construtor*/
        this.name = name
    }
}

const product = new Product("Teclado")
console.log(product.name)

//adicionado métodos na classe 
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    sendEmail() {
        console.log("E-mail enviado para", this.name, "no endereço: ", this.email)
    }

}

const user = new User("paulo", "paulo@mail.com")
user.sendEmail()

// método estático
class User {
    static showMessage(message){
        console.log(message)
    }
}

// usando o static (método) faz com que podemos usar um método SEM instanciar a classe
User.showMessage("show message")


// aplicando herança com classes
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    makeNoise() {
        console.log("Algum som genérico do animal")
    }
}

class Dog extends Animal {
    makeNoise() {
        console.log("Au... Au... Au...")
    }
}

// Dog, herda as propriedades de Animal
const dog = new Dog("cachorro", 10)
dog.makeNoise()

class Cat extends Animal {
    makeNoise() {
        console.log("Miau... Miau... Miau...")
    }
}

const cat = new Cat("gato", 8)
cat.makeNoise()


// testes com prototypes

const address = {
    city: "Chapecó",
    country: "Brazil"
}

console.log(address)

const users = ["user1", "user2", "user3"]

const userName = "user"
console.log(userName.__proto__)

// usando classes para gerar exceções

let obj = [10]
let index = 300


try {
    // obj.execute()

    if (!obj.includes(10)) {
        throw new Error("10 não está disponível")
    }

    if (index > 99) {
        throw new RangeError("Número " + index + " fora do intervalo, escolha outro número");
    }

} catch (error) {
    //verifica se o erro é uma instancia de TypeError
    if (error instanceof TypeError) {
        console.log("Método indisponível")
    }

    // retorna a mensagem de erro se a instancia de RangeError existir
    else if (error instanceof RangeError) {
        console.log(error.message)
    }
    else {
        console.log(error)
    }
}

// usando classes para criar erros customizados

class MyCustomError {
    constructor(message) {
        this.message = "class of custom error" + message
    }
}

try {
    throw new MyCustomError("custom error thrown")
} catch (error) {
    //verificando se o erro é derivado da instancia do erro customizado
    if (error instanceof MyCustomError) {
        console.log(error.message)
    } else {
        console.log("Não foi possível executar!")
    }
}