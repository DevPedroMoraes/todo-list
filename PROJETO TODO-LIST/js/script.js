const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')
 

let minhaListaDeItens = []


function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false

    })
    
    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){
    let novaLi = ''

    minhaListaDeItens.forEach(  (item, index) => {

        novaLi =  novaLi +`
        
            <li class="task ${item.concluida && "done"}">
                <img  src="/img/checked.png" alt="" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="/img/trash.png" alt="" onclick="deletarItem(${index})">
            </li>  
        
        
        
        `

    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function recarregarTarefas(){
    
    const tarefasDoLocalStorage = localStorage.getItem('lista',(minhaListaDeItens))
    
    if(tarefasDoLocalStorage) {

   
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    
    mostrarTarefas()


}
function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    mostrarTarefas()

}

function deletarItem(index){
    minhaListaDeItens.splice(index, 1)
    mostrarTarefas()

}

recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)