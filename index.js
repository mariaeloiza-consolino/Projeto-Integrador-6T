const http = require('http'); //require = import;  http = biblioteca padrao do node que permite o fluxo de rede
const hostname = '0.0.0.0';  //hostname = ip que ele vai aceitar solicitações (pode ser nome de domínio, maquina local) 
//como estamos no git tem que usar 000 para executar portas //
const port = 3000;

//createServer = importado da biblioteca http / req = request / res= response 
// => - arrow function, tudo oq foi processado pela variável ela vai retornar
const server = http.createServer ((req, res) => {
    res.statusCode = 200; //statusCode é uma variável, tudo depois de res. é uma variável pois ele é um objeto
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Servidor Node.js rodando com sucesso no Codespaces! \n') //aparece na tela
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando na porta ${port}`); //aparece no terminal
});

//TAREFA: fazer com que o texto da tela atualize sem ter que sair e entrar do servidor
//TAREFA 2: instalar express
// Instalar nodemon 

// Para rodar: node index.js no terminal