// Declarações e variaveis
// var let const

var nome="fiap";
console.log(nome);

var nome="Teste"
console.log(nome);

if(true){
    let apelido="Fiapinho";
    console.log(apelido);
}

const taxaJuros=0.05;
console.log(taxaJuros);
// taxaJuros=1.5;

var exemplo="ola-dev-var";
console.log(typeof exemplo);


let exemplo1="ola-dev-let";
console.log(exemplo1);

const exemplo2="ola-dev-const";
console.log(exemplo2);

let exemplo3= 10 + 1
console.log(exemplo3);

let exemplo4=true;
console.log(exemplo4);

let exemplo5={nome1:"teste"};
console.log(exemplo5);

let exemplo6=["Java","C#","PHP"];
console.log(exemplo6);

// type of dentro do console.log mostra qual o tipo de variavel

let exemplo7;
console.log(exemplo7);

// valor vazio

let exemplo8=null;
console.log(exemplo8);

// OPERAÇÕES ARITIMETICOS

const valor1=10;
const valor2=20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

// OPERAÇÕES LOGICOS
// = atribuição
// == comparação 
// === valor e tipo (estritamente igual)
// && = E (todas condições tem que ser verdadeira)
// 

console.log(valor1 > 10 && valor2 < 10)
console.log(valor1 + valor2);
console.log(valor1 == valor2);
console.log(valor1 === valor2);


//////////////////////////////////////////////////////////////////////////////

const p=300;
const v=20;

const preçoFinal= p-v;
console.log("O preço final com desconto é",preçoFinal)

let a=20;
let b=10;

let comparar= (a ==20 && b >= 10)
console.log("O resultado é",comparar)

user_login = true;
user_password = true;

if (user_login == true);{
    console.log("Transação Realizada")
}
