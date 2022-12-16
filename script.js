// Seleciona os elementos dos botões
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");

// Seleciona o elemento do cronômetro
const timerElement = document.querySelector("#timer");

// Variável para armazenar o intervalo do cronômetro
let interval;

// Função para iniciar o cronômetro
const startTimer = () => {
  // Define o tempo restante em segundos
  let timeLeft = parseInt(timerElement.textContent) * 60;

  // Atualiza o cronômetro a cada segundo
  interval = setInterval(() => {
    // Decrementa o tempo restante
    timeLeft--;

    // Atualiza o elemento do cronômetro com o novo tempo
    timerElement.textContent = `${Math.floor(timeLeft / 60)}:${
      timeLeft % 60
    }`.padStart(5, "0");

    // Se o tempo acabou, para o cronômetro e toca um som
    if (timeLeft === 0) {
      clearInterval(interval);
      const audio = new Audio("sound.mp3");
      audio.play();
    }
  }, 1000);
};

// Adiciona um evento de clique no botão de início
startButton.addEventListener("click", startTimer);

// Adiciona um evento de clique no botão de pausa
pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});

// Adiciona um evento de clique no botão de reset
resetButton.addEventListener("click", () => {
  clearInterval(interval);
  timerElement.textContent = "25:00";
});
