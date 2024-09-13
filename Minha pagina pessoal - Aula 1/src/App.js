import React from 'react';
import Header from './components/Header';
import CardInfo from './components/CardInfo';
import Container from '@mui/material/Container';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <CardInfo />
      </Container>
    </div>
  );
}

export default App;