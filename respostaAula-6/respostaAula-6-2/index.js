//Exercicio 2- fazendo as perguntas
let pergunta1 = "Você está usando uma roupa azul hoje?"
let pergunta2 = "Você gosta de sushi?"
let pergunta3 = "Você já visitou outro país?"

// armazenando as respostas
let resposta1 = "SIM"
let resposta2 = "NÃO"
let resposta3 = "SIM"

// Imprimindo as perguntas e respostas
console.log(typeof pergunta1, typeof resposta1)
console.log(typeof pergunta2, typeof resposta2)
console.log(typeof pergunta3, typeof resposta3)


pergunta1 = prompt( "Você está usando uma roupa azul hoje?")
console.log("SIM")
pergunta2 = prompt( "Você gosta de sushi?")
console.log("NÃO")
pergunta1 = prompt( "Você já visitou outro país?")
console.log("SIM")

//Exercicio 3
let a = 10
let b = 25

let temp = a
a = b
b = temp

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
