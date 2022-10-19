// return = retorna um valor e termina a função 
// Nem toda função retorna um valor


function falaFrase(comeco){
    function falaresto(resto){
        return comeco + ' ' + resto;
    }
    return falaresto;
}

const fala = falaFrase('Olá');
const resto = fala('Higor');

console.log(resto);

// -------------------------------------------

function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));
