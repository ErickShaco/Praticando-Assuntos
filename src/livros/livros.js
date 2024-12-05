import prompt from "prompt-sync"
import menuPrincipal from "../index.js"
import cadastro from "./cadastro.js"



function menuLivros() {
    const input = prompt()
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
    switch(opcao) {
        case "0":
            menuPrincipal()
        break
        case "1":
        cadastro()
        break
        menuLivros()
            default:
        }
}
export default menuLivros
