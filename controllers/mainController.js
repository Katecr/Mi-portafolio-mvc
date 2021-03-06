// Declarando los modulos externos de express
const express = require('express');
const app = express();
const path = require('path');

//asignando la carpeta public como recurso estatico
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

let mainController = {
  index: function(req,res){
    res.sendFile(path.resolve(__dirname, '../views/home.html'));
  },
}

module.exports = mainController;