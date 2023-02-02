import express from 'express'
import tarefa from './Models/tarefa.js'

const app = express()

app.use(express.json())

import usuarioController from './Controllers/usuario-controller.js'
import tarefaController from './Controllers/tarefa-controller.js'

usuarioController.rotas(app)
tarefaController.listar(app)
tarefaController.inserir(app)

let coisa = new tarefa.tarefa("a","b","c","D")
console.log(coisa)
export default {inferno:app}

