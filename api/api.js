var express = require('express');
var app = express();

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'banco.db'
  });

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//retorna todos os produtos 
app.get('/produtos', function (req, res) {
    prod = [];
    sequelize.query("SELECT * FROM produto").then(myTableRows => {
        res.send(myTableRows);
      })
});

