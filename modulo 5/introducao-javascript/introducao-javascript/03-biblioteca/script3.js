let livrosDisponiveis = 10;
livrosDisponiveis -= 3; // 3 livros foram emprestados
livrosDisponiveis += 1; // 1 livro foi devolvido 

console.log(livrosDisponiveis);
document.getElementById("resultado").textContent = `Livros disponiveis na estante: ${livrosDisponiveis}`;