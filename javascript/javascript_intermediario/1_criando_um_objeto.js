// cria um objeto vazio.

const obj = {}
console.log(obj)
console.log(typeof obj)

// cria um objeto com propriedades e métodos

const user = {
    email: "rodrigo@email.com",
    age: 18,
    name: {
        firstName: "Rodrigo",
        surname: "Gonçalves",
    },
    address: {
        street: "Rua X",
        number: 23,
        city: "São Paulo",
        postal_code: "12345-123"
    },
    message: () => {
        console.log("Endereço")
    }
}

// acessando as propriedades e métodos usando a notação de ponto.

console.log(user.address.street)

// executando o método dos objetos
user.message()

// notação de colchetes (outra maneira de acessar os objetos)

console.log(user["email"])
console.log(user["name"]["firstName"])

user["message"]()

// acessando propriedades no contexto do objeto

const user1 = {
    name: "name",
    message: function () {
        const name = "a"
        // console.log(`teste ${user1.name}`)
        // this.name estamos acessando a variável do objeto fora do escopo
        // enquanto name, acessamos a de dentro do escopo
        console.log(`teste ${this.name} ${name}`)
    },
}

user1.message()

const product = {
    name: "Teclado",
    quantity: 100,

    /*message: function() {
        console.log("Teste")
    }
    */
}

// acessando a propriedade do objeto
console.log(product.name)

// atualiza o valor de uma propriedade
console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)

product.name = "Mouse"

console.log(product.name)

// Notação de colchetes
product["quantity"] = 50
console.log(product)


/*
    OPTIONAL CHAINING (?.) - encadeamento opicional
    Se a propriedade ou função chamada é nullish 
    (null or undefined), a expressão retorna 
    undefined em vez de gerar um erro

    Útil ao explorar o conteúdo de um objeto
    quando não existe garantia da existência de 
    determinadas propriedades obrigatórias
*/

// Usando o objeto product para testar o optional chaining

//essas duas propriedades existem
console.log(product?.name)
console.log(product?.quantity)

//essas duas não existem, mas como tem o (?.) elas não vão gerar erro
console.log(product?.value)
console.log(product?.address?.street)

product.message?.()


/*
    OPERADOR DE COALESCÊNCIA NULA (??)
    Operador lógico que retorna o seu operando do
    lado direito quando o seu operador do lado
    esquerdo é null ou undefined. Caso contrário,
    ele retorna o seu operando do lado esquerdo.
*/

let content = null 
console.log(content ?? "Conteúdo padrão")

const null_coalescencia = {
    name: "Teste",
    description: undefined,
}

console.log(null_coalescencia.description ?? "default")