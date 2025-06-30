const input = document.querySelector("#name")

//Adiciona a classe no elemento
input.classList.add("input-error")

//Remove a classe do elemento
//input.classList.remove("input-error")


//Adiciona a classe se ela não existe e remove se ela existe
input.classList.toggle("input-error")


const button = document.querySelector("button")
// modifica as propriedades do css do elemento. var.style.("estilo") = valor do estilo
button.style.backgroundColor = "red"

