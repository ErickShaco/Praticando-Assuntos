
import database from "./database.js";

export const usuarioRepository = {
    // Listar Todos
    findAll: () => database.usuarios,
    // Buscar por Cpf
    findByCpf: (cpf) => {
        database.usuarios.find(usuario => usuario.cpf === cpf)
    },
    // Salvar 
    save:(usuario) => {
        const isUserExists = usuarioRepository.findByCpf(usuario.cpf)
        if (isUserExists) {
            Object.assign(isUserExists, usuario);
            return isUserExists;
        } else {
            database.usuarios.push(usuario);
            return usuario;
        }
    },

    // Excluir Usuario
    remove: (cpf) => {
        const index = database.usuarios.findIndex(usuario => usuario.cpf === cpf)
        database.usuarios.splice(index, 1)
    }


}
