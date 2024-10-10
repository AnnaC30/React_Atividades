import React, { useState } from 'react';
import Frutas from './Frutas';
import Verduras from './Verduras';
import Legumes from './Legumes';

const Feira = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('frutas');

  const handleChange = (event) => {
    setCategoriaSelecionada(event.target.value);
  };

  return (
    <div>
      <h1>Feira de Orgânicos</h1>
      <div>
        <input 
          type="radio" 
          id="frutas" 
          name="categoria" 
          value="frutas" 
          checked={categoriaSelecionada === 'frutas'} 
          onChange={handleChange}
        />
        <label htmlFor="frutas">Frutas</label>

        <input 
          type="radio" 
          id="verduras" 
          name="categoria" 
          value="verduras" 
          checked={categoriaSelecionada === 'verduras'} 
          onChange={handleChange}
        />
        <label htmlFor="verduras">Verduras</label>

        <input 
          type="radio" 
          id="legumes" 
          name="categoria" 
          value="legumes" 
          checked={categoriaSelecionada === 'legumes'} 
          onChange={handleChange}
        />
        <label htmlFor="legumes">Legumes</label>
      </div>

      <div>
        {categoriaSelecionada === 'frutas' && <Frutas />}
        {categoriaSelecionada === 'verduras' && <Verduras />}
        {categoriaSelecionada === 'legumes' && <Legumes />}
      </div>
    </div>
  );
};

export default Feira;