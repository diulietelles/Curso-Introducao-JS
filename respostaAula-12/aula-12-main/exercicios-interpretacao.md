
# Interpretação de código

Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.

---

#### 1. Leia o código.

```
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
```

a) O que vai ser impresso no console?

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

---

#### 2. Leia o código.

```
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
```

a. Explique o que essa função faz e qual é sua utilidade.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
- Eu gosto de cenoura.
- CENOURA é bom pra vista.
- Cenouras crescem na terra.
