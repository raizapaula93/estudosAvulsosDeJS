
//*1)* Implemente um método que crie um novo array baseado nos valores passados.<br>
//Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

// //Questao 1 solução do cara
// const setNewArr = (count,el) =>  {//constrói uma função qeu exigem passagem de dois parÂmetros
//     let newArr = [];//aqui ele tá criando um array vazio
//     while(count>0 && count--)//aqui é um laço da variável contadora -enquanto o 1º param for maior que 0, e 2º --
//         newArr.push(el);//o new array receberá o 2º parâmetro
//     return newArr//é necessário retornar a função para iterar novamente até o fim do 1º param
// }
// console.log(setNewArr(2,'c'));// ['a', 'a', 'a'](chamada e impressão da função aqui embaixo)




//próxima meta - entender função, passagem por parâmetro, encapsular uma função




function geraArray(number, letter) {
    let newArr = []
    for (i = 1; i <= number; i++) {
        newArr.push(letter);
    }
  
    
    return newArr;
  }

  console.log(geraArray(5,'a'))

