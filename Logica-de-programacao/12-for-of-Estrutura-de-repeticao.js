// Comparativo de cada for usando realizando a mesma tarefa

// Indices    0123456789...
const nomes = ['Weslley Higor', 'Vitoria Albuquerque', 'Joao Dorilito'];
 
// for classico
for ( let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
};
console.log('-----------------------------------')

// for usando in
for ( let i in nomes) {
    console.log(nomes[i]);
}
console.log('-----------------------------------')

// for usando of
for (let valor of nomes) {
    console.log(valor);
}

