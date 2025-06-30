/*

Variáveis, declaração.

Diferenças entre var, let e const:

var permite que a variável seja declarada e tenha seu valor modificado várias vezes, com escopo de função ou global.
let permite que a variável seja declarada uma vez e tenha seu valor modificado várias vezes, com escopo de bloco.
const permite que a variável seja declarada uma vez, com escopo de bloco, e não permite reatribuição do valor da variável (mas permite modificar objetos e arrays).



*/

/*Usar `` permite escrever multiplas linhas */

let a = "TESTE"

console.log(`
    
    TESTE
    TESTE
    TESTE
    ${a}

    `)

/* Realizar operações entre números e não números pode retornar um valor como "NaN": not a number */


/*Conversão de tipos */

console.log(true)
console.log(false)
console.log(False)
console.log(typeof Number("9"))
console.log(typeof String(9))

/*.toString() e String() converte para texto 
  Number() converte para numero
  Boolean() converte para booleano
    */


/*Operador ternário */

let b = 10

console.log(b >= 10 ? "maior/igual a 10" : "menor que 10")

/*Falsy e Truthy 

Falsy é quando um valor é considerado false e truthy quando é considerado
verdadeiro em contextos onde um boolean é obrigatório (condicionais e loops)

Exemplos de falsy

*/

console.log(false ? "true" : "false")
console.log(0 ? "true" : "false")
console.log(-0 ? "true" : "false")
console.log("" ? "true" : "false")
console.log(null ? "true" : "false")
console.log(undefined ? "true" : "false")
console.log(NaN ? "true" : "false")

/*Exemplos de truthy */

console.log(true ? "true" : "false")
console.log([] ? "true" : "false")
console.log({} ? "true" : "false")
console.log(1 ? "true" : "false")
console.log(3.23 ? "true" : "false")
console.log("0" ? "true" : "false")
console.log(" " ? "true" : "false")
console.log("Teste" ? "true" : "false")
console.log("false" ? "true" : "false")
console.log(-1 ? "true" : "false")
console.log(Infinity ? "true" : "false")
console.log(-Infinity ? "true" : "false")


/*Switch recapitulação */

let option = 2

switch (option) {
  case 1:
    console.log(1)
    break;
  case 2:
    console.log(2)
  case 3:
    console.log(3)
  default:
    console.log(4)
}

/*Switch executará o primeiro valor que atenderá a condição, mas caso não tiver uma
condição de parada "break", executará os valores seguintes na ordem de declaração,
caso nenhuma condição seja atendida, o item em "default" será executado */



/*Try/catch/finally*/
let n = 0
try {
  if (n === 0)
    throw new Error("n = 0")
} catch (error) {
  console.log(error)
} finally {
  /*Executa independente se deu certo ou errado */
  console.log("End")
}

/*Funções: lembrar de colocar "function" antes da declaração */




/**
 *
 * Inserindo comentário de documentação
 *  
 * @param {String} email user email.
 * @param {String} password more than 6 characters.
 * @returns {Number} user id.
 * 
 */

function signIn(email, password) {
  return 1;
}

signIn()

/*Função anônima (função sem nome) */

const message = function() {
  return "teste"
}

console.log(message())

/*Arrow function */

const arrow_f1 = () => {
  console.log(1)
}

arrow_f1()

const arrow_f2 = (a, b) => {
  return a + b;
}

console.log(arrow_f2(1, 2))

/*Callback function, é uma função passada para outra função como argumento */

function execute(taskName, callback) {
  console.log("Executando a tarefa: ", taskName)

  callback ()
}

function callback() {
  console.log("Tarefa finalizada")
}

// Passando para a função
execute("Download do arquivo...", callback)

// Criando a função no próprio parâmetro
execute("Upload do arquivo", function(){
  console.log("Função de callback com uma função anônima")
})

// Utilizando arrow functions

execute("Excluindo arquivo...", () => {
  console.log(first)
})