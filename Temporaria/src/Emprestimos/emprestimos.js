import prompt from "prompt-sync";

import menuPrincipal from "../index.js ";
import { emprestimo } from "../data/emprestimos.js";
import { usuarios } from "../data/usuarios.js"
import { dados as livros} from "../data/livros.js"

const input = prompt()

function realizarEmprestimo(){
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
            if (opcao === "0") menuEmprestimo()
            livroId = input("| * Digite o ID do livro: ")
        }

        const Livros = livros.find(livro => livro.id === livroId)
        livros.emprestado = true
        const id = new Date().getTime().toString()
        const dataEmprestimo = new Date().toLocaleDateString()
        emprestimo.push({id, usuarioCpf, livroId, dataEmprestimo})
        
        console.log("+-----------------------------------+")
        console.log("| Empréstimo realizado com sucesso! |")
        console.log("+-----------------------------------+")
}
    
    function realizarDevolucao(){
    const id = input(`Digite o ID do emprestimo para realizar a devolução: `)
    while(!emprestimo.find(emprestimo => emprestimo.id === id)){
            console.log("|     Emprestimo não encontrado!    |")
            return
    }
    const dataDevolucao = emprestimo.dataDevolucao = new Date().toLocaleDateString()
    const Livros = livros.find(livro => livro.id === emprestimo.livroId)
    livros.emprestado = false

    console.log("+-----------------------------------+")
    console.log("|  Devoluçâo Realizada com Sucesso! |")
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

function buscarEmprestimo(){
    const busca = input(`Digite o ID do Emprestimo: `)
    const buscaId = emprestimo.find(emprestimo => emprestimo.id === id)
    
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
            realizarDevolucao()
            menuEmprestimo()
        break
        case "4":
            listarEmprestimos()
            menuEmprestimo()
        break
        case "5":

        break
        default:

        }
}








export default menuEmprestimo