

import TodoApp from "./src/TodoApp.js"

const port = 3000

TodoApp.inferno.listen(port, () => {
    console.log(`Rodando na porta :3 ${port}`)
})