
class Atleta {
    constructor (nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

/*
A linha `this.nome = nome` está dizendo que a propriedade `nome` do objeto `Atleta` 
(representado por `this`) deve ter o mesmo valor que o parâmetro `nome` fornecido 
durante a criação da instância (`"Cesar Abascal"` no exemplo).
*/
    
    calculaCategoria(){
        if (this.idade < 9 || this.idade > 30){
            return 'Sem categoria'
        } else if (this.idade <= 11){
            return 'Infantil'
        } else if (this.idade <= 13){
            return 'Juvenil'
        } else if (this.idade <= 15){
            return 'Intermediário'
        } else {
            return 'Adulto'
        }
    }

    calculaIMC(){
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida(){
        let mediaValida = []
        let lista = this.notas.sort((a, b) => a - b).slice(1,4)
        mediaValida = lista.reduce((total, atual) => {
            return total + atual
        },0)
        return mediaValida / lista.length
    }

/*Vamos analisar o processo que o conjunto de notas do atletaExemplo passa na função 
calculaMediaValida:

Obtenção das Notas Originais:

O objeto atletaExemplo é criado com notas fictícias: [8, 7, 9, 6, 10].
A função obtemNotasAtleta exibe as notas originais no console.
Ordenação das Notas em Ordem Crescente:

this.notas.sort((a, b) => a - b) é usado para ordenar as notas em ordem crescente.
Após a ordenação, as notas se tornam: [6, 7, 8, 9, 10].
Seleção das Três Maiores Notas:

slice(1, 4) é usado para criar uma subarray contendo as notas das posições 1, 2 e 3.
A subarray resultante é [7, 8, 9], que são as três maiores notas.
Cálculo da Média das Três Maiores Notas:

reduce((total, atual) => total + atual, 0) é usado para somar as três maiores notas.
A soma das notas é 7 + 8 + 9 = 24.
A média é então calculada como 24 / 3 = 8.
Retorno do Resultado:

A função calculaMediaValida retorna a média calculada, que neste exemplo é 8.
Então, o conjunto de notas [8, 7, 9, 6, 10] passa por uma ordenação, a remoção da menor nota (6), 
e o cálculo da média das três maiores notas (7, 8, 9) na função calculaMediaValida. 
O resultado final seria a média válida 8.*/

    obtemNomeAtleta(){
        console.log(`Nome: ${this.nome}`)
    }

    obtemIdadeAtleta(){
        console.log(`Idade: ${this.idade}`)
    }

    obtemPesoAtleta(){
        console.log(`Peso: ${this.peso}`)
    }

    obtemAlturaAtleta(){
        console.log(`Altura: ${this.altura}`)
    }

    obtemNotasAtleta(){
        console.log(`Notas: ${this.notas}`)
    }

    obtemCategoria(){
        console.log(`Categoria: ${this.calculaCategoria()}`)
    }

    obtemIMC(){
        console.log(`IMC: ${this.calculaIMC()}`)
    }

    obtemMediaValida(){
        console.log(`Média Válida: ${this.calculaMediaValida()}`)
    }

}

function boletim(atleta){
    atleta.obtemNomeAtleta()
    atleta.obtemIdadeAtleta()
    atleta.obtemPesoAtleta()
    atleta.obtemAlturaAtleta()
    atleta.obtemNotasAtleta()
    atleta.obtemCategoria()
    atleta.obtemIMC()
    atleta.obtemMediaValida()
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88])
boletim(atleta)

/*
calculaCategoria(), para calcular a categoria do atleta;
calculaIMC(), para calcular o IMC do atleta;
calculaMediaValida(), para calcular a média válida do atleta.
obtemNomeAtleta(), que retorna o nome do atleta
obtemIdadeAtleta(), que retorna a idade do atleta
obtemPesoAtleta(), que retorna o peso do atleta
obtemNotasAtleta(), que retorna as notas do atleta
obtemCategoria(), que retorna a categoria do atleta
obtemIMC(), que retorna o IMC do atleta
obtemMediaValida(), que retorna a média válida do atleta
*/

/* 
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 8.766666666666666
*/