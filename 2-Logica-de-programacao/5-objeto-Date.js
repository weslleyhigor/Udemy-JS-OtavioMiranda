//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date


// const data = new Date();

// console.log(data.toString());
// console.log( 'Dia: ', data.getDate());
// console.log( 'Mês: ', data.getMonth()); // Mês começa do zero. Pra ficar no conhecido, pode ser feito data.getMonth() + 1;
// console.log( 'Ano: ', data.getFullYear());
// console.log( 'Hora: ', data.getHours());
// console.log( 'Min: ', data.getMinutes());
// console.log( 'Seg: ', data.getSeconds());
// console.log( 'Mil: ', data.getMilliseconds());
// console.log( 'Dia da Semana: ', data.getDay()); // 0 = Domingo até Sábado = 6


//  Função que formata data

function zeroAEsquerda (num) {
    return num >= 10? num: `0${num}`; // por nao ter zero á esquerda em numeros menores que 10, criamos essa função.
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

const data = new Date();

const dataBrasil = formataData(data);
console.log(dataBrasil);