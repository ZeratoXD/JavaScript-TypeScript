let mensagem: string = "Hello World";

console.log(`Mesagem: ${mensagem}`);

function multiplicar(valor: number):number {
    return valor *5;
}




interface Pessoa{
    nome: string;
    sobrenome:string;
    idade: number;
}

let pessoa: Pessoa = {
nome:"Maria",
sobrenome:"Simões",
idade: 19
}

let pessoa2: Pessoa = {
    nome:"Juliana",
    sobrenome:"Paes",
    idade:25

}

console.log(`${pessoa.nome} tem a idade de ${pessoa.idade}`)
console.log(`${pessoa2.nome} tem a idade de ${pessoa2.idade}`)

// SPREAD OPERATOR
/* Permite que os elementos de um objeto iterável, como um array ou uma string, sejam expandidos em elementos individuais. 
Ele é representado pelo símbolo de reticências (…), e é usado para espalhar os elementos de um objeto em um novo objeto 
ou em uma lista.*/

let valores: number[] = [1,2,3,4]   // Criamos um Array chamado valores, e definimos a sua tipagem como array de numeros (number[])

console.log(valores);       // Sem o Spread Operator mostramos os valores e o Array
console.log(...valores);    // Com o Spread Operator mostramos APENAS os valores do Array 

valores.forEach(valor => console.log(valor));   // Se quisermos exibir os dados sem Spread Op. e o Array