const guardaNumero = [];

for (i=1; i <= 6; i++) {

    let numeroGerado = Math.floor(Math.random() * (10 - 1 + 1 )) + 1;

    while (guardaNumero.includes(numeroGerado)) {
        numeroGerado = Math.floor(Math.random() * (10 - 1 + 1 )) + 1;
    }

    guardaNumero.push(numeroGerado);
    
};

console.log(guardaNumero);