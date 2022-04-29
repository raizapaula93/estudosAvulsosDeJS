//objeto em js é uma coleção de chaves e  valores
// const prod1 ={}
// //aqui estamos dizendo que dentro do objeto vazio produto, dentro tem um identificador(chave) chamado nome, e um valor chamado 'Celular Ultra Mega'
// prod1.nome = 'Celular Ultra Mega'
// //dentro do objeto produto - nome do identificador úncio
// prod1.preco=4998.90
// //evitar atributos com espaço
// //prod1.{'Desconto Legal'} = 0.4

// console.log(prod1)

//Pode ter elementos aninhadps
//as chaves devem ser únicas dentro do escopo, mas podem repetir os nomes via aninhamento
//Objeto != Json -> Objeto é vairável, comportamentos, e atributos; e JSOn é texto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        blabla: 1,
        obj:{
            blabla:2
        }
    }
}

console.log(prod2)