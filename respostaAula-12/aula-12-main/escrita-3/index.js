
/**
 * 
 * Crie uma fun��o para cada uma das opera��es b�sicas (soma, subtra��o, multiplica��o e divis�o).
 * 
 * Pe�a para o usu�rio inserir dois n�meros e chame essas 4 fun��es com esses valores inseridos pelo usu�rio sendo o argumento. Por fim, mostre no console o resultado das opera��es:
 * 
 * Exemplo:
 * 
 * N�meros inseridos: 30 e 3
 * Soma: 33
 * Diferen�a: 27
 * Multiplica��o: 90
 * Divis�o: 10
 * 
 * Dica: lembre-se de converter a entrada do usu�rio para n�mero antes de fazer os c�lculos.
 * 
**/

function soma(numero1, numero2){
    return numero1 + numero2
}

function subtracao(numero1, numero2){
    return numero1 - numero2
}
function multiplicacao(a, b){
    return numero1 * numero2
}

function divisao(a, b){
    return numero1 / numero2
}

let numero1 = prompt("Insira o primeiro numero:")
let numero2 = prompt("Insira o segundo numero:")

console.log("numeros inseridos:", numero1, "e", numero2)
console.log("Soma:",  soma(numero1, numero2))
console.log("Subt:", subtracao(numero1, numero2))
console.log("Multi:", multiplicacao(numero1, numero2))
console.log("Div:", divisao(numero1, numero2))



















