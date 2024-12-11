import prompt from "prompt-sync";

import menuPrincipal from "../index.js ";
import { emprestimo } from "../../data/emprestimos.js";
import { usuarios } from "../../data/usuarios.js"
import { dados as livros} from "../../data/livros.js"

const input = prompt()
const dataAtual = Date.now()

function realizarEmprestimo(){
        let id = Math.floor(Math.random() * 1000).toString()
        let usuarioCpf = input("Digite o CPF do Usuario: ")
        while(!usuarios.find(usuario => usuario.cpf === usuarioCpf))
            break
        const livroId = input("Digite o ID do Livro: ")
        while(!usuarios.find(usuario => usuario.cpf === usuarioCpf))
            break
        const dataEmprestimo = dataAtual.toString().split(`T`)[0]
        const emprestado = true
        const livro = livros.find(livro => livro.emprestado === emprestado)
        const dataDevolucao = input(`Digite uma data para a Devolver o Livro: `)
        emprestimo.push({id, usuarioCpf, livroId, dataEmprestimo, dataDevolucao})
}

function listarEmprestimos(){
    console.log(`==============================`)
    console.log(`|    Todos os Emprestimos    |`)
    console.log(`==============================`)
    emprestimo.forEach(emprestimo => {
        const usuario = usuarios.find(usuario => usuario.cpf === emprestimo.usuarioCpf)
        const livro = livros.find(livro => livro.id === emprestimo.livroId)
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
            listarEmprestimos()
            menuEmprestimo()
        break
        case "5":

        break
        default:

        }
}








export default menuEmprestimo