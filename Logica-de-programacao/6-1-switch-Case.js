// const data = new Date();
// const diaSemana = data.getDay();

/* SERIA ASSIM SEM USAR SWITCH

//let diaSemanaTexto;
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-Feira';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-Feira';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-Feira';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-Feira';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-Feira';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = '';
};
*/

//console.log(diaSemana, diaSemanaTexto);

// USANDO SWITCH
// O switch é responsavel por checar a variavel de forma parecida com o if. Jamais esquecer do break. Caso esqueça, a checagem nao vai parar onde deveria e só vai parar no proximo break encontrado.
const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
             //break;
             return diaSemanaTexto;
        
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            //break;
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            //break;
            return diaSemanaTexto;
        
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            //break;
            return diaSemanaTexto;
        
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            //break;
            return diaSemanaTexto;
        
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            //break;
            return diaSemanaTexto;
        
        case 6:
            diaSemanaTexto = 'Sábado';
            //break; 
            return diaSemanaTexto;  
        default:
            diaSemanaTexto = '';
            //break;
            return diaSemanaTexto;
        }
}

console.log(diaSemana, diaSemanaTexto)