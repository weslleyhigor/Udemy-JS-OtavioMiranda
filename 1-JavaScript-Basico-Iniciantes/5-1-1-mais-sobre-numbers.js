let num1 = 10.5789551255547; // number
let num2 = 2.5;              // number


console.log(num1.toString() + num2); // imprime o num1 como string e concatena com o num2.
console.log(num1.toFixed(2));        // o valor atribuido dentro de toFixed determina a quantidade de casas decimais a serem mostradas.
console.log(num1.toString(2));       // imprime o num1 em formato binário por conta do numeral 2 dentro de toString.
num1 = num1.toString();              // num1 recebe o proprio valor agora convertido em string.
console.log(typeof(num1));

console.log(Number.isInteger(num1)); // retorna um valor boolean se a variavel é inteira ou nao 


// IEEE 754-2008

let num11 = 0.7;
let num22 = 0.1;

num1 = ((num1 * 100) + (num2 * 100))/100; //0.8
num1 += num2; //0.9
num1 += num2; //1.0

console.log(num1);
console.log(Number.isInteger(num1));