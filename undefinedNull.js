//não inicializada - dá undefined
let valor 
console.log(valor)

//ausência de valor
valor = null
console.log(valor)
//console.log(valor.toString())//Erro! tenha valores padrão para associar às variáveis

const produto = {}
console.log(produto.preco)//indefinido -> pq o objeto já está setado
console.log(produto.preco.a)//dá erro pq não dá pra acessar atributo do que está indefinido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined//evite atrivuir undefined
console.log(!!produto.preco)//falso
console.log(produto)//o produto ta undefined, mas não tá vazio
//delete produto.preco -> limpa o valor do objeto, mas as chaves continuam lá, vazias
produto.preco = null//sem preço, não definido
//Quando a função está nula vc não pode acessr nenhum atributo daquela variável