const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const ClientData = require("./databases/ClientData.js");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.get("/getData", (req, res) =>{
    ClientData.findAll().then(function(clientData)//findAll() pega todas as rows da tabela 
    {
        const data = JSON.stringify(clientData,null , 2) ;
        res.send(data);
    });
})

app.post("/msg", (req, res) => {
    const {name, email, whatsapp} = req.body ;
    
    ClientData.create({
        nome: name,
        email: email,
        whatsapp: whatsapp
    }).then(() => {
        res.send("Dados gravados!");
        console.log("Dados gravados!");
    }).catch((erro) => {
        res.send("Erro ao gravar!");
    })
    
})

app.listen("8081", () => {
    console.log("Servidor rodando na porta 8081");
})