let numeroMagico;

function comenzarJuego() {
  document.getElementById('juego').style.display = 'block';
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  alert("El juego ha comenzado!")
}

function verificarNumero() {
  const numeroIngresado = parseInt(document.getElementById('numeroInput').value);
  if (numeroIngresado === numeroMagico) {
    alert('¡Felicidades! ¡Adivinaste el número mágico!');
  } else if (numeroIngresado < numeroMagico) {
    alert('El número que ingresaste es menor al número mágico. ¡Inténtalo de nuevo!');
  } else {
    alert('El número que ingresaste es mayor al número mágico. ¡Inténtalo de nuevo!');
  }
}