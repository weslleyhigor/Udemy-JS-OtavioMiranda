const novaTarefa = document.querySelector('#nova-tarefa');
const addTarefa = document.querySelector('#add-tarefa');
const tarefas = document.querySelector('#tarefas');


function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
}

addTarefa.addEventListener('click', function(){
    if (!novaTarefa.value) return; //checa se foi clicado em addTarefa sem inserir uma tarefa no input.
    criaTarefa(novaTarefa.value);    
});