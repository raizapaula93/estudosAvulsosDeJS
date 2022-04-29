//exemplo função par ou ímpar

// function parimp(n){
//     if(n%2===0){
//         return 'par'
//     }else{
//         return 'ímpar'
//     }
// }



// console.log(parimp(6))//console.log -> chamada; 6 o parâmetro

//outro exemplo
// function soma(n1,n2){//parâmetros opcionais
//     return n1 +n2
// }

// console.log(soma(3));//dá undefined







// function soma(n1=0,n2=0){//parâmetros opcionais
//      return n1 +n2
//  }

//  console.log(soma(2,3));

// //
//  let v = function(x) {//pesquisar arrow function =>
//      return x*2
//  }

//  console.log(v(5));


 ///
 function fatorial(n){
     let fat = 1
     for(let c = n; c>1; c--){
         fat *=c
     }
     return fat
 }
 console.log(fatorial(5))

//RECURSIVIDADE
function fatorial (n){//parâmetro dentro da chamada da função
    if (n == 1){//condição de parada
        return 1//só da 1 return por vez
    } else {    // só dá 1 return por vez
        return n * fatorial(n-1)//o parâmetro da fnção passado chama ele msm
    }    
    
} console.log(fatorial(5));//chamada e parâmetro