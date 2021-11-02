const express = require('express');
const app = express();

const routesMain = require('./routers/main.js');

app.listen(3000, () => {
  console.log("Servidor funcionando en el puerto 3000");
});

app.use('/', routesMain);