import Prompt from "prompt-sync"
import { usuarios } from "../data/usuarios.js"
import menuPrincipal from "../index.js"


const input = Prompt()

function cadastroUsuario() {
    const cpf = input("Digite o seu CPF: ")
    const nome = input("Digite o seu nome: ")
    const telefone = input("Digite o seu telefone: ")
    const email = input("Digite seu email: ")
    usuarios.push({cpf, nome, telefone, email})
    

    console.log(`|||Seu Usuario foi cadastrado com sucesso!!|||`)
    console.clear()
}

function editarUsuario(){
    const cpf = input(`Digite o cpf do usuario: `)
    const index = usuarios.findIndex(pessoa => pessoa.cpf === cpf)
    if(index >= 0){
       const cpf = input(`Cpf: `)
       const nome = input(`Nome: `)
       const telefone = input(`Telefone: `)
       const email = input(`Email: `)
       usuarios[index]= {...usuarios[index], cpf, nome, telefone, email}
       console.log(`Usuario Editado com sucesso`)
    } else{
        console.log(`Usuario não encontrado`)
    }
}

function excluirUsuario(){
    console.log(`=========================`)
    console.log(`|     Excluir Livro     |`)
    console.log(`=========================`)
    const cpf = input(`Digite o cpf o usuario: `)
    const index = usuarios.findIndex(usuario => usuario.cpf === cpf)
    if(index >= 0){
        usuarios.splice(index, 1)
        console.log(`================================`)
        console.log(`| Usuario Excluido com Sucesso! |`)
        console.log(`================================`)
    } else {
        console.log(`Usuario não encontrado :C`)
    }
}

function listarUsuarios(){
    console.log(" ========================== ")
    console.log("|     Todos os Usuarios   |")
    console.log(" ========================== ")
    usuarios.forEach(usuario => console.log(`Id: ${usuario.cpf} - Titulo: ${usuario.nome}`))
    console.log(" ========================== ")
}

function buscarCpf(){
    const cpf = input("Digite o CPF desejado: ")
    const pessoa = usuarios.find(usuario => usuario.cpf === cpf)
   if(pessoa => 0){
        console.log(" ======================== ")
        console.log("|     Dados da Busca     |")
        console.log(" ======================== ")
        console.log(`Autor: ${pessoa.cpf}`)
        console.log(`Titulo: ${pessoa.nome}`)
        console.log(`Editora: ${pessoa.telefone}`)
        console.log(`Emprestado: ${pessoa.email}`)
        console.log(" ======================== ")
   } else {
    console.log(`CPF não encontrado`)
    console.clear()
   }
}




function menuUsuarios() {
    const usuarios = [
        "1 - Cadastrar Usuario",
        "2 - Editar Usuario",
        "3 - Excluir Usuario",
        "4 - Listar todos os Usuarios",
        "5 - Buscar Usuario por CPF",
        "0 - Retornar ao menu principal"
    ]
    const menu = usuarios.join("\n")
    console.log(menu)
    let opcao = input("Digite a opcao desejada: ")
    console.clear()
    switch(opcao) {
        case "0":
            menuPrincipal()
        break
        case "1" :
            cadastroUsuario()
            menuUsuarios()
        break
        case "2" :
            editarUsuario()
            menuUsuarios()
        break
        case "3":
            excluirUsuario()
            menuUsuarios()
        case "4":
            listarUsuarios()
            menuUsuarios()
        break
        case "5":
            buscarCpf()
            menuUsuarios()
        default:
            menuUsuarios()
    }
}



export default menuUsuarios