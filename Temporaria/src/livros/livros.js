import prompt from "prompt-sync"
import menuPrincipal from "../index.js"
import cadastro from "./cadastro_livro.js"
import { dados } from "../data/livros.js"

const input = prompt()

function excluirLivro(){
    console.log(`=========================`)
    console.log(`|     Excluir Livro     |`)
    console.log(`=========================`)
    const id = input(`Digite o Id do Livro: `)
    const index = dados.findIndex(livro => livro.id === id)
    if(index >= 0){
        dados.splice(index, 1)
        console.log(`================================`)
        console.log(`| Livro Excluido com Sucesso! |`)
        console.log(`================================`)
    } else {
        console.log(`Livro não encontrado :C`)
    }
}

function editarLivros(){
    const id = input(`Digite o ID do Livro que deseja editar: `)
    const index = dados.findIndex(livro => livro.id === id)
    if(index >= 0){
       const titulo = input(`Titulo: `)
       const autor = input(`Autor: `)
       const editora = input(`Editora: `)
       dados[index]= {...dados[index], titulo, autor, editora}
       console.log(`Livro Editado com sucesso`)
    } else{
        console.log(`Livro não encontrado`)
    }
}

function listarTodosLivros(){
    console.log(" ========================== ")
    console.log("|     Todos os Livros      |")
    console.log(" ========================== ")
    dados.forEach(livro => console.log(`Id: ${livro.id} - Titulo: ${livro.titulo}`))
    console.log(" ========================== ")
}

function buscarId(){
    const id = input("Digite o ID desejado: ")
    const livro = dados.find(livro => livro.id === id)
   if(livro => 0){
        console.log(" ======================== ")
        console.log("|     Dados da Busca     |")
        console.log(" ======================== ")
        console.log(`Autor: ${livro.autor}`)
        console.log(`Titulo: ${livro.titulo}`)
        console.log(`Editora: ${livro.editora}`)
        console.log(`Emprestado: ${livro.emprestado}`)
        console.log(" ======================== ")
   } else {
    console.log(`Id não encontrado`)
    console.clear()
   }
}

function menuLivros() {
    const livros = [
        "1 - Cadastrar Livro",
        "2 - Editar Livro",
        "3 - Excluir Livro",
        "4 - Listar todos os Livros",
        "5- Buscar Livro por ID",
        "0 - Retornar ao menu principal"
    ]

    const menu = livros.join("\n")
    console.log(menu)

    let opcao = input("Digite a opcao desejada: ")
    console.clear()
    switch(opcao) {
        case "0":
            menuPrincipal()
        break
        case "1":
            cadastro()
            menuLivros()
        break
        case "2":
            editarLivros()
            menuLivros()
        case "3":
            excluirLivro()
            menuLivros()
        break
        case "4":
            listarTodosLivros()
            menuLivros()
        break
        case "5":
           buscarId()
           menuLivros()
        break
        default:
            menuLivros()
        }
}

export default menuLivros
