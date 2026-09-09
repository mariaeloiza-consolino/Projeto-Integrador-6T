/* a classe service centraliza as regras de negócio e a lógica principal da aplicação
   ela busca, cria e altera os dados
   valida as regras da aplicação e orquestra as operações
   não depende de HTTP
*/

// 1. Importação do Model
const Produto = require("../models/produto.model");

// 2. O array (seu banco de dados) PRECISA continuar aqui
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 120 }
];

// 3. As funções de leitura continuam iguais
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