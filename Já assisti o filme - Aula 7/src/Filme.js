import { useState } from 'react';

const ConteudoStatus = ({ tipo, assistido, marcarComoAssistido }) => {
  return (
    <div>
      <p>{tipo} {assistido ? '🎬 ✅ Já assistido' : '🎬 ❌ Ainda não assistido'}</p>
      {!assistido && <button onClick={marcarComoAssistido}>Marcar como assistido</button>}
    </div>
  );
};

const Filme = () => {
  const [titulo, setTitulo] = useState('Seu Filme Favorito');
  const [assistido, setAssistido] = useState(false);
  const [tipo, setTipo] = useState('Filme');

  return (
    <div>
      <h1>{titulo}</h1>
      <label>
        Selecione o tipo:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="Filme">Filme</option>
          <option value="Série">Série</option>
        </select>
      </label>
      <ConteudoStatus tipo={tipo} assistido={assistido} marcarComoAssistido={() => setAssistido(true)} />
    </div>
  );
};

export default Filme;