module.exports = {
  gerarMensagemPersonalizada: (nome, idade, genero) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto(a)";
    } else {
      faixaEtaria = "idoso(a)";
    }

    return `Olá, ${nome}! seu genêro é ${genero}, e Você é um(a) ${faixaEtaria}.`;
  }
};
