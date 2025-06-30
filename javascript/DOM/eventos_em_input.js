const input = document.querySelector("input")
const form = document.querySelector("form")


let value = ""

// keydown - efeito quando uma tecla é pressionada (captura tudo, até CTRL, SHIFT, etc)

/*
input.addEventListener("keydown", (event) => {
    console.log(event.key)
    value += event.key
})*/

// keypress - quando uma tecla do tipo caractere é pressionada (letras, números, pontos, etc)

input.addEventListener("keypress", (event) => {
    console.log(event.key)
    value += event.key
})

// change - evento ativa quando ocorre uma mudança no elemento, aqui é quando o input muda
// nessa caso o evento só vai ativar quando eu sair do input
input.onchange = () => inputChange()
function inputChange() {
    console.log("O INPUT MUDOU!")
}



form.onsubmit = (event) => {
    event.preventDefault()
    
    const guests = document.querySelector("ul")


    const newGuest = document.createElement("li")
    const guestName = document.createElement("span")

    guestName.textContent = value

    newGuest.append(guestName)
    guests.append(newGuest)
    newGuest.classList.add("guest")

    value = ""
}

new Element("aaaa")