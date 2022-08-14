/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome, 
        sobrenome: sobrenome,
        idade: idade
    };
}*/

//  ou

/*function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}*/

//const pessoa1 = criaPessoa('Weslley', 'Higor', 25 ); // Cria um objeto pessoa com as caracteristicas infomada na função.
//console.log(pessoa1.nome);


// ---------------------------------------------------------------------------

const pessoa1 = {
    nome: 'Weslley',
    sobrenome: 'Higor',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }, 

    incremetaIdade() {
        this.idade++;
    }
};

pessoa1.fala();