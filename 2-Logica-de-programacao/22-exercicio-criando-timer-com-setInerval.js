const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let hora = 0;
let minuto = 0;
let segundo = 0;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function codTimer (){
    segundo++;
    if (segundo > 59) {
        minuto++;
        segundo = 0
    };

    if(minuto > 59){
        hora++;
        minuto = 0;
    }

    if(hora > 23){
        hora = 0;
        minuto = 0;
        segundo = 0;
    }

    timer.innerHTML = `${hora}:${minuto}:${segundo}`;
};

const runCode;

iniciar.addEventListener('click', function(event){
    runCode = setInterval(codTimer, 1000); 
    return runCode;
});

pausar.addEventListener('click', function(event){
    clearInterval(startTimer);
});


zerar.addEventListener('click', function(event){
    clearInterval(startTimer);
    hora = 0;
    minuto = 0;
    segundo = 0;
    timer.innerHTML = `${hora}:${minuto}:${segundo}`;
});