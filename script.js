const envelope = document.querySelector(".envelope");
const musica = document.getElementById("musica");
const botao = document.getElementById("playMusic");
const video = document.getElementById("video");

let tocando = false;
let coracoesAtivos = false;

// ABRIR CARTA
let intervaloCoracoes;

function abrirCarta() {

  envelope.classList.toggle("aberto");

  // SE ABRIR A CARTA
  if (envelope.classList.contains("aberto")) {

    // inicia os corações
    intervaloCoracoes = setInterval(criarCoracao, 300);

  } else {

    // para os corações
    clearInterval(intervaloCoracoes);
  }
}

// PLAY E PAUSE DA MÚSICA
botao.addEventListener("click", () => {

  if (tocando) {

    musica.pause();
    botao.innerHTML = "▶ Tocar música";

  } else {

    musica.play();
    botao.innerHTML = "⏸ Pausar música";
  }

  tocando = !tocando;
});

// QUANDO O VÍDEO TOCAR
video.addEventListener("play", () => {

  musica.pause();

  tocando = false;

  botao.innerHTML = "▶ Tocar música";
});

// QUANDO O VÍDEO TERMINAR
video.addEventListener("ended", () => {

  musica.play();

  tocando = true;

  botao.innerHTML = "⏸ Pausar música";
});

// CRIAR CORAÇÕES
function criarCoracao() {

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}