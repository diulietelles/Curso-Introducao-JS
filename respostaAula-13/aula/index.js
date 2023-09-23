// exercicio 1

const filme = {
    dadosDirecao: "Greta Gerwig",  
    nomeFilme: "Barbie",
    anoLancamento: 2023,
    elenco:["Margot", "Ryan", "David"], 
    visto: true
    
  }
  
  console.log(filme.dadosDirecao)
  console.log(filme.nomeFilme)
  console.log(filme["anoLancamento"])
  console.log(filme["visto"])
  console.log(filme["elenco"])
  
  
  filme.personagens = ["Rick Dalton", "Cliff Booth", "Sharon Tate"]
  console.log(` o ator ${filme.elenco[0]}, interpreta o personagem ${filme.personagens[0]}`)
  console.log(filme.elenco[1], filme.personagens[1])
  console.log(filme.elenco[2], filme.personagens[2])
  
  filme.elenco[0] = "Xuxa Menegel"
  console.log(filme.elenco)
  console.log(filme.personagens)
  
  
  //exercicio 2
  
  const pessoa = {
      nome: "Tamires",
      idade: 33,
      generoMusical:"Jazz",

  }
  console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.`)
  
   
    // exercicio 4
function imprimirPessoa(pessoa) {
    const novaPessoa = {
        ...pessoa,
        comidasPreferidas: [ "Arroz", "Feijão", "Pizza" ],
        melhorAmigo: {
            nome: "Maria",
            idade: 30
        }
    }

    console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasPreferidas[0]}, ${novaPessoa.comidasPreferidas[1]} e ${novaPessoa.comidasPreferidas[2]}. Sua melhor amiga se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`)
}

const pessoaAmigo = {
    nome: "José",
    idade: 33,
    generoMusicalFavorito: "MPB",
}

imprimirPessoa(pessoaAmigo)