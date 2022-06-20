// Capturar os inputs do html e manipular os valores
// Criar uma array com esses valores do input e mostrar na tela
// tratar o formulario para nao fazer envio

function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    function recebeEventoForm (evento) {

        evento.preventDefault(); // preventDefault impede que o formulario seja enviado e dessa forma podemos manipular os dados que foram inseridos.

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    
    }

    form.addEventListener('submit', recebeEventoForm);

    
    
}

meuEscopo();