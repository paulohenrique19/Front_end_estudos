// aqui é auto explicativo

let i = 10
while (i >= 0) {
    console.log(i)
    i--;
}

/* do while:
    repete até que a condição especificada seja
    verdadeira, no entando, a instrução será executada pelo
    menos uma vez antes da condição ser verdadeira
*/

let value = 0

do {
    value++
    console.log(value)
} while (value < 10)


// também auto explicativo

for (let step = 0; step <= 10; step++)
{
    console.log(step)
}

/* for in: executa iterações a partir de um objeto 
e percorre suas propriedades*/

let person = {
    name: "Teste",
    surname: "Da Silva",
    email: "testedasilva@gmail.com"
}

for (let property in person) {
    //exibe o nome da propriedade
    console.log(property)
    //exibe o conteúdo da propriedade
    console.log(person[property])
}

let letters = ["a", "b", "c", "d", "e"]

for (let indexLetters in letters)
{
    console.log(letters[indexLetters])
}

// for of: itera sobre valores de um objeto iterável
letters = ["a", "b", "c", "d", "e"]
for (let letter of letters) {
    console.log(letter)
}

person = [{
    name: "Teste",
    surname: "Da Silva",
    email: "testedasilva@gmail.com"
}]

for (let value of person)
{   
    /* só conseguimos usar o for of para acessar
    as propriedades dos objetos se tivermos colchetes entre as chaves [{}] */
    console.log(value)
    /*para acessar o valor das propriedades*/
    console.log(value.name)
    console.log(value.surname)
    console.log(value.email)
}