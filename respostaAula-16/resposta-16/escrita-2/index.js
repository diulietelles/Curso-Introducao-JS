
/**
 * 
 * Fa�a um programa que verifica que turno do dia um aluno estuda.
 * 
 * Pe�a para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize os blocos "if/else if/else".
 * 
**/



const perguntarAluno = prompt("Digite o turno que você estuda (M para Matutino, V para Vespertino, N para Noturno):")
const turno = (perguntarAluno)

if (turno === "m") { 
    console.log("Bom Dia!")

} else if (turno === "v") {
    console.log("Boa Tarde!")

} else  (turno === "n") {
    console.log("Boa Noite!")
} 
