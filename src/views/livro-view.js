// Importações necessárias
import PromptSync from "prompt-sync";
import utils from "../Utils/utils.js";
import menuPrincipal from "./main-view.js";
import { livroController } from "../controllers/livro-controller.js";

// Inicializando o prompt
const prompt = PromptSync();
const width = 80;


const cadastrarLivro = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Cadastrar usuário", width));
    console.log(utils.createBase(width));
    let id = Date.now().toString()
    const titulo = prompt("| * Titulo: ");
    const autor = prompt("| * Autor: ");
    const editora = prompt("| * Editora: ");
    const emprestado = false
    livroController.save({ id, titulo, autor, editora, emprestado });
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Livro cadastrado com sucesso!", width));
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    livroView();
}


const editarLivro = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Editar Livro", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    const livro = livroController.findById(id);
    if (livro) {
        console.log(utils.formatMessage(`ID: ${livro.id}`, width));
        console.log(utils.formatMessage(`Autor: ${livro.autor}`, width));
        console.log(utils.formatMessage(`Titulo: ${livro.titulo}`, width));
        console.log(utils.createBase(width));
        const autor = prompt("| *novo Autor: ") || livro.autor;
        const titulo = prompt("| * Novo Titulo: ") || livro.titulo;
        const editora = prompt("| * Nova Editora: ") || livro.editora;
        const livroUpdate = { autor, titulo, editora };
        livroController.save(livroUpdate);
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("Livro editado com sucesso!", width));
        console.log(utils.createBase(width));
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("Livro não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    livroView();
};


const excluirLivro = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Excluir Livro", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    const livro = livroController.findById(id);
    if (livro) {
        console.log(utils.formatMessage(`Nome: ${livro.id}`, width));
        console.log(utils.formatMessage(`Fone: ${livro.titulo}`, width));
        console.log(utils.formatMessage(`E-mail: ${livro.editora}`, width));
        console.log(utils.formatMessage(`E-mail: ${livro.autor}`, width));
        console.log(utils.createBase(width));
        const confirmacao = prompt("| * Deseja realmente excluir? (s/n): ");
        if (confirmacao === "s") {
            livroController.remove(id)
            console.log(utils.createBase(width));
            console.log(utils.formatMessage("Livro excluído com sucesso!", width));
            console.log(utils.createBase(width));
        }
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("Livro não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    livroView();
};

const listarLivros = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Todos os usuários", width));
    console.log(utils.createBase(width));
    livroController.findAll().forEach(livro => {
        console.log(utils.formatMessage(`ID: ${livro.id}`, width));
        console.log(utils.formatMessage(`Autor: ${livro.autor}`, width));
        console.log(utils.formatMessage(`Titulo: ${livro.titulo}`, width));
        console.log(utils.formatMessage(`Editora: ${livro.editora}`, width));
        console.log(utils.formatMessage("", width));
    });
    console.log(utils.createBase(width));
    prompt("Pressione Enter para continuar...");
    livroView();
};


const buscarlivro = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Buscar Livro por ID", width));
    console.log(utils.createBase(width));
    const id = prompt("| * ID: ");
    const livro = livroController.findById(id)
    if (livro) {
        console.log(utils.formatMessage(`Nome: ${livro.id}`, width));
        console.log(utils.formatMessage(`Fone: ${livro.autor}`, width));
        console.log(utils.formatMessage(`E-mail: ${livro.titulo}`, width));
        console.log(utils.createBase(width));
    } else {
        console.log(utils.createBase(width));
        console.log(utils.formatMessage("Livro não encontrado!", width));
        console.log(utils.createBase(width));
    }
    prompt("Pressione Enter para continuar...");
    livroView()
}



const livroView = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Menu Livros", width));
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("1 - Cadastrar livro", width));
    console.log(utils.formatMessage("2 - Editar livro", width));
    console.log(utils.formatMessage("3 - Excluir livro", width));
    console.log(utils.formatMessage("4 - Listar todos os livros", width));
    console.log(utils.formatMessage("5 - Buscar livro por id", width));
    console.log(utils.formatMessage("0 - Retornar ao menu principal", width));
    console.log(utils.createBase(width));
    const opcao = prompt("| * Digite a opção desejada: ");
    switch (opcao) {
        case "0":
            menuPrincipal();
        case "1":
            cadastrarLivro()
            break;
        case "2":
            editarLivro()
            break;
        case "3":
            excluirLivro()
            break;
        case "4":
            listarLivros()
            break;
        case "5":
            buscarlivro()
            break;
        default:
            livroView();
    }
};

// Exporta a visualização de livros
export default livroView;


