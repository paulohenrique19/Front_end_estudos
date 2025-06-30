//No DOM, o objeto "document" corresponde a todo o HTML da página

console.log(document)

//Pegando o título da página

console.log(document.title)

//Acessa o elemento pelo ID dele (SELETOR ID)
const guest = document.getElementById("guest-2")
console.log(guest)

//Mostra as propriedades do objeto
console.dir(guest)

//Acessa o elemento pela classe dele (SELETOR class)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

//Exibe o primeiro elemento da lista
console.log(guestsByClass.item(0))

//Exibindo todos
for (let i = 0; i <= 1; i++)
{
    console.log(guestsByClass.item(i))
}

//Seleciona lista de elementos pela tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)
