// A desestruturação consiste basicamente em pegar armazenar indices de uma array em variáveis sem declará-las diretamante

// Ex:

// indices            0     1     2     3      4    5     6
const listNumbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000];

//[indZero, indUm, indDois] = listNumbers;
//console.log(indZero, indUm, indDois) // Vao receber os indices 0, 1 e 2 respectivamente

// podemos fazer uma variavel receber o restante do valor da array da seguinte forma

[indZero, indUm, indDois, ... restoArray] = listNumbers; // restoArray recebeu todos os valores do indice 3 até o final em formato de array.
console.log(indZero, indUm, indDois, restoArray)

