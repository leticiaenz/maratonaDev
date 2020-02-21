//configurando o servidor
const express = require("express");
const server = express();

//configurar a apresentação da página
server.get("/", function(req, res) {
  return res.send("ok, chegeui aqui com o nodemon");
});

//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
  console.log("inicei o servidor");
});
