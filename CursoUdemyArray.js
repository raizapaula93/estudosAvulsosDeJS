//Curso Udemy - Array
const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
valores[10] = 10//coloca o item passada na posição . Se o item não existe
console.log(valores)
console.log(valores.length) // -> tamanho do array

valores.push({id: 3}, false, null, 'teste')//input no fim
console.log(valores)

console.log(valores.pop())//adiciona no final
delete valores [0]
console.log(valores)

console.log(typeof valores)//tipo objeto