let progress = 0;

function increaseProgress() {
  if (progress < 100) {
    progress += 40;
    document.getElementById("progressBar").style.width = progress + "%";
  }
}

function Reset() {
  if ((progress = 100)) {
    progress = 0;
    document.getElementById("progressBar").style.width = progress + "%";
  }
}
