/* a classe controller recebe as requisições e devevolve respostas - direciona onde as coisas devem ser feitas.
    ela lê parametros e o body (quando você preenche um formulário, os dados são encapsulados para o servidor ler)
    define status HTTP (200, 404)
    retorna JSON
*/

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 }
];

exports.listar = (req, res) => {
  res.json(produtos);
};

exports.criar = (req, res) => {
  const produto = { id: 2, ...req.body };
  produtos.push(produto);
  res.status(201).json(produto);
};