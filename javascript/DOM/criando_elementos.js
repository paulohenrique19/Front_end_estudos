const guests = document.querySelector("ul")


const newGuest = document.createElement("li")
const guestName = document.createElement("span")

guestName.textContent = "Name"


//const newName = document.createElement("span")
//newName.textContent = "outro nome"



//Adiciona após o último filho (append)
newGuest.append(guestName)
//Adiciona antes do primeiro filho (prepend)
//newGuest.prepend(newName)

//Podemos adicionar mais de um elemento ao mesmo tempo
//newGuest.append(guestName, newGuest)

// Outro método mais simples que append e aceita apenas um argumento

//const newName2 = document.createElement("span")
//newName2.textContent = "mais um"
//newGuest.appendChild(newName2)

//Exibindo na lista todos os elementos de newGuest

guests.append(newGuest)

//aplicando estilização no novo elemento adicionado

newGuest.classList.add("guest")