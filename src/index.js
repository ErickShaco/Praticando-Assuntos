import prompt from "prompt-sync"
import menuLivros from "./livros/livros.js"
import cadastro from "./livros/cadastro.js"


function menuPrincipal(){
    const input = prompt()
    const opcoes = [
    "1 - Livros",
    "2 - Usuarios",
    "3 - Emprestimos",
    "0 - Sair"
    ]
    const menu = opcoes.join("\n")
    console.log(menu)
    let opcao = input("Digite a opcao desejada: ")
    switch(opcao) {
        case "1" :
        menuLivros()
        break
        menuPrincipal()
        default:
    }
}

export default menuPrincipal
menuPrincipal()