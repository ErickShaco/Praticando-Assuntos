import prompt from "prompt-sync"
import menuLivros from "./livros/livros.js"
import cadastro from "./livros/cadastro_livro.js"
import menuUsuario from "./Usuarios/usuarios.js"
import { usuarios } from "./data/usuarios.js"
import menuEmprestimo from "./Emprestimos/emprestimos.js"


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
    console.clear()
    switch(opcao) {
        case "0":
        break
        case "1" :
        menuLivros()
        break
        case "2" :
            menuUsuario()
        case "3" :
            menuEmprestimo()
        break
        default:
            menuPrincipal()
    }
}

export default menuPrincipal
menuPrincipal()