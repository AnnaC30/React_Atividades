import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './App.css';

const doces = [
  { id: 1, nome: 'Brigadeiro', preco: 'R$ 2,00' },
  { id: 2, nome: 'Paçoca', preco: 'R$ 2,50' },
  { id: 3, nome: 'Maria-Mole', preco: 'R$ 4,00' },
];

function App() {
  return (
    <div className="App">
      <h1>Lista de Doces</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome do Doce</TableCell>
              <TableCell>Preço</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doces.map((doce, index) => (
              <TableRow
                key={doce.id}
                className={index % 2 === 0 ? 'zebra-row-even' : 'zebra-row-odd'}
              >
                <TableCell>{doce.id}</TableCell>
                <TableCell>{doce.nome}</TableCell>
                <TableCell>{doce.preco}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;