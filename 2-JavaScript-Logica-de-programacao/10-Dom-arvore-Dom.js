//developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM



// JavaScript - Append Child (DOM)
// Referência prática da função appendChild()

// A função appendChild() insere um elemento filho (children) ao elemento pai (parent) na última posição, ela auxilia na criação de um elemento DOM, veja o esquema da função:

// elemento_pai.appendChild(elemento_filho)

// Abaixo vemos um exemplo.

// var elemento_pai = document.body;
// var titulo = document.createElement('h1');

// //
// // Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
// //
// elemento_pai.appendChild(titulo);

// O código acima produzirá o seguinte HTML.

// <body>
//     <h1></h1>
// </body>

// Repare que não temos o nó de texto do elemento, que dizer, o título está vazio. Então precisamos criar e anexar o nó de texto e, mais uma vez, a função createTextNode() nos auxiliará.

// var elemento_pai = document.body;
// var titulo = document.createElement('h1');

// // Criar o nó de texto
// var texto = document.createTextNode("Um título qualquer");

// //
// // Anexar o nó de texto ao elemento h1
// //
// titulo.appendChild(texto);

// elemento_pai.appendChild(titulo);

// O código acima produzirá um HTML diferente do anterior, veja:

// <body>
//     <h1>Um título qualquer</h1>
// </body>

// Leia a matéria JavaScript - Create Element (DOM) para saber mais detalhes de como criar um elemento DOM.
