const express = require("express") 
const app = express()
const handlebars = require("express-handlebars")

sequelize.authenticate().then(function() {
    console.log("Conectado ao banco com sucesso!")
}).catch (function(erro) {
    console.log("Falha ao fazer a conexão: " + erro)
})

// Configuração handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

// Conexão básica com o banco
const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodejs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

app.listen(3000, function() {
    console.log("Servidor iniciado na url http://localhost:3000")
}) 