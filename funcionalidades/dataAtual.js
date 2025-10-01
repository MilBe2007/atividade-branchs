function dataAtual() {
  const data = new Date();
  return data.toLocaleDateString('pt-BR');
}

// Exemplo de uso:
console.log("Data de hoje:", dataAtual());
