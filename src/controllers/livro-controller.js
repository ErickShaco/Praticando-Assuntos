import { livroRepository } from "../repositories/livro-repository.js";

/**
 * Controlador de Usuários.
 * 
 * Responsável por intermediar as chamadas entre a camada de serviço e o repositório de usuários.
 * Fornece métodos para salvar, remover, listar e buscar usuários pelo CPF.
 */
export const livroController = {

    /**
     * Salva ou atualiza um livro.
     * 
     * @param {Object} usuario - Objeto representando o usuário.
     * @param {string} usuario.cpf - CPF do usuário (obrigatório).
     * @param {string} [usuario.nome] - Nome do usuário.
     * @param {string} [usuario.fone] - Telefone do usuário.
     * @param {string} [usuario.email] - E-mail do usuário.
     * @returns {void}
     */
    save: (livro) => livroRepository.save(livro),

    /**
     * Remove um livro pelo ID.
     * 
     * @param {string} ID - ID do Livro a ser removido.
     * @returns {void}
     */
    remove: (id) => livroRepository.remove(id),

    /**
     * Retorna uma lista com todos os livros.
     * 
     * @returns {Array<Object>} - Lista de livros cadastrados.
     */
    findAll: () => livroRepository.findAll(),

    /**
     * Busca um Livro pelo ID.
     * 
     * @param {string} id - ID do livro a ser buscado.
     * @returns {Object|null} - Objeto do Livro encontrado ou null se não existir.
     */
    findById: (id) => livroRepository.findById(id)

}

