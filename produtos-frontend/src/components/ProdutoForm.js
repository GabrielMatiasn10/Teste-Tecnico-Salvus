import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ProdutoForm = ({ produtoAtual, atualizarProdutos, limparProdutoAtual }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  useEffect(() => {
    if (produtoAtual) {
      setNome(produtoAtual.nome);
      setDescricao(produtoAtual.descricao);
      setPreco(produtoAtual.preco);
    }
  }, [produtoAtual]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (produtoAtual) {
        await api.put(`/produtos/${produtoAtual.id}`, { nome, descricao, preco });
      } else {
        await api.post('/produtos', { nome, descricao, preco });
      }
      atualizarProdutos();
      limparProdutoAtual();
      setNome('');
      setDescricao('');
      setPreco('');
    } catch (error) {
      console.error('Erro ao salvar o produto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="number"
          step="0.01"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
      </div>
      <button type="submit">{produtoAtual ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
};

export default ProdutoForm;
