import prompt from "prompt-sync"
import menuPrincipal from "../index.js"
import cadastro from "./cadastro.js"
import buscar_ID from "./buscar_ID.js"
import { dados } from "../../data/livros.js"

const input = prompt()

const livros = dados

function listarTodosLivros(){
    console.log(" ========================== ")
    console.log("|     Todos os Livros      |")
    console.log(" ========================== ")
    livros.forEach(livro => console.log(`Id: ${livro.id} - Titulo: ${livro.titulo}`))
    console.log(" ========================== ")
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
        break
        case "4":
            listarTodosLivros()
            menuLivros()
        break
        case "5":
            buscar_ID()
        break
            menuLivros()
        default:
        }
}

export default menuLivros
