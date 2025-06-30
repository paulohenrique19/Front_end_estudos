const form = document.querySelector("form")
const footer = document.querySelector("footer")
const input = document.querySelector("input")
const select = document.getElementById("currency")

const description = document.getElementById("description")
const result_convert = document.getElementById("result")

let value = ""
let select_op = ""
let result = 0

input.addEventListener("keypress", (event) => {
    console.log(event.key)
    value += event.key
})

select.addEventListener("change", (event) => {
    event.preventDefault()
    select_op = select.value
})


form.addEventListener("submit", (event) => {
    event.preventDefault()
    result = convert(value, select_op)


    if (select_op == "USD") {
        description.textContent = "US$ 1 = R$ 5,82"
        result_convert.textContent = `R$ ${result}`
    }
    if (select_op == "EUR") {
        description.textContent = "€EUR 1 = R$ 6,89"    
        result_convert.textContent = `R$ ${result}`
    }
    if (select_op == "GBP") {
        description.textContent = "£GBP 1 = R$ 7,32" 
        result_convert.textContent = `$R$ ${result}`
    }
    if (select_op == "CNY") {
        description.textContent = "CN¥ 1 = R$ 0,80" 
        result_convert.textContent = `$R$ ${result} `
    }
    if (select_op == "JPY") {
        description.textContent = "JP¥ 1 = R$ 0,038" 
        result_convert.textContent = `R$ ${result} `
    }

    footer.style.display = "block"
    result = null
    value = ""
    input.value = null

    
})



const convert = (value , coin) => {
    if (coin == "USD") {
        return Number(value) * (5.82)
    }
    if (coin == "EUR") {
        return Number(value) * (6.89)
    }
    if (coin == "GBP") {
        return Number(value) * (7.32)
    }
    if (coin == "CNY") {
        return Number(value) * (0.80)
    }
    if (coin == "JPY") {
        return Number(value) * (0.038)
    }
}