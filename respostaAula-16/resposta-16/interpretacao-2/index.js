
// Leia o c�digo abaixo, que foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado


let fruta = prompt("Escolha uma fruta")
let preco

switch (fruta) {
	case "Laranja":
		preco = 3.5
		break;
	case "Ma��":
		preco = 2.25
		break;
	case "Uva":
		preco = 0.30
		break;
	case "P�ra":
		preco = 5.5
		break; // BREAK PARA O ITEM D
	default:
		preco = 5
		break;
}

console.log("O pre�o da fruta ", fruta, " � ", "R$ ", preco)


// a) Para que serve o c�digo acima?
/* o codigo serve para calcular o preço de uma fruta escolhida pelo usuario impresso no console 

// b) Qual ser� a mensagem impressa no console, se o valor de fruta for "Ma��"?
se o valor de "fruta" for MAÇA, a mensagem será "o preco da fruta MAÇA é R$2,25 "

// c) Considere que um usu�rio queira comprar uma "P�ra", qual seria a mensagem impressa no console se retir�ssemos o "break" que est� logo acima do "default" (o "break" indicado pelo coment�rio "BREAK PARA O ITEM D")?
o programa para após o default e continuaria a a executar o codigo, , se alguem pedir para comprar um PERA,
 vai ser impresso "o preço da fruta Pera é R$5,5 e R$5", mesmo depois do default, independente da falta do break*/