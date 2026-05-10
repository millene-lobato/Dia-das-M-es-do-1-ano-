const envelope = document.querySelector(".envelope");

const musica = document.getElementById("musica");

const botao = document.getElementById("playMusic");

const slides = document.getElementById("slides");

const bolinhas =
  document.querySelectorAll(".bolinha");

let tocando = false;

let intervaloCoracoes;

/* =========================
   ABRIR CARTA
========================= */

function abrirCarta() {

  envelope.classList.toggle("aberto");

  // SE ABRIR
  if (envelope.classList.contains("aberto")) {

    intervaloCoracoes =
      setInterval(criarCoracao, 300);

  }

  // SE FECHAR
  else {

    clearInterval(intervaloCoracoes);
  }
}

/* =========================
   PLAY / PAUSE MÚSICA
========================= */

botao.addEventListener("click", () => {

  if (tocando) {

    musica.pause();

    botao.innerHTML =
      "▶ Tocar música";
  }

  else {

    musica.play();

    botao.innerHTML =
      "⏸ Pausar música";
  }

  tocando = !tocando;
});

/* =========================
   CORAÇÕES
========================= */

function criarCoracao() {

  const heart =
    document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💖";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {

    heart.remove();

  }, 5000);
}

/* =========================
   CARROSSEL
========================= */

let index = 0;

let startX = 0;

let endX = 0;

/* TOQUE COMEÇA */
slides.addEventListener("touchstart", (e) => {

  startX =
    e.touches[0].clientX;
});

/* TOQUE TERMINA */
slides.addEventListener("touchend", (e) => {

  endX =
    e.changedTouches[0].clientX;

  trocarSlide();
});

/* TROCAR FOTO */
function trocarSlide() {

  // ESQUERDA
  if (startX - endX > 50) {

    if (index < 2) {

      index++;
    }
  }

  // DIREITA
  else if (endX - startX > 50) {

    if (index > 0) {

      index--;
    }
  }

  slides.style.transform =
    `translateX(-${index * 100}%)`;

  atualizarIndicador();
}

/* =========================
   INDICADOR
========================= */

function atualizarIndicador() {

  bolinhas.forEach((bolinha) => {

    bolinha.classList.remove("ativa");
  });

  bolinhas[index]
    .classList.add("ativa");
}