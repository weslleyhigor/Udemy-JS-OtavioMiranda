function retornaFuncao(){
    const nome = 'Luiz';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao)

// Closures é a habilidade que a função tem de acessar o seu escopo lexico

// O código acima não exemplifica quase nada pois faz parte da explicação da aula 72-Closures.

// Fica bem dificil de compreender algum código deste assunto sem assistir a aula.