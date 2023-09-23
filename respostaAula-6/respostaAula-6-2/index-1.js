let nome 
let idade 

console.log(typeof nome, typeof idade)
//o console imprimiu underf, porque asvariaveis aindanao possuem valor

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome, typeof idade)
//agora são string, porque o prompt sempre retorna o tipo string.

console.log("Olá", nome, "Voce tem", idade, "anos")


