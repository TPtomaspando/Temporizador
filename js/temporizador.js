let tiempoRestante = 0; // En segundos
let intervalo;

function formatearTiempo(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segs = segundos % 60;

  const horasStr = horas.toString().padStart(2, "0");
  const minutosStr = minutos.toString().padStart(2, "0");
  const segundosStr = segs.toString().padStart(2, "0");

  return `${horasStr}:${minutosStr}:${segundosStr}`;
}

function actualizarTemporizador() {
  if (tiempoRestante > 0) {
    tiempoRestante--;
    document.getElementById("temporizador").innerText =
      formatearTiempo(tiempoRestante);
  } else {
    clearInterval(intervalo);
    intervalo = null;
    alert("¡Tiempo terminado!");
  }
}

function iniciarTemporizador() {
  if (!intervalo) {
    const inputTiempo = document.getElementById("inputTiempo").value;
    if (inputTiempo && !tiempoRestante) {
      tiempoRestante = parseInt(inputTiempo, 10);
    }
    if (tiempoRestante > 0) {
      intervalo = setInterval(actualizarTemporizador, 1000); // Actualiza cada segundo
    }
  }
}

function pausarTemporizador() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetTemporizador() {
  pausarTemporizador();
  tiempoRestante = 0;
  document.getElementById("temporizador").innerText = "00:00:00";
  document.getElementById("inputTiempo").value = ""; // Limpia el campo de entrada
}

document
  .getElementById("iniciar")
  .addEventListener("click", iniciarTemporizador);
document.getElementById("pausar").addEventListener("click", pausarTemporizador);
document.getElementById("reset").addEventListener("click", resetTemporizador);
