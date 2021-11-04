const express = require("express");
const router = express.Router();
// Array de objetos
let cervejas = [
    {
        nome: "Antártica Original",
        descricao: "garrafa"
    },
    {
        nome: "Heineken",
        descricao: "garrafa"
    },
    {
        nome: "Amstel",
        descricao: "garrafa"
    },
    {
        nome: "Budweiser",
        descricao: "garrafa"
    }
];
// Rota GET home
router.get("/cervejas", (req,res) => {
    res.json({message:"API de cervejas OK"});
});
// Rota GET retornando todos os itens
router.get("/listarcervejas", (req,res) => {
    res.json(cervejas);
});
// Rota GET retornando item por index
router.get("/listarcervejas/:id", (req,res) => {
    const id = req.params.id;
    res.json(cervejas[id]);
});
// Rota POST com validação
router.post("/incluircervejas", (req,res) => {
    const cerveja = req.body;
    if(!cerveja.nome){
        res.status(400).json({message: "Nome na requisição está vazio"});
        return;
    }
    if(!cerveja.descricao){
        res.status(400).json({message: "Descrição na requisição está vazio"});
        return;
    }
    cervejas.push(cerveja);
    res.status(201).json({message:"Cadastro realizado"});
});
// Rota PUT com busca por id
router.put("/alterarcervejas/:id", (req,res) => {
    const id = req.params.id;
    const cerveja = cervejas[id];
    console.log(cerveja);
    cervejas[id] = req.body;
    res.status(201).json({message: "Cadastro efetuado"});
});
// Rota DELETE com splice
router.delete("/deletarcervejas/:id", (req,res) => {
    const id = req.params.id;
    delete cervejas[id];
    cervejas.splice(id,1);
    console.log(cervejas[id]);
    res.status(200).json({message: "Exclusão realizada", cervejas});
});


// router.delete("/deletarcervejas/:id", (req,res) => {
//     const id = req.params.id;
//     cervejas.splice(id,1);
//     res.json(cervejas);
// });
// const cervejasRouter = require("./cervejas");
// app.use("/cervejas",cervejasRouter);


// const filmesRouter = require("./filmes");
// router.use("/filmes",filmesRouter);


module.exports = router;


