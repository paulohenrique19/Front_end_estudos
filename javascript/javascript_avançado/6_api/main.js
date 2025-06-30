//utilizando o fetch com then para retornar os valores do objeto
fetch("http://localhost:3000/products")
.then((response) => response.json())
.then((data) => console.log(data))


// utilizando o fetch com async/await

async function fetchProducts() {
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()
    console.log(data)
}

fetchProducts()

// retornando item pelo id
async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`)
    const data = await response.json()
    console.log(data)
}

fetchProductById(2)

const productName = document.getElementById("name")
const productPrice = document.getElementById("price")

const form = document.getElementsByTagName("form")

addEventListener("submit", async (event) => {
    event.preventDefault()

    //aplicando o método post
    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value,
        }) //serializando o objeto JSON para texto
    })
    
    await fetchProducts()

})