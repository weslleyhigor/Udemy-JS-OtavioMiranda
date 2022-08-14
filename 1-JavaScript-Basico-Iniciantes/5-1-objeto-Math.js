let num1 = 9.546565;

let num2 = Math.floor(num1); // Arrendonda o valor para baixo
console.log(num2); // 9
let num3 = Math.ceil(num1); // Arredonda o valor para cima
console.log(num3); // 10
let num4 = Math.round(num1); // Arrendonda para o valor mais proximo. Se o valor da casa decimal for menor que 50, o valor da 9. Caso seja igual ou maior que 50, o valor da 10.
console.log(num4) // 10

// Encontrar o MAIOR numero de uma sequencia de numeros
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// Encontrar o MENOR numero de uma sequencia de numeros
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));

// Gerar numeros aleatórios;
console.log(Math.random()); // Gera uma sequencia de numeros aleatórios com varias casas decimais.

// Podemos pegar um numero aleatorio entre 5 e 10 por exemplo.
let aleatorio =  Math.random() * (10 - 5) + 5;
console.log(aleatorio);

//Podemos ainda arredondar um valor aleatório
aleatorio = Math.round(Math.random()* (10-5) + 5);
console.log(aleatorio);
