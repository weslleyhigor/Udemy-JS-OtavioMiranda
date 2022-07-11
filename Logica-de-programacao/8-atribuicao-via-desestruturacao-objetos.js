// Atribuição via desestruturação - objetos

const pessoa = {
    nome: 'Higor',
    sobrenome: 'Campos',
    idade: 24,
    endereco: {
        rua: 'Amoty pascoal',
        numero: 118,
        bairro: 'Rui lino'
    }
};

//const nome = pessoa.nome; // atribuição comum


// atribuição via desestruturação
//const { nome, sobrenome, idade } = pessoa;

// Podemos alterar o nome da chave que consta em pessoa. Ex:
const { nome: firstName = '', sobrenome, endereco } = pessoa;

console.log( firstName, sobrenome, endereco);