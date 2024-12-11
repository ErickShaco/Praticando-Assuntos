import prompt from "prompt-sync";

import menuPrincipal from "../index.js ";
import { emprestimo } from "../../data/emprestimos.js";
import { usuarios } from "../../data/usuarios.js"
import { dados as livros} from "../../data/livros.js"

const input = prompt()

function realizarEmprestimo(){
        let id = Math.floor(Math.random() * 1000).toString()
        let usuarioCpf = input("Digite o CPF do Usuario: ")
        while(!usuarios.find(usuario => usuario.cpf === usuarioCpf)){
            console.log("+-----------------------------------+")
            console.log("| Usuário não encontrado!           |")
            console.log("+-----------------------------------+\n")
            console.log("+-----------------------------------+")
            console.log("| Deseja voltar ao menu?            |")
            console.log("| 0 - Sim                           |")
            console.log("| 1 - Não                           |")
            console.log("+-----------------------------------+")
            const opcao = input("* Digite a opção desejada: ")
            if (opcao === "0") menuEmprestimos()
            usuarioCpf = input("| * Digite o CPF do usuário: ")
        }

        const livroId = input("Digite o ID do Livro: ")
        while(!livros.find(livro => livro.id === livroId)){
            console.log("+-----------------------------------+")
            console.log("| Livro não encontrado!             |")
            console.log("+-----------------------------------+\n")
            console.log("+-----------------------------------+")
            console.log("| Deseja voltar ao menu?            |")
            console.log("| 0 - Sim                           |")
            console.log("| 1 - Não                           |")
            console.log("+-----------------------------------+")
            const opcao = input("* Digite a opção desejada: ")
            if (opcao === "0") menuEmprestimos()
            livroId = input("| * Digite o ID do livro: ")
        }

        const Livros = livros.find(livro => livro.id === livroId)
        livros.emprestado = true
        const dataAtual = new Date().getTime().toString()
        const dataEmprestimo = new Date().toLocaleDateString()
        const dataDevolucao = input(`Digite uma data para a Devolver o Livro: `)
        emprestimo.push({id, usuarioCpf, livroId, dataEmprestimo, dataDevolucao})
        
        console.log("+-----------------------------------+")
        console.log("| Empréstimo realizado com sucesso! |")
        console.log("+-----------------------------------+")

}

function listarEmprestimos(){
    console.log(`==============================`)
    console.log(`|    Todos os Emprestimos    |`)
    console.log(`==============================`)
    emprestimo.forEach(emprestimo => {
        const livro = livros.find(livro => livro.id === emprestimo.livroId)
        const usuario = usuarios.find(usuario => usuario.cpf === emprestimo.usuarioCpf)
        console.log(`| ID: ${emprestimo.id} - Data de emprestimo: ${emprestimo.dataEmprestimo}`)
        console.log(`| Usuario: ${usuario.nome} - Livro: ${livro.titulo}\n`)
    })
}


function menuEmprestimo() {
    const livros = [
        "1 - Realizar Emprestimo",
        "2 - Renovar Emprestimo",
        "3 - Realizar Devolução",
        "4 - Listar Emprestimos",
        "5 - Buscar Emprestimos por ID",
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
            realizarEmprestimo()
            menuEmprestimo()
        break
        case "2":

        case "3":

        break
        case "4":
            listarTodosEmprestimos()
            menuEmprestimo()
        break
        case "5":

        break
        default:

        }
}








export default menuEmprestimo