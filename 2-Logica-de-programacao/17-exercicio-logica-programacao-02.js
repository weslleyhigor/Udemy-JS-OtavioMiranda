// Escreva uma função chamada ePaisagem que 
// recebe dois argumentos, largura e altura
// de uma imagem (number);
// Retorne true se a imagem estiver no modo Paisagem.

function ePaisagem(width, height){
    return width > height;
};

console.log(ePaisagem(380, 520));