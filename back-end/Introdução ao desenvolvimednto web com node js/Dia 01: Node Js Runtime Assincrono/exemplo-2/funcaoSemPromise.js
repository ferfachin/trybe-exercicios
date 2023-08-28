function calcularDivisao(num1, num2) {
  if (num1 == 0) throw new Error('Não pode ser feito uma divisão por zero');

  const resultado = num1 / num2;

  return resultado;
}