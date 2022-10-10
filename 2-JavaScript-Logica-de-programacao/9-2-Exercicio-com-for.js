const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');

for (let i = 0; i < elementos.length; i++) {
    
    let { tag, texto } = elementos[i]; // usando a atribuição via desestruturação
    
    let criaTag = document.createElement(tag);
    criaTag.innerHTML = texto;

    container.appendChild(criaTag); // appendChild adiciona um filho ao elemeto pai. Neste caso adiciona criaTag dentro de container que seria seu pai.
};
