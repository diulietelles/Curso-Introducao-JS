
/**
 * 
 * Escreva as fun��es explicadas abaixo:
 * 
 * a) Escreva uma fun��o que receba 2 n�meros como par�metros, e, dentro da fun��o, fa�a a soma das duas entradas e retorne o resultado. Invoque a fun��o e imprima no console o resultado.
 * 
 * b) Fa�a uma fun��o que recebe 2 n�meros e retorne um booleano que informa se o primeiro n�mero � maior ou igual ao segundo.
 * 
 * c) Escreva uma fun��o que receba um n�mero e devolva um booleano indicando se ele � par ou n�o.
 * 
 * d) Fa�a uma fun��o que recebe uma mensagem (string) como par�metro e imprima o tamanho dessa mensagem, juntamente com uma vers�o dela em letras mai�sculas.
 * 
**/


// a
function somarNumeros(num1, num2) {
    const soma = num1 + num2
    return soma
}

let soma = somarNumeros(3, 4)

console.log(soma)

// b

function numeros(numero1, numero2){
    const resultado = numero1 >= numero2
    return resultado

}
let resultado = numeros(5,2)
console.log(resultado)

// c

function numeroPar(numero){
    const numeroBoo = numero % 2 === 0
    return numeroBoo
}
let numeroBoo = numeroPar(10)
console.log(numeroBoo)

// d 

function versaoMaiuscula(texto){
    console.log(texto.lenght)
    console.log(texto.toUpperCase())
}
 
versaoMaiuscula("Essa é uma mensagem generica")
