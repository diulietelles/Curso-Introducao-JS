/* resposta 1 
a = false
b = false
c = true
d = booleano */

/* resposta 2 
o prompt está lendo como string e não como números, quando somar primeiroNumero e segundoNumero 
estão sendo somadas como strings ao inves de numeros, precisa converter de string para numero antes da soma.*/


// resposta 3
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

// Converter as strings em números do tipo number
const numero1 = Number(primeiroNumero)
const numero2 = Number(segundoNumero)

// somar os números
const soma = numero1 + numero2

console.log(soma)