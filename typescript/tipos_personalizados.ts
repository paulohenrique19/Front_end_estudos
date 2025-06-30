// interfaces
/*Servem pra estabelecer um "contrato" entre a interface e o
objeto/método/etc, forçando-os a implementar os itens da
interface, útil para organização de dados nos objetos*/

interface Product {
    id: number
    name: string
}

function newProduct(product: Product){
    console.log(product.id + " " + product.name)
}

newProduct({ id: 1, name: "paulo"})

/* Estendendo interfaces */

interface Person {
    id: number,
    name: string
}

interface Teacher extends Person {
    // id: number,
    // name: string,
    subjects: string[]
}

interface Student extends Person{
    // id: number,
    // name: string,
    age: number
}


let teacher: Teacher = { id: 1, name: "Paulo", subjects: ["JavaScript", "Typescript"]}

let student: Student = { id: 2, name: "João", age: 23}

// Usando Type para criar tipos personalizados em TypeScript
type Produto = {
    id: number,
    name: string
}

function novoProduto(produto: Produto)
{

}

novoProduto({ id: 1, name: "Produto A"})

// ou ele pode ser um array de produto, ou retorna null
type SelectResponse = Produto[] | null

// ele vai retornar os tipos em SelectResponse que são Produto ou null
function selectProdutos(): SelectResponse {
    return null
}

// Intersecção de tipos

type Estado = {
    UF: string,
    population: number
}

// Aderindo ao tipo "Cidade" os atributos do tipo "Estado"
type Cidade = Estado & {
    cityName: string,
    neighborhoods: string[]
}

let estado: Estado
let cidado: Cidade

// Interface x Type

interface IBaseProduct {
    price: number
}

interface IProduct extends IBaseProduct {
    id: number,
    name: string
}

type TBaseProduct = {
    price: number
}

type TProduct = TBaseProduct & {
    id: number,
    name: string
}

let iproduct: IProduct = { id: 1, name: "Produto 1", price: 100}
let tproduct: TProduct = { id: 2, name: "Produto 2", price: 100}


// Os tipos customizados podem ser criados a partir de um tipo primitivo
// mas interfaces não podem fazer isso
type TypeString = string
type TypeNumber = number
// Podemos sobrescrever interfaces, mas não types

// Asserção de tipos

/* asserção de tipo (ou type assertion) é um mecanismo que permite ao programador informar ao compilador que uma variável tem um tipo específico, 
mesmo que o TypeScript não seja capaz de inferir automaticamente esse tipo. 
A asserção de tipo não realiza nenhuma verificação ou conversão de tipo em tempo de execução, 
ela apenas indica ao compilador que você tem certeza do tipo que está atribuindo. */


type UserResponse = {

    id: number;
    name: string;
    avatar: string;
};

// "objeto/var" as "tipo específico", o "as", irá fazer a asserção de tipo
let userResponse = {} as UserResponse;

// restringindo valores
// usaremos type para restringir os valores possíveis que alguma variável pode ter 

type Size = "small" | "medium" | "large"
let size: Size
size = "small"
size = "medium"
size = "large"
size = "extra large" // size reclama aqui porque estamos botando um valor não permitido

// enum, valores fixos que atribuem valores a variáveis
enum Profile {
    Admin = 1,
    Client = 2,
    Seller = "Goiaba"
}

let profile: number | string = Profile.Admin
console.log(Profile.Seller)
console.log(profile)

// Tipos genéricos

/*

 Algumas convenções do TS para representar genéricos

 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */


// ou também restringir os tipos em: function useState<T extends number | string>()
function useState<T>()  {
    let state: T;

    function get(){
       return state; 
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set };
}
// declarando uma variável que obriga o useState a usar somente números
//let newState = useState<number>()

let newState = useState()
newState.get()
newState.set(10)
newState.set("a")

newState.set(true)

// a vantagem dos generics é usar os tipos na hora em que for necessário usando a mesma função

/* nesse caso: function useState<T extends number | string = string>()
 estamos dizendo que caso nenhum tipo seja escolhido, o tipo padrão será string
*/

/*

function useState<T extends number | string = string>() {
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return {get, set};
}

let newState = useState<string>();
newState.get();
newState.set("Rodrigo");
newState.set(123);
newState.set("Amanda");




*/