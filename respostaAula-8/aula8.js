// exercicio 2
let idadeUsuario = prompt("Digite a sua idade:")
let idadeAmigo = prompt("Digite a idade do seu melhor amigo/amiga:")
let idadeMaior = (idadeUsuario > idadeAmigo)
let diferencaIdade = (idadeUsuario - idadeAmigo)
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)
console.log("Diferença de idade:", diferencaIdade)


let numeroPar = (prompt"Digite um número par:")
let restoDivisao = numeroPar % 2
console.log("O resto da divisão de", numeroPar, "por 2 é:", restoDivisao)

//Padrão para numeros pares: Quando um número par é dividido por 2, o resto da divisão é sempre 0. Isso ocorre porque os números pares são exatamente divisíveis por 2, não deixando "sobra".

// Padrão para numeros impares: Quando um número ímpar é dividido por 2

//exercicio 3

let idadeAnos = prompt("Digite sua idade em anos:")
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeDias * 24
console.log("Sua idade em meses é:", idadeMeses)
console.log("Sua idade em dias é:", idadeDias)
console.log("Sua idade em horas é:", idadeHoras)


// exercicio 4

let numero1 = (prompt"Digite o primeiro número:")
let numero2 = prompt ("Digite o segundo número:")

let primeiraMaior = numero1 > numero2
let igual = numero1 === numero2

let divisivel1 = numero1 % numero2 === 0
let divisivel2 = numero2 % numero1 === 0

console.log("O primeiro número é maior que o segundo?", primeiraMaior)
console.log("O primeiro número é igual ao segundo?", igual)
console.log("O primeiro número é divisível pelo segundo?", divisivel1)
console.log("O segundo número é divisível pelo primeiro?", divisivel2)
