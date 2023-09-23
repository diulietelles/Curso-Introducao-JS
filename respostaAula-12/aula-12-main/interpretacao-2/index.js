
// Leia o c�digo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/**
 * 
 * a) Explique o que essa fun��o faz e qual � sua utilidade.
 * 
 * b) Determine qual ser� a sa�da no console para cada uma das 3 entradas do usu�rio:
 * - Eu gosto de cenoura.
 * - CENOURA � bom pra vista.
 * - Cenouras crescem na terra.
 * 
 * 
 * 
**/

// a
/* O código solicita ao usuário que insira um texto. Em seguida, ele verifica se a palavra "cenoura" está presente no texto,
 independentemente das letras minúsculas. A saída exibida no console será 
 "true" se "cenoura" estiver presente e "false" se não estiver. 
 Isso é repetido para três entradas diferentes do usuário, 
todas resultando em "true" devido à verificação da palavra "cenoura".

// b
"Eu gosto de cenoura." Saída:true

"CENOURA é bom pra vista." Saída:true

"Cenouras crescendo na terra." Saída:true

*/