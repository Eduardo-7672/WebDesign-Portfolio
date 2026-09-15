const nomeHospede = "Ana";
const valorDiaria = 180;
const noites = 5;
const temDesconto = noites >= 5;
const fatorDesconto = temDesconto ? 0.9 : 1;
const fatorReserva = valorDiaria * noites * fatorDesconto;
console.log(totalReserva);
document.getElementById("resultado").textContent = `Reserva de ${nomeHospede}: ${noites} noites - total R$ ${totalReserva.toFixed(2)}`;