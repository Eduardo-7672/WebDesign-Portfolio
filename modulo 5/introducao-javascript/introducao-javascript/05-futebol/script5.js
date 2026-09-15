const pontos = 40;
const saldoDeGols = 5;
const venceuUltimojogo = true;
const classificado = pontos >=35 && (saldoDeGols > 0 || venceuUltimoJogo);
console.log(classificado);
document.getElementById("resultado").textcontent = `time classificado para a próxima fase? $(classificado)`;

