/* a classe service centraliza as regras de negócio e a lógica principal da aplicação
   ela busca, cria e altera os dados
   valida as regras da aplicação e orquestra as operações
   não depende de HTTP
*/

// importa o Model
const Produto = require("../models/produto.models");

/* essa linha está comentada pois essas informações devem vir do model
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 120 }
]; */

function listar() {
  return produtos;
}

function buscarPorId(id) {
  return produtos.find(p => p.id === Number(id));
}

// 4. A função criar atualizada com a Classe Produto e mantendo a validação
function criar(dados) {
  // Mantemos a regra de negócio que valida os dados
  if (!dados.nome || dados.preco == null) {
    throw new Error("nome e preco são obrigatórios");
  }

  // Usamos a classe Produto para instanciar o objeto
  const produto = new Produto({
    id: produtos.length + 1,
    nome: dados.nome,
    preco: dados.preco
  });

  produtos.push(produto);
  return produto;
}

module.exports = { listar, buscarPorId, criar }; 