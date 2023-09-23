
/**
 * 
 * Repita o exerc�cio anterior, mas utilizando a estrutura de "switch/case".
 * 
 * Dica: Lembre-se que "switch/case" � como se fosse um "if", 
 * mas verifica somente igualdades estritas (===).
 */



const generoDoFilme = prompt("Qual é o gênero do filme que vocês vão assistir?")
const precoDoIngresso = parseFloat(prompt("Qual é o preço do ingresso?"))

switch (generoDoFilme) {

    case generoDoFilme === "fantasia" && precoDoIngresso < 15:
        console.log("Bom filme!")
        break;
    default:
        console.log("Escolha outro filme :(")
        break;
}
