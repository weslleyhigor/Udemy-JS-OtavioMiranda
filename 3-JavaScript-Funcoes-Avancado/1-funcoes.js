// Formas de declarar funçoes em JavaScript
// Declaração de função (Function hoisting)
function falaOi(){
    console.log('Oi');
}
falaOi();

// As funções são First-class objects(Objetos de primeira classe)
// As funções podem ser tratadas como dados/Expressões.
// Function expression

const souUmDado = function(){
    console.log('Sou um dado');
};
souUmDado();

// Arrow function
const funcaoArrou = () => {
    console.log('Sou uma arrow function')
};
funcaoArrou();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();