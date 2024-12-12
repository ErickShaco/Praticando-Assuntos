import { database } from "./database.js"

export const 
export const findAll = () => database.livros

export const findByid = (id) => {
    database.livros.find(livro => livro.id === id)
}

export const save = (livro) => {
    database.livros.push(livro)
}

export const update = (titulo, id, editora, autor) => {
    const livro = findByid()
    livro.titulo = titulo
    livro.id = id
    livro.editora = editora
    livro.autor = autor
}

export const remove = (id) => {
    const index = database.livros.findIndex(livro => livro.id === id)
    database.livros.splice(index, 1)
}

