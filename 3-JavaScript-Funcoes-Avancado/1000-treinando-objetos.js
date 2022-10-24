// Criando objetos 

const pessoa1 = new Object();
pessoa1.nome = 'Higor';
pessoa1.idade = 25;
pessoa1.fala = function(){return `Meu nome é ${this.nome} e minha idade é ${this.idade} anos`;}

console.log(pessoa1.fala());

// =================================================================
const pessoa2 = {
    nome: '', 
    idade: '',
    fala2(){
        return `Meu nome é ${this.nome} e minha idade é ${this.idade} anos`;
    }
};

pessoa2.nome = 'Andre';
pessoa2.idade = 12;
console.log(pessoa2.fala2());

// =================================================================
function pessoa3 (nome, idade){
    return{
        nome,
        idade,
        fala3(){
            return `Meu nome é ${this.nome} e minha idade é ${this.idade} anos`;
        }
    };
}

const p3 = pessoa3('Pedro', 25);
console.log(p3.fala3('Economia'));

// Todo objeto possui atributo e método
// Atributo são as características do objeto. Como: Nome, cor, tamanho, idade...
// Metodo é toda ação que o objeto é capaz de fazer. Como: Falar, andar, cadastrar, criar...