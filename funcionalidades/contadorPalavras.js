function contarPalavras(texto) {
  const palavras = texto.trim().split(/\s+/);
  return palavras.length;
}

console.log("Total de palavras:", contarPalavras("Olá, tudo bem com você?"));
