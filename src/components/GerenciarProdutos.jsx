import { useState } from 'react';
import styles from './GerenciarProdutos.module.css';


export default function TelaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [editIndex, setEditIndex] = useState(null);


  function handleSubmit(e) {
    e.preventDefault();
    if (editIndex !== null) {
      const novosProdutos = [...produtos];
      novosProdutos[editIndex] = { nome, preco };
      setProdutos(novosProdutos);
      setEditIndex(null);
    } else {
      setProdutos([...produtos, { nome, preco }]);
    }
    setNome('');
    setPreco('');
  }


  function handleEdit(index) {
    setNome(produtos[index].nome);
    setPreco(produtos[index].preco);
    setEditIndex(index);
  }


  function handleRemove(index) {
    setProdutos(produtos.filter((_, i) => i !== index));
    if (editIndex === index) {
      setNome('');
      setPreco('');
      setEditIndex(null);
    }
  }


  return (
    <div className={styles.wrapperProdutos}>
      <div className={styles.produtosContainer}>
        <h2>Gerenciar Produtos</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
          <label>Preço</label>
          <input
            type="number"
            value={preco}
            onChange={e => setPreco(e.target.value)}
            required
          />
          <button type="submit">{editIndex !== null ? 'Atualizar' : 'Inserir'}</button>
        </form>
        <ul className={styles.lista}>
          {produtos.map((p, i) => (
            <li key={i}>
              {p.nome} - R$ {p.preco}
              <button onClick={() => handleEdit(i)}>Editar</button>
              <button onClick={() => handleRemove(i)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

