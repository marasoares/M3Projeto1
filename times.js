const express = require("express");
const router = express.Router();
// Array de objetos
let times = [
    {
        nome: "Flamengo",
        descricao: "Melhor do mundo!"
    },
    {
        nome: "Os outros",
        descricao: "São os outros"
    }
];
// Rota GET home
router.get("/times", (req,res) => {
    res.status(200).json({message:"API de times - OK"});
});
// Rota GET retornado todos os itens
router.get("/listartimes", (req,res) => {
    res.status(200).json(times);
});
// Rota GET retornando item por index
router.get("/listartimes/:id", (req,res) => {
    const id = req.params.id;
    const index = times[id];
    res.status(200).json({index: index});
});
// Rota POST com validação
router.post("/incluirtimes", (req,res) => {
    const time = req.body;
    if(!time.nome){
        res.status(400).json({message: "Nome vazio na requisição"});
        return;
    }
    if(!time.descricao){
        res.status(400).json({message: "Descrição vazia na requisição"});
        return;
    }
    times.push(time);
    res.status(200).json({message:"Cadastrado com sucesso"});
});
// Rota PUT com edição de dado por id
router.put("/alterartimes/:id", (req,res) => {
    const id = req.params.id;
    const time = times[id];
    console.log(time);
    times[id] = req.body;
    res.status(200).json({message: "Cadastro realizado"});
});
// Rota DELETE com splice
router.delete("/deletartimes/:id", (req,res) => {
    const id = req.params.id;
    delete times[id];
    times.splice(id,1);
    console.log(times[id]);
    res.status(200).json({message: "Excluído com sucesso"});
});

module.exports = router;
