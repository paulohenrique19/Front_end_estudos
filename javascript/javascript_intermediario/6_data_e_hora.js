// retorna dia da semana, dia, mes, ano, hora, minuto, segundo e fuso horário local
console.log(new Date())
// retorna a primeira data de referencia do JS: 31/12/69, 21:00:00, fuso horário local
console.log(new Date(0))
// retorna a quantidade milissegundos a partir da primeira data de referência
console.log(new Date().getTime())


// definindo uma data e hora específica

// definando com ano, mes (0-11), dia
// aqui no construtor, mes 1 (janeiro) equivale a 0, mes 2 - 1 e assim por diante...
console.log(new Date(2024, 11, 31)) // ano, mes (0-11), dia

// define data e hora. minuto e segundo
console.log(new Date(2024, 6, 3, 14, 30, 0)) // os ultimos 3 parametros são hora, minuto e segundo

// outra formatação
console.log(new Date("2024-07-03T14:30:00"))

// outra formatação
console.log(new Date("July, 3, 2024, 13:30:00"))


//metodos para manipular data e hora

let date = new Date("2024-07-11T14:30:10")
// pega o dia da semana de 0 a 6 (domingo é 6)
console.log(date.getDay()) 
// pega o dia do mes (0 a 30)
console.log(date.getDate())
// pega o mes (0 a 11)
console.log(date.getMonth())
// pega o ano
console.log(date.getFullYear())
// pega as horas
console.log(date.getHours())
// pega os minutos
console.log(date.getMinutes())


// modificando data e hora
date = new Date("July 3, 2024 14:30:00")

// modificando o ano.
date.setFullYear(2030)
// modificando o mes (começa com 0)
date.setMonth(1)
// modificando o dia
date.setDate(10)
// modificando a hora
date.setHours(18)
// modificando o minuto
date.setMinutes(15)
// modificando o segundo
date.setSeconds(30)

console.log(date)


// formatando data e hora
date = new Date("2024-07-02T14:30:10")

// formata para o dia sempre ter 2 digitos, e adiciona 0 no começo caso não tenha 2 digitos
console.log(date.getDate().toString().padStart(2, "0"))
// formata para o mes sempre ter 2 digitos, e adiciona 0 no começo caso não tenha 2 digitos
console.log((date.getMonth() + 1).toString().padStart(2, "0"))

let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()

// convertendo data para string

date = new Date("2024-07-02T14:30:10")

// converte para string
console.log(date.toString())

// retorna somente a data
console.log(date.toDateString())

// retorna somente a hora
console.log(date.toTimeString())

// exibindo data e hora formatadas de acordo com a localidade

date = new Date("2024-07-02T14:00:00")

// retorna no formato: 02/07/2024, que é o padrão da localidade atual (Horário de Brasília)
console.log(date.toLocaleDateString())
// retorna no formato HH:MM:SS
console.log(date.toLocaleTimeString())

// retorna a data e hora no formato escolhido.
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("en"))


// retornando data e hora em estilos diferentes de acordo com a formatação local
date = new Date("2024-07-02T14:00:00")

console.log(
    date.toLocaleString("pt-BR", {
        dateStyle: "short"
    })
)

console.log(
    date.toLocaleString("pt-BR", {
        dateStyle: "medium"
    })
)

console.log(
    date.toLocaleString("pt-BR", {
        dateStyle: "long"
    })
)

console.log(
    date.toLocaleString("pt-BR", {
        dateStyle: "full"
    })
)

console.log(
    date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    })
)

// usando a notação com outros tipos de strings

let amount = 12.5
console.log(
    amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
)

// Intl é a API de Internacionalização do ECMAScript

// obtem informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)

// retorna no formado DD/MM/AAAA (formato BR)
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))

date = new Date()

// obtem a diferença em minutos do timezone
console.log(date.getTimezoneOffset())

// obtem a diferença em horas od timezone
console.log(date.getTimezoneOffset() / 60)

// criando uma data e hora com fuso horário
const dateWithTimezone = new Date("2024-11-25T17:10:00.603+03:00")
//console.log(dateWithTimezone.toISOString())
console.log(dateWithTimezone.toLocaleString())