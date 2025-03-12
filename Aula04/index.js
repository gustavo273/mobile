import {calcularIMC, tabelaIMC} from "./calculadora"

console.log("tabela de IMC")

console.table(tabelaIMC)

const peso = 80
const altura = 1.70

const resultado = calcularIMC(peso , altura)

console.log("resultado do IMC")
console.log(`IMC: ${resultado.toFixed(2)} `)

// importando biblioteca moment

import {  } from "moment";

const hoje = moment()