// arguments sustenta todos os argumentos enviados como parametros da função

/*function funcao(){
   let total = 0;
   for (let argumento of arguments){
      total += argumento;
   }

   console.log(total)
};

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
*/

// ------------------------------------------------------------------

/*function soma (a, b = 0, c = 0) {
   console.log(a + b + c);
};

soma(2, undefined, 5)
*/

// ------------------------------------------------------------------

/*
function mostraValores( nome, sobrenome, idade) {
   console.log(nome, sobrenome, idade);
}

mostraValores('Weslley', undefined,  25);
*/

// -------------REST OPERATOR--Atribuição via desestruturação------------------------------------

function conta(operador, acumulador, ...args){
   for (let numero of args){
      if (operador === '+') acumulador += numero;
      if (operador === '-') acumulador -= numero;
      if (operador === '/') acumulador /= numero;
      if (operador === '*') acumulador *= numero;
      

   }
   console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);