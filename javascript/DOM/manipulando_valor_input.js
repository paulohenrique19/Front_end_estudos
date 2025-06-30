const input = document.querySelector("input")
const form = document.querySelector("form")


// Evento é disparado quando um input é acionado
/*
input.addEventListener("input", () => {
    const value = input.value

    // define a regra do regex
    const regex = /\D+/g

    // retorna o padrão encontrado na string
    // console.log(value.match(regex))

    // valida o regex, retorna true se a string estiver dentro do padrão e false caso oposto
    const isValid = regex.test(value)
    console.log(isValid)
})
*/

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const regex = /\D+/g
    const value = input.value
    

    if (regex.test(value)) {
        alert("Padrão ok")
    } else {
        alert("Padrão inválido")
    }

    // const regex = /[0-9]/g
    // substitui os números encontrados na string por nada
    //const value = input.value.replace(regex, ""); 

    //console.log(value)
})