//função principal -> onclick no button adicionar

function verificaNumeros('x parametros'){//function que faz o array com números cadastrados e printa
    let armazena=[];//array vazio pra armazenar os dados digitados
    if('x parametros'<1 && >100){//validação dos números digitados
        alert("número inválido! digite um número válido!")//alert
        return ('x parametros')//força a volta pra digitação
    }else{
      for(i=0;i<armazena.length;i++)//contador e número de vezes de iteração
      armazena.push('x parametros')//coloca o parâmetro digitado dentro do array
      console.log(`O valor digitado é ${armazena[i]}`) //imprime ali na caixinha
    }
    return armazena
}

//
function finalizar(){

}
//arrow functions
//callbacks
//funções anônimas
//iteração sobre arrays
//objetos
//modularização
//RegEx
//JSON
//AJAX
//NodeJs