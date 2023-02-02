function listar(req, res){
    return res.send('Rota ativada com Get e recurso tarefa:lista de tarefa deve ser retornada')
}

function incluir (req, res){

    res.json(req.body)

    console.log(req.body)

}

class tarefas{
        constructor(titulo, descricao,status,data_de_criacao){
        this.titulo = titulo
        this.descricao = descricao
        this.status = status
        this.data_de_criacao = data_de_criacao
    }
}
export default {listar:listar,incluir:incluir,tarefa:tarefas}