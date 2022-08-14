// Formas de declarar uma função

/*function soma(x, y) {
    const resultado = x + y;
    return resultado;
}*/

/*
const soma = function (x, y) {
    const resultado = x + y;
    return resultado;
};*/

const soma = (num1, num2) => num1 + num2; 
console.log(soma(5, 7));

//const raiz = n => n ** 0.5;
//console.log(raiz(49));