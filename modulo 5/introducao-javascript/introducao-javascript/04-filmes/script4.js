const tituloFilme = "Aventura Espacial";
const classificacaoMinima = 12;
const idadeEspectador = 14;

const podeAssistir = idadeEspectador >= classificacaoMinima;

console.log(podeAssistir);

document.getElementById("resultado").textContent =
  `${tituloFilme} - Classificação: ${classificacaoMinima} anos - Idade: ${idadeEspectador} - Pode assistir: ${podeAssistir}`;