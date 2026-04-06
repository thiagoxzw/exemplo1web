// // Declarações e variaveis
// // var let const

// var nome="fiap";
// console.log(nome);

// var nome="Teste"
// console.log(nome);

// if(true){
//     let apelido="Fiapinho";
//     console.log(apelido);
// }

// const taxaJuros=0.05;
// console.log(taxaJuros);
// // taxaJuros=1.5;

// var exemplo="ola-dev-var";
// console.log(typeof exemplo);


// let exemplo1="ola-dev-let";
// console.log(exemplo1);

// const exemplo2="ola-dev-const";
// console.log(exemplo2);

// let exemplo3= 10 + 1
// console.log(exemplo3);

// let exemplo4=true;
// console.log(exemplo4);

// let exemplo5={nome1:"teste"};
// console.log(exemplo5);

// let exemplo6=["Java","C#","PHP"];
// console.log(exemplo6);

// // type of dentro do console.log mostra qual o tipo de variavel

// let exemplo7;
// console.log(exemplo7);

// // valor vazio

// let exemplo8=null;
// console.log(exemplo8);

// // OPERAÇÕES ARITIMETICOS

// const valor1=10;
// const valor2=20;

// console.log(valor1 + valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);
// console.log(valor1 / valor2);

// // OPERAÇÕES LOGICOS
// // = atribuição
// // == comparação 
// // === valor e tipo (estritamente igual)
// // && = E (todas condições tem que ser verdadeira)
// // 

// console.log(valor1 > 10 && valor2 < 10)
// console.log(valor1 + valor2);
// console.log(valor1 == valor2);
// console.log(valor1 === valor2);


// //////////////////////////////////////////////////////////////////////////////

// const p=300;
// const v=20;

// const preçoFinal= p-v;
// console.log("O preço final com desconto é",preçoFinal)

// let a=20;
// let b=10;

// let comparar= (a ==20 && b >= 10)
// console.log("O resultado é",comparar)

// user_login = true;
// user_password = true;

// if (user_login == true);{
//     console.log("Transação Realizada")
// }

// // Estrutura condicional

if(true){
    console.log("verdadeiro")
}

let nome = "fiap";

if(nome == "fiap"){
    console.log("Nome Correto")
}

// if else

if(nome == "fiap"){
    console.log("Usuario Correto")

}else{
    console.log("Usuario Incorreto")
}

// if encadeado / aninhado 

let idade = 61;

if(idade <= 17){
    console.log("É uma criança")
} else if(idade >13 && idade < 18){
    console.log("é um adolescente")

} else if (idade >18 && idade <= 60){
    console.log("é um adulto")
} else{
    console.log("É um idoso")
}

// switch case

let pratos="salada";

switch(pratos){
    case "macarrão":
        console.log("a melhor massa")
        break;
    case "salada":
        console.log("salada saudavel");
        break;
  case "lasanha":
        console.log("melhor prato")
        break;
   default:
    console.log("Nenhuma das opções")

}

// ternario
let valor =100;
let resultado = valor ==100 ? "Valor Certo": "Valor Errado"
console.log(resultado)

let usuario="dev";
let logado= usuario =="fiap"? "Usuario Logado": "Usuario Invalido"
console.log(logado)
// ? = if

// ! = else

// estrutura de repetição

// e laço de repetição é utilizado quando
// sabemos quantas vezes o codigo vai ser executado

for ( let i=1; i<=5;i++){
    console.log("valor",i);
}

const linguagens= ["Java", "Python", "C#", "php"]

for(let i=0; i < linguagens.length; i++){
    console.log("Linguagens", i, ":",linguagens[1])
}

const tecnologia = ["JS", "HTML", "CSS"];

for (let tec of tecnologia){
    console.log("Estudando:", tec)
}

//for com objeto
const carros= {marca:"Volks",modelo:"Fusca", ano:1980};

for (let dados in carros){
    console.log(dados,":", carros[dados])
}

//while < usamos quando não sabemos a quantidade de vezes

let numero = 1;

while (numero <=10){

console.log("Contagem", numero)
numero++;
}

//declarando uma variavel indefinida

let num;
while (num !== "0"){
    num = prompt("Digite um numero ou 0 para sair")
    console.log("você digitou", num)
}