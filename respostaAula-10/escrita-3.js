//escrita 3

// Passo 1: Criar um array vazio
const listaDeTarefas = []
// Passo 2: Perguntar ao usuário as tarefas
const tarefa1 = prompt("Digite a primeira tarefa do dia:")
const tarefa2 = prompt("Digite a segunda tarefa do dia:")
const tarefa3 = prompt("Digite a terceira tarefa do dia:")
// Passo 3: Armazenar as tarefas no array
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
// Passo 4: Solicitar ao usuário que escolha uma tarefa realizada
const tarefaRealizada = prompt("Digite o numero da tarefa que você já realizou:")
// Passo 5: Remover a tarefa realizada da lista
listaDeTarefas.splice(tarefaRealizada, 1)
// Passo 6: Imprimir o array atualizado
console.log("Tarefas restantes:")
console.log(listaDeTarefas)