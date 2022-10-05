//Escreva uma função que recebe 2 números e retorne o maior deles

function recebeNumeros(n1, n2){
   let compara = n1 > n2 ? `O Número ${n1} é o maior número!` : `O Número ${n2} é o maior número!`;
   console.log(compara);
}

const recebeNumeros2  = (n1, n2) => n1 > n2 ? `O Número ${n1} é o maior número!` : `O Número ${n2} é o maior número!`;

recebeNumeros(25, 50);
console.log(recebeNumeros2(25,50));