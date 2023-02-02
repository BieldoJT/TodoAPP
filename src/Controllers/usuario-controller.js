import tarefa from "../Models/tarefa.js"
import { bdUsuario } from "../Infra/bd.js"

class UsuarioController{
    static rotas(app){
    app.get('/Usuario', tarefa.listar)
    app.post('/Usuario', tarefa.incluir) 
}
    static listar(app){
        return app.get("/Usuario",(req,res)=>{
                const jsonUsuario = bdUsuario
                res.send(jsonUsuario)
        })

}
}
export default UsuarioController