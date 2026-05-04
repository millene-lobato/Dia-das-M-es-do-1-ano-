function abrirCarta() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.toggle("aberto");
}

document.getElementById("playMusic").addEventListener("click", function() {
  document.getElementById("musica").play();
});