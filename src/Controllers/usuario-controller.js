import tarefa from "../Models/tarefa.js"





function rotas(app){
        app.get('/usuario', tarefa.listar)
    }
function listar(req, res){
        app.send('Rota ativada com Get e recurso usuario: lista de usuarios deve ser retornad')
    }

export default {rotas:rotas}