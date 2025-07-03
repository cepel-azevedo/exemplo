function mudarCor() {
  const cores = ["#FFDDC1", "#C1FFD7", "#C1D4FF", "#F0C1FF", "#FFFAC1"];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;
}
