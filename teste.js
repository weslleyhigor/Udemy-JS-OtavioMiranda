// Função para randomizar array
function baguncaArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 2; i > 0; i--) {
            // Escolhendo elemento aleatório
        const sorteiaNumero = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[sorteiaNumero]] = [arr[sorteiaNumero], arr[i]];
    }
    
    // Retornando array com aleatoriedade
    return arr;
};

const numeros = [1, 2, 3, 4];

console.log(baguncaArray(numeros)); 
console.log(baguncaArray(numeros)); 
console.log(baguncaArray(numeros)); 