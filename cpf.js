function gerarCpfValido() {
  const random = () => Math.floor(Math.random() * 9);
  const calcDigito = (cpf) => {
    let soma = 0;
    let peso = cpf.length + 1;
    for (let i = 0; i < cpf.length; i++) {
      soma += cpf[i] * peso--;
    }
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  let cpf = Array.from({ length: 9 }, random);
  cpf.push(calcDigito(cpf));
  cpf.push(calcDigito(cpf));
  return cpf.join('');
}

export default function handler(req, res) {
  const cpf = gerarCpfValido();
  res.status(200).json({ CpfCnpj: cpf });
}
