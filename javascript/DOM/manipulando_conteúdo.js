const guest = document.querySelector("#guest-1")

//Retorna o conteúdo como texto
//console.log(guest.textContent)

//Atribuí um novo conteúdo ao texto
//guest.textContent = "a"


/*Se adicionar document.querySelector("#guest-1 span"). ele não apaga a span ou qualquer outro
elemento adicionado na hora de atribuir um valor pelo textContent*/

/*Diferença entre os itens de acesso a texto */

console.log(guest.textContent) // Retorna o conteúdo visível e oculto
console.log(guest.innerText) // Retorna somente o conteúdo visíveld
console.log(guest.innerHTML) // Retorna o HTML como texto

