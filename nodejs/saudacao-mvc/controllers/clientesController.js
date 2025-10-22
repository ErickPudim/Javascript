const saudacaoModel = require('../models/saudacaoModel');

module.exports = {

// main

  clientes: (req, res) => {
    res.sendFile('clientes.html', { root: './views' });
  },

};
