import express from 'express' //type module
//const express = require("express")// --type common JS

//inicializando o express(similar ao new console em c#)
const app = express()

//exercicio1 usando query nos parametros
app.get("/api/somar",( req, res)=> {
//3 tipos de variaveis no JS
//const - variavel que nao muda nunca (constante)do inicio ao fim
//let - variavel que pode ser alterada durante a execuçao do programa
//var - nao iremaos utilizar :(

const num1= Number(req.query.num1)
const num2= Number(req.query.num2)

res.send({message: num1 + num2})
})
//http://localhost:3000/api/somar?num1=4&num2=2  // RESULTADO





//exercicio2

app.get("/api/salario/:valor/:hora", (req,res) => {
const ValorGanho = Number(req.params.valor)
const HorasTrabalhadas = Number(req.params.hora)

const resultado = ValorGanho * HorasTrabalhadas

res.send({ resultado })

})

//http://localhost:3000/api/salario/20/40 = RESULTADO
























app.listen(3000, () => {
    console.log("Server rodando na porta 3000 -> https://localhost:3000")
})




