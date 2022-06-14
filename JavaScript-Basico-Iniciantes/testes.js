let nome = ["weslley", "higor", "campos", "ferreira"];
let contaLetra = 0;

console.log(nome.length);

i = 0;
for (let indice in nome[i]){
    contaLetra += nome[indice].length;
    i += 1
}

console.log(contaLetra);