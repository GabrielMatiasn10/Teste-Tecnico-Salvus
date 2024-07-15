const db = require('../models');
const Produto = db.produto;


exports.create = async (req, res) => {
  try {
    const { nome, descricao, preco } = req.body;
    if (!nome || !descricao || !preco) {
      return res.status(400).send({ message: 'Campos obrigatórios não preenchidos.' });
    }
    const novoProduto = await Produto.create({ nome, descricao, preco });
    res.status(201).send(novoProduto);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Buscar todos os produtos
exports.findAll = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).send(produtos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Buscar um produto pelo ID
exports.findOne = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) {
      return res.status(404).send({ message: 'Produto não encontrado.' });
    }
    res.status(200).send(produto);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Atualizar um produto pelo ID
exports.update = async (req, res) => {
  try {
    const { nome, descricao, preco } = req.body;
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) {
      return res.status(404).send({ message: 'Produto não encontrado.' });
    }
    produto.nome = nome || produto.nome;
    produto.descricao = descricao || produto.descricao;
    produto.preco = preco || produto.preco;
    await produto.save();
    res.status(200).send(produto);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Deletar um produto pelo ID
exports.delete = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) {
      return res.status(404).send({ message: 'Produto não encontrado.' });
    }
    await produto.destroy();
    res.status(200).send({ message: 'Produto deletado com sucesso.' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
