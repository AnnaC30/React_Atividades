import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardInfo = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Nome do Aluno
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Time de Futebol Preferido: Flamengo
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardInfo;