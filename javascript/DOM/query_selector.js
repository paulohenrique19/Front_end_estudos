/* Query Selector acessamos o elemento pelo ID ou class, a diferença aqui 
é que ele perceber se é ID ou class se tivermos # ou . antes do elemento
*/

//Acessando o elemento pelo selector ID
const guest1 = document.querySelector("#guest-1")
console.log(guest1)

//Acessando o elemento pelo selector class
const guests = document.querySelector(".guest")
console.log(guests)

//Acessando todos os elementos encontrados pelo query
const guests_list = document.querySelectorAll(".guest")
console.log(guests_list)