/* setTimout() executa uma função após um 
intervalo de tempo especificado, porém executa uma vez


*/
setTimeout(() => {
    console.log("Teste")
}, 3000)

/* setInterval() executa uma função após um intervalo
de tempo específicado, porém executa infinitamente nesse
intervalo
*/

let value = 10

const interval = setInterval(() => {
    console.log(value)
    value--

    if (value === 0) {
        console.log("End")
        clearInterval(interval)
    }

}, 1000)

// Função que retorna uma promisse

function asyncFunction() {
    return new Promise( (resolve, reject) => {
        // Simula uma operação assincrona
        setTimeout(() => {
            const isSuccess = true

            if (isSuccess)
            {
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Algo deu errado!")
            }
        }, 3000) // <-- Simula uma operação assincrona de 3 seg
    })   
}

/*Executando a função com os tratamentos devidos para
a Promise em caso de sucesso ou fracasso */


asyncFunction()
    .then((response) => {
        console.log("Sucesso:", response)
    })
    .catch((error) => {
        console.log("Erro:", error)
    })
    .finally(() => {
        console.log("Fim da execução")
    })

// async e await

function async_And_Await_Function() {
    return new Promise( (resolve, reject) => {
        // Simula uma operação assincrona
        setTimeout(() => {
            const isSuccess = true

            if (isSuccess)
            {
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Algo deu errado!")
            }
        }, 3000) // <-- Simula uma operação assincrona de 3 seg
    })   
}

async function fetch() {
    const response = await async_And_Await_Function()
    console.log(response)
}

fetch()

// caso o async for uma arrow function, notação:

const fetch_arrow = async () => {
    const response = await async_And_Await_Function()
    console.log(response)
}

fetch_arrow()

// com try/catch

async function fetch_try_catch() {
    try {
        const response = await async_And_Await_Function()
        console.log("Sucesso", response)
    } catch(error){
        console.log("Erro:", error)
    } finally {
        console.log("Fim da execução")
    }
}

fetch_try_catch()

/* Prioridade e ordem de execução */

// (1st) executa de forma síncrona e o valor 1 é impresso imediatamente
console.log(1)

// (3rd) Microtask são executadas antes de temporizadores e promises
queueMicrotask(() => {
    console.log(2)
})

// (5th) macrotask que aguarda o evento de temporizador ser acionado
setTimeout(() => {console.log(3)}, 1000)

// (2nd) execução sincrona
console.log(4)

// (4th) adiciona uma microtask
Promise.resolve(true).then(() => {
    console.log(5)
})

// Ordem correta: 1 4 2 5 3