//Luana Aparecida Tavares
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos: Nome, E-mail e Mensagem.');
      event.preventDefault();
    }
  });