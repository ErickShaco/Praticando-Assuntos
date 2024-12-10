import Prompt from "prompt-sync";
import menuLivros from "./livros.js";
import { dados } from "../../data/livros.js";

const input = Prompt()

function cadastro() {
    let id = Math.floor(Math.random() * 1000).toString()
    const titulo = input("Digite o Titulo do livro: ")
    const autor = input("Digite o autor do livro: ")
    const editora = input("Digite a Editora do Livro: ")
    const emprestado = false
    dados.push({id, titulo, autor, editora, emprestado})
    

    console.log(`|||Seu livro foi cadastrado com sucesso!!|||`)
    const opcao = input("Deseja ve-lo? Digite 1 para Sim e 0 para Nao: ")
    console.clear()

    console.clear()
    switch(opcao) {
        case "1":   
        console.log(`ID: ${id}\nTitulo: ${titulo}\nAutor: ${autor}\nEditora: ${editora}\nEmprestado: ${emprestado}`)
        menuLivros()
        case "0":
            menuLivros()
        break
        default:
    }
}


export default cadastro