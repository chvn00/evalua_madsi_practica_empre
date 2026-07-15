const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'rubrica_practica_empresarial.html'));
});

app.listen(PORT, () => {
  console.log(`Rúbrica Práctica Empresarial MADSI corriendo en puerto ${PORT}`);
});
