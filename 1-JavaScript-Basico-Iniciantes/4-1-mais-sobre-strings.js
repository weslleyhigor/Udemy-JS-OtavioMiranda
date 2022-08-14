const text = "Entao ele disse: \"Deu bom!\""; // A barra invertida permite aspas duplas para declarar string e sitação junto.
console.log(text);

// FATIAMENTO
let string = "Um texto.";

console.log(string);
console.log(string.replace("Um","Dois")); // replace substitui um texto por outro;
console.log(string.replace(/t/g, "*"));  // ESTUDAR SOBRE EXPRESSOES REGULARES EM JS. O //g aplica a todos os caracteres que forem identificados. No caso substituiu todos os t por *

console.log(string.length); // length retorna o tamanho da string contando a quantidade de caracteres

console.log(string.slice(3, 9)); // slice faz o fatiamento mostrando apenas os caracteres desejados
// pode ser feito dessa forma tambem
console.log(string.slice(-6, -1));

// Dividir strings
let texto = "O rato roeu a roupa do rei de roma.";
console.log(texto.split(' ')); // O split separa as palavras a partir do caractere desejado e retorna um array

texto = texto.toUpperCase(); // Transforma todos os caracteres em Maiusculos.
console.log(texto); 

texto = texto.toLowerCase(); // Transforma todos os caracteres em Minusculos.
console.log(texto); 