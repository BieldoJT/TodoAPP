import tarefa from "../Models/tarefa.js"
import { bdTarefas } from "../Infra/bd.js"

class tarefaController{
    static rotas(app){
    app.get('/Tarefas', tarefa.listar)
    app.post('/Tarefas', tarefa.incluir) 
}
    static listar(app){
        return app.get("/Tarefas",(req,res)=>{
                const jsonTarefas = bdTarefas
                res.send(jsonTarefas)
        })

}
}

export default tarefaController