import tarefa from "../Models/tarefa.js"

function listar(app){
app.get('/Tarefas', tarefa.listar) 
}
function inserir(app){
    app.post('/Tarefas', tarefa.incluir)
}


export default {inserir,listar}