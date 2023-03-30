const express = require("express") // Cria o express
// Variável que cria instancia da função express do modulo
const app = express()

app.get("/", function(req, res) {
    res.send("Página inicial")
})

// Criando rota para uma página alternativa da principal
app.get("/login", function(req, res) {
    res.send("oi")
})

// Criando rota com parâmetros
// Criação do parâmetro: /:parametro
app.get("/usuario/:nome/:cargo", function(req, res) {
    // Função send pode ser chamada somente uma vez
    res.send("Olá, " + req.params.nome + ". Seu cargo é " + req.params.cargo)
})

// Método do express parametro porta do servidor (sempre última linha)
// Quando a função listen é chamada um evento é disparado
// Usar função de callback
// Endereço: localhost:3000
app.listen(3000, function() {
    console.log("Servidor iniciado na url http://localhost:3000")
}) 