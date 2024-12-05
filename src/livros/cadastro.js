import Prompt from "prompt-sync";




function cadastro() {
    const input = Prompt()
    const  id = input("Digite o Id do livro: ")
    const titulo = input("Digite o Titulo do livro: ")
    const autor = input("Digite o autor do livro: ")
    const editora = input("Digite a Editora do Livro: ")
    const emprestado = false

    console.log(`Seu livro foi cadastrado com sucesso!!`)
    const opcao = input("Deseja ve-lo? Digite 1 para Sim e 0 para Nao: ")

    switch(opcao) {
        case "1":
        console.log(`
        \nID: ${id}
        \nTitulo: ${titulo}
        \nAutor: ${autor}
        \nEditora: ${editora}
        \nEmprestado: ${emprestado}`)
        case "0":
            cadastro()
        break
        default:
    }
}


export default cadastro