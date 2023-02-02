import express from 'express'
import usuario from './Models/usuario.js'
import tarefa from './Models/tarefa.js'

const app = express()
import tarefaController from './Controllers/tarefa-controller.js' 
import UsuarioController from './Controllers/usuario-controller.js'


tarefaController.listar(app)
UsuarioController.listar(app)






export default {inferno:app}

