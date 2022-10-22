// IIFE -> Immediately invoked function expression 

(function() {
    const nome = 'Higor';
    console.log(nome);
})();

// Função que é imediantamente invocada. Ela proteje do escopo global

(function(nome) {
    let n = nome;
    console.log(n);
})('weslley');

console.log(nome); // Vai dar erro: nome is not defined
                   // Pois nome só existe nas funções