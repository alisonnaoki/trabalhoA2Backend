const express = require('express')
const app = express()

app.use(express.json())

const mongoose = require('mongoose')
require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

//rotas

app.use('/api', require('./controllers/avaliacoesControl'));
app.use('/api', require('./controllers/carrinhoControl'));
app.use('/api', require('./controllers/categoriasControl'));
app.use('/api', require('./controllers/clientesControl'));
app.use('/api', require('./controllers/cupomControl'));
app.use('/api', require('./controllers/fornecedoresControl'));
app.use('/api', require('./controllers/logisticaControl'));
app.use('/api', require('./controllers/pagamentoControl'));
app.use('/api', require('./controllers/pedidosControl'));
app.use('/api', require('./controllers/produtosControl'));

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao banco MongoDB!!!!")
  })
  .catch(erro => {
    console.log("Erro ao conectar no banco MongoDB: ", erro)
  })


app.listen(3000, () => {
  console.log("Aplicação rodando -> http://locahost:3000")
})