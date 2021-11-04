const express = require("express");
const router = express.Router();
//Array de objetos
let petiscos = [
  {
    nome: "Batata-frita porção",
    descricao: "Porção de batata-frita com calabresa",
    tamanho: "médio"
  },
  {
    nome: "Frango à passarinho",
    descricão: "Porção de frango à passarinho com alho frito",
    tamanho: "médio"
  },
  {
    nome: "Calabresa acebolada",
    descrição: "Linguiça calabresa acebolada",
    tamanho: "médio"
  },
  {
    nome: "Torresmo",
    descricao: "Porção de torresmo",
    tamanho: "médio"
  },
];
// Entrada na rota petiscos
router.get("/petiscos", (req, res) => {
    res.status(200).json({ message: "API de petiscos OK" });
});
// Leitura de todos os dados em GET
router.get("/listarpetiscos", (req, res) => {
    // console.log(petiscos);
    res.status(200).json(petiscos);
});
// Leitura de dados por ID em GET com validação
router.get ("/listarpetiscos/:id", (req,res) => {
    const id = req.params.id;
    const petisco = petiscos[id];
    
    if (!petisco) {
        res.status('404').send(`Petisco com id ${id} não foi localizado` );
        console.error(err);
    } else {
        res.status(200).send({ petisco });
    }
});
// Leitura de itens individuais por Index com validação
router.get("/listarpetiscos/:id", (req, res) => {
  const id = req.params.id;
  const index = petiscos[id];
  // const petiscoInvalido = (id) => petiscoInvalido().send((id) => petiscos.id === id);
  // if(!petiscos.id == petiscoInvalido){
  //   res.status(404).json({message: `Id ${id} não localizado`});
  //   return;
  // }
  res.status(200).json({ index: index });
});
// Inclusão de dado por POST com validação
router.post("/incluirpetiscos", (req, res) => {
  const petisco = req.body;
  if(!petisco.nome){
    res.status(400).json({message:"nome na requisição esta vazio"});
    return;
  }
  if(!petisco.descricao){
    res.status(400).json({message:"descrição na requisição esta vazio"});
    return;
  }
  if(!petisco.tamanho){
    res.status(400).json({message: "tamanho na requisição está vazio"});
    return;
  };
  // const lastPetisco = petiscos[petiscos.length - 1];
  // if (petiscos.length) {
  //   petisco.id = lastPetisco.id + 1;
  // }
  petiscos.push(petisco); 
  res.status(201).json({message:"Cadastrado com sucesso."});
});
// Edição de dado por id
router.put("/alterarpetiscos/:id", (req, res) => {
  const id = req.params.id;
  const petisco = petiscos[id];
  console.log(petisco);
  petiscos[id] = req.body;
  // res.json(petiscos[id]);
  res.status(200).json({ message: "Ateração realizada com sucesso" });
  // console.log(petiscos);
});


// Exclusão de dado por id com splice
router.delete("/deletarpetiscos/:id", (req, res) => {
  const id = req.params.id;
  delete petiscos[id];
  petiscos.splice(id, 1);
  console.log(petiscos[id]);
  res.status(200).json({message: "Exclusão ralizada", petiscos});
});

module.exports = router;