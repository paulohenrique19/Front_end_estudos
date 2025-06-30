const ul = document.querySelector("ul")


//Aqui ele vai monitorar um elemento específico de acordo com o evento
ul.addEventListener("scroll", (event) => {

    //toda vez que o scroll acontece, uma borda vermelha no input é inserida
    const input = document.querySelector("#name")
    input.classList.add("input-error")

    //Distancia do scroll para o topo (se a barra de scroll tiver no topo, é zero)
    //console.log(ul.scrollTop)

    //console.log(event)



    /* 
    const guests = document.querySelector("ul")
    const newGuest = document.createElement("li")
    const guestName = document.createElement("span")

    guestName.textContent = "Name"
    newGuest.append(guestName)
    guests.append(newGuest)
    newGuest.classList.add("guest")
    */

})


const button = document.querySelector("button")
button.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("click")  
})
