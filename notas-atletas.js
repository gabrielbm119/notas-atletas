function boletimAtleta(objAtletas){

  let lista = []
  let lista2 = []
  let mediaFinal = []
  for (let i = 0; i < objAtletas.length; i++){
      lista.push(objAtletas[i].notas)
      lista[i].sort((a, b) => a - b)
    }      
  
  for (let i = 0; i < objAtletas.length; i++){
    lista2 = lista.map((notaAtleta) => {
      return notaAtleta.slice(1,4)
    })
  }
  lista2.forEach((notasAtleta) => {
    mediaFinal.push(notasAtleta.reduce((total,atual) => {
      return total+atual
    }) / notasAtleta.length )
  })

  for (let i = 0; i < objAtletas.length; i++){
    console.log(
      `
Atleta: ${objAtletas[i].nome}
Notas Obtidas: ${objAtletas[i].notas}
Média Válida: ${mediaFinal[i]}
`) 
  }

}





let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];


   boletimAtleta(atletas)


/*
A saída deve ser:

Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 8.766666666666666

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 8.333333333333334

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 8.166666666666666

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.666666666666666
*/