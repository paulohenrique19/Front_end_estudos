// partial, serve para atualizar um ou mais atributos de um item já existente
// o Partial<Tipo> torna todas as propriedades do objeto opcionais

interface User {
    id: number,
    name: string,
    email: string 
}

const newUser: User = { id: 1, name: "Paulo", email: "paulo@email.com"}


const updatedUser: Partial<User> = {email: "no mail"} 

/* Pick, escolhemos qual propriedade queremos reaproveitar e de um tipo
específico, é util para não precisarmos criar outro objeto só para pegar uma ou mais
propriedades
*/
interface Book {
    title: string
    pages: number
    author: string
    description: string
}

interface BookPreview {
    title: string
}

// exemplo com outra interface
const book1: BookPreview = { title: "TypeScript"}
// exemplo com Pick
const book2: Pick<Book, "title" | "pages"> = { title: "TypeScript", pages: 150}

/* O omit é útil para reaproveitar uma tipagem e deixar campos específicos de fora. 
   Além disso, é possível omitir mais de uma propriedade usando o operador de pipe
*/
interface Book {
    title: string
    pages: number
    author: string
    description: string
}
// removendo as propriedades "description" e "pages"
const book: Omit<Book, "description" | "pages"> = { title: "TypeScript", author: "Rodrigo"}

// Record, serve pra fazer o mapeamento de um tipo de objeto para outro
// Aqui por exemplo, a chave é uma string, e o valor pode ser um number ou uma string
const scores: Record<string, number | string> = {
    "user1": 10,
    "user2": 5,
    "user3": 8,
    "user4": "no-data"
}

// Limitando valores com o Record

type Perfil = "adm" | "user" | "guest";

/* Usando Record<Perfil, number>, as chaves serão limitadas a somente 
o que está em "Perfil" */
const usuario: Record<Perfil, number> = {
    "adm": 1,
    "user": 2,
    "guest": 3
}

/* Usando Record com objetos personalizados */
// Objetos personalizados
interface UsuarioInt {
    name: string
    email: string
}

const usuarioInt: Record<number, UsuarioInt> = {
    1: { name: "Rodrigo", email: "rodrigo@email.com" },
    2: { name: "Rodrigo", email: "rodrigo@email.com" },
}

// typeof

/*
typeof para definir tipagens a partir de outras. O typeof permite extrair a tipagem de um objeto já definido 
e aplicá-la em outro, facilitando a reutilização de tipagens, especialmente ao lidar com bibliotecas externas ou APIs. 
Essa técnica é útil para definir tipagens a partir de conteúdos já existentes.

*/

interface Product {
    id: number
    name: string
    quantity: number
}


const product1: Product = { id: 1, name: "Produto 1", quantity: 3}

// product2 extraí a tipagem de product1 e aplica em si próprio
const product2: typeof product1 = { id: 2, name: "Produto 2", quantity: 5}


// keyof: serve para extrair chaves de uma tipagem

const icons = {
    "home": "./path/home.svg",
    "add": "./path/add.svg",
    "remove": "./path/remove.svg",
}

type Icon = typeof icons

const icon: keyof Icon = "add"