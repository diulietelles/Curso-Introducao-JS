//exercicio 1 
const nome = prompt("Digite seu nome:")
const cor =prompt("Sua cor favorita:")
const fraseTemplate=`A cor favorita de ${nome} é ${cor}`
console.log(fraseTemplate)

// exercicio 2
const frase = prompt("escreva uma frase")

const fraseMaiuscula = frase.toUpperCase()
const fraseLinguaI = fraseMaiuscula.replaceAll("O","I")
const fraseTamanho=fraseMaiuscula.length

console.log("frase original:", frase)
console.log("Fraseem letras maiusculas", fraseMaiuscula)
console.log("Frase em lingua do I:", fraseLinguaI)
console.log("Tamanho da frase", fraseTamanho)

//Exercicio 3
const nomeRacas =["FoxRound", "Pinscher", "Caramelo","Beagle", "Dalmata"]
const numerodaRaca = prompt("Digite um numero de 0 a 4")
numeroRacas = Number(numerodaRaca)
console.log(nomeRacas[numerodaRaca])

//exercicio 4
let numeros =[1, 2, 3,4, 5,6]
console.log(numeros)
numeros.push(7)
console.log(numeros)

numeros.splice(3,2)
console.log(numeros)




