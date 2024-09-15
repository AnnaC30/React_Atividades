import { useState } from 'react';

const carrosIniciais = [
  { id: 1, modelo: 'Civic', marca: 'Honda' },
  { id: 2, modelo: 'Corolla', marca: 'Toyota' },
  { id: 3, modelo: 'Mustang', marca: 'Ford' },
  { id: 4, modelo: 'Camry', marca: 'Toyota' },
  { id: 5, modelo: 'Accord', marca: 'Honda' }
];

const MONTADORA_REMOVER = 'Toyota';

const ListaDeCarros = () => {
  const [carros, setCarros] = useState(
    carrosIniciais.filter(carro => carro.marca !== MONTADORA_REMOVER)
  );

  return (
    <div>
      <h1>Lista de Carros</h1>
      {carros.length > 0 ? (
        <ul>
          {carros.map(carro => (
            <li key={carro.id}>
              {carro.modelo} - {carro.marca}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum carro disponível.</p>
      )}
    </div>
  );
};

export default ListaDeCarros;