let campoSenha = document.getElementById('senha');

let botaoMostrar = document.getElementById('toggleSenha');

botaoMostrar.addEventListener('click', function() {

  if (campoSenha.type === 'password') {
    campoSenha.type = 'text';
    botaoMostrar.textContent = 'Ocultar';
  }
  else {
    campoSenha.type = 'password';
    botaoMostrar.textContent = 'Mostrar';
  }

});
