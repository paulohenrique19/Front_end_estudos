const form = document.querySelector("form")

//Evento na hora de submeter o formulário, se declarado novamente, executa apenas o último evento declarado do mesmo tipo
form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Formulário submetido")


}

//Forma padrão do de cima, porém executa todas as declarações
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Formulário submetido")
})