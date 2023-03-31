// Conexão básica com o banco
const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodejs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log("Conectado ao banco com sucesso!")
}).catch (function(erro) {
    console.log("Falha ao fazer a conexão: " + erro)
})

// Criar models
const nodejs = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    data_nascimento: {
        type: Sequelize.DATE
    },
    email: {
        type: Sequelize.STRING
    }
})

// nodejs.sync({force: true}) // Criar comandos SQL