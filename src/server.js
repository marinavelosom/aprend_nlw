const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const nunjucks = require('nunjucks')
//Configurar nunjucks (Template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


//Início e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
//Configurar arquivos estaticos  (css, scripts, imagens)
.use(express.static("public"))
//Rotas da aplicação 
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5500) 
