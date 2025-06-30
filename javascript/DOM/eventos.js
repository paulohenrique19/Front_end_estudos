//window = pagina html
//addEventListener("load"), adiciona um evento ao carregar a página

window.addEventListener("load", () => {
    console.log("pagina carregada")
})

addEventListener("click", (event) => {

    //evita o comportamento padrão, um exemplo e não recarregar a página
    event.preventDefault()


    // Retorna todas as informações do evento.
    //console.log(event)

    // c/ target, retorna o elemento que foi clicado
    console.log(event.target)

    // c/ target.textContent, retorna o textContent do elemento que foi clicado
    console.log(event.target.textContent)
})

