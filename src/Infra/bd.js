import usuario from "../Models/usuario.js";
import tarefa from "../Models/tarefa.js";


const bdUsuario=[],bdTarefas =[]

const Usuario1 = new usuario("GB","Gblindo@gmail.com","sexo")
bdUsuario.push(Usuario1)

const Usuario2 = new usuario("dt","morre|@diabo","lixo")
bdUsuario.push(Usuario2)

const tarefa1 = new tarefa.tarefas("Morrer","sematar de algum jeito","a fazer",new Date())
const tarefa2 = new tarefa.tarefas("matar","matar alguem","a fazer",new Date())
bdTarefas.push(tarefa1)
bdTarefas.push(tarefa2)

export {bdUsuario,bdTarefas}