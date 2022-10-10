const frutas = ['Pera', 'Maçã','Uva'];

// ESTE FOR LER OS VALORES
// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// };


// ESTE FOR IN LER OS INDICES
// for ( let i in frutas) {
//     console.log(frutas[i])
// };

const pessoa = [
    {
        nome: "Luiz",
        sobrenome: "Otávio",
        idade: 30
    }, 
    {
        nome: "Higor",
        sobrenome: "Campos",
        idade: 25
    }
];


for ( let i in pessoa ) {
    console.log(i, pessoa[i].nome);
};

pessoa.forEach(function(valor, indice){
    console.log(indice, valor.nome);
});