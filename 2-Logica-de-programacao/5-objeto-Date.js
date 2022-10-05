//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date


// const data = new Date();

// console.log(data.toString());
// console.log( 'Dia: ', data.getDate());
// console.log( 'Mês: ', data.getMonth()); // O Primeiro mês começa do zero. Pra iniciar do 1, pode ser feito data.getMonth() + 1;
// console.log( 'Ano: ', data.getFullYear());
// console.log( 'Hora: ', data.getHours());
// console.log( 'Min: ', data.getMinutes());
// console.log( 'Seg: ', data.getSeconds());
// console.log( 'Mil: ', data.getMilliseconds());
// console.log( 'Dia da Semana: ', data.getDay()); // 0 = Domingo e vai até Sábado = 6



const data = new Date();

//  Função que formata data
function zeroAEsquerda (num) {
    return num >= 10? num: `0${num}`; // por nao ter zero à esquerda em números menores que 10, criamos essa função.
    // Pois os horários e datas menores que 10 ficariam assim: 1:00. A função zeroAEsquerda torna 01:00
}

function formataData (data) {
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() + 1);
   const ano =  zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours()); 
   const min = zeroAEsquerda(data.getMinutes());
   const seg = zeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}

const dataAgora = formataData(data);
console.log(dataAgora);