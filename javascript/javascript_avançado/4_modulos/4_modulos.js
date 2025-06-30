import { multiply, sum } from "./calc.js"
import print from "./print.js"
import { class_methods } from "./classe.js"

console.log("10 + 10 =", sum(4, 6))
console.log("10 * 10 =", multiply(4, 6))
console.log(print)

console.log("1 + 1 =", class_methods.sum(1, 1))






// Importando tudo

/* 
    import * as calc  from "./calc.js" 

    console.log("10 + 10 =", calc.sum(4, 6))
    console.log("10 * 10 =", calc.multiply(4, 6))




*/

/*
    default export - é a função padrão fornecida pelo módulo

    named export - cada método é importado pelo seu próprio
    nome de exportação

*/

/*
    exportando os itens com nomes diferentes:

    ex: export { func as func_nome }

    Na hora de importar, importamos como func_nome

    importando os items com nomes diferentes:

    ex: import { sum as soma }

    Usaremos soma ao invés de sum


*/