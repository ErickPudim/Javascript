const loginModel = require('../models/loginModel');

module.exports = {

// main

  clientes: (req, res) => {
    res.sendFile('clientes.html', { root: './views' });
  },

  login: (req, res) => {
    res.sendFile('login.html', { root: './views' });
  },

  liberado: (req, res) => {
    const {nome, senha} = req.body
    const valido = loginModel.gerarValidacao(nome,senha)
    if (valido == true) {
      res.sendFile('liberado.html', { root: './views' })}
    else{
      res.sendFile('bloqueado.html', { root: './views'})};
  },

};
