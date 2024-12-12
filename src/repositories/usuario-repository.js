
import { database } from "./database.js"

export const usuariosRepository = {
    // Listar Todos
    findAll: () => database.usuarios,
    // Buscar por Cpf
    findByCpf: (cpf) => {
        database.usuarios.find(usuario => usuario.cpf === cpf)
    },
    // Salvar 
    save:(usuario) => {
        database.usuarios.push(usuario)
    },
    // Atualizar Usuario
    update: (cpf, nome, fone, email) => {
        const usuario = findByCpf()
        usuario.nome = nome
        usuario.fone = fone
        usuario.email = email
    },
    // Excluir Usuario
    remove: (cpf) => {
        const index = database.usuarios.findIndex(usuario => usuario.cpf === cpf)
        database.usuarios.splice(index, 1)
    }


}
