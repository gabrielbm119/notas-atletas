
class Atleta {
    constructor (nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    calculaCategoria(){
        if (this.idade < 9 && this.idade > 30){
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
        return "oi"
    }

    calculaMediaValida(){
        return "ui"
    }

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