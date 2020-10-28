const formatter = Intl.NumberFormat('pt-BR');

function formatNumber(value) {
  return formatter.format(value);
}

function formatToBrl(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export { formatNumber, formatToBrl };
