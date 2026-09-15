const nomeDoce = "Brigadeiro Gourmet"; //string (texto)
const preço = 4.5; //number (número)
const disponivel = true; //boolean
console.log(nomeDoce, precoUnitario, disponivel);
document.getElementById("resultado").textContent = `${nomeDoce} custa R$ ${precoUnitario.toFixed(2)} - disponivel: ${disponivel}`;