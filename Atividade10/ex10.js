// Obtém o botão de abrir modal
var openModalBtn = document.getElementById("openModalBtn");

// Obtém o modal
var modal = document.getElementById("modal");

// Obtém o botão de fechar do modal
var closeModalBtn = document.getElementById("closeModalBtn");

// Define um evento de clique para abrir o modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Define um evento de clique para fechar o modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
