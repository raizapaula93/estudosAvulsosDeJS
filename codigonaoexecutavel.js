///CÓDIGO N EXECUTAVEL

//Procedural
processamento(valor1,valor2,valor3)
//vários ponteiros apontando pro memso lugar da memória(se o método acessar, dava bug em outro lugar)

//OO
//TEM DADOS, e dentro desses dados tem funções

objeto = {
    valor1,//atributos
    valor2,//atributos
    valor3,//atributos
    processamento() {//funções/comportamentos

    }
}

objeto.processamento()//passa invocar comportamentos a partir do dado FOCO EM OBJETOS
//a função pertence ao objeto
//e dentro do objeto eu tenho os valores que são usados dentro do processamento
//funciona como uma cápsula
//um objeto interage com outro, podem ter objetos dentro de objetos
//objeto é um dado que tem função

//1.ABSTRAÇÃO
//TRADUZIR ALGO DO MUNDO REAL EM ATRIUTOS E MÉTODOS
//A ABSTRAÇÃO É CONTEXTUAL(DEPENDE DO Q VC PRECISA NO SISTEMA)
//2.ENCAPSULAMENTO
//MANTER OS DETALHES DE IMPLEMENTAÇÃO ESCONDIDOS, MOSTRAR SÓ UMA INTERFACE FRIENDLY
//QUANDO VOCÊ MUDA INTERNAMENTE A IMPLEMENTENÇÃO DO OBJETO, NÃO NECESSARIAMENTE O OBJETO PRECISA SE ADAPTAR
//QUANDO VC TEM MTOS OBJETOS EXPOSTOS, BAIXO NÍVEL DE ENCAPSULAMENTO E MUITO ACOPLAMENTO (DEPENDÊNCIA ENTRE ELES TORNA A EVOLUÇÃO COMPLICADA)
//3.HERANÇA(PROTOTYPE) RELAÇÃO É 1
//NÃO PRECISO COLOCAR TODA A COMPLEXIDADE DENTRO DO MOTOR DENTRO DO CARRO, SÓ AS FUNCIONALIDADES QUE ME INTERESSAM
//GERAR OBJETOS MAIS COMPLEXOS A PARTIR DA COMPOSIÇÃO DE OBJETOS MAIS SIMPLES
//PRIORIZE A COMPOSIÇÃO AO INVÉS DA HERANÇA(TEM 1 AOS INVÉS DE É 1)
//4. POLIMORFISMO
//NO POLIMORFISMO VC TEM UMA VARIÁVEL MAIS GENÉRICA, DO TIPO PAI, E PODE POR HERANÇA, ATRIBUIR TIPOS DIFERENTES VIA FILHOS
//ATRIBUI UNO À CARRO, ATRIBUIR FERRARI À CARRO