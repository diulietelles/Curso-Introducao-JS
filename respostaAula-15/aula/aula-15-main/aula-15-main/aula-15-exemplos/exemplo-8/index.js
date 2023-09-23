
// exercicio 9
let pokemon = prompt("Escolha um elemento: 1) agua 2) fogo 3) terra") 
let mensagem

switch (pokemon) {
    case 'agua':
        mensagem = "Pokémon tipo Água"

        break;

    case 'fogo':
        mensagem = "Pokémon tipo Fogoso"
        break

    case 'terra':
        mensagem = "Pokémon tipo Terroso"
        break
    default:
        mensagem = "Pokémon não encontrado"
      
}
console.log(mensagem)