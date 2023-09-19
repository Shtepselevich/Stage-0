const player = document.querySelector(".player-wrapper"),
  playBtn = document.querySelector(".play"),
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  audio = document.querySelector(".audio"),
  progressContainer = document.querySelector(".progress-wrapper"),
  progress = document.querySelector(".progress"),
  title = document.querySelector(".song"),
  cover = document.querySelector(".song-cover"),
  imgSrc = document.querySelector(".img-src");
// Названия песен
const songs = [
  "2H Company - Адекватно",
  "Владимир Пресняков - Бублички",
  "Владимир Высоцкий - Моя Цыганская",
  "Псой Короленко - Ябнутый",
];
// Трек по умолчанию
let songIndex = 1;

// Init
function loadSong(song) {
  title.innerHTML = song;
  audio.src = `audio/${song}.mp3`;
  cover.src = `img/cover${songIndex + 1}.jpg`;
}
loadSong(songs[songIndex]);

//Play
function playSong() {
  player.classList.add("play");
  cover.classList.add("active");
  imgSrc.src = "./img/pause.svg";
  audio.play();
}

//Pause
function pauseSong() {
  player.classList.remove("play");
  cover.classList.remove("active");
  imgSrc.src = "./img/play.svg";
  audio.pause();
}

playBtn.addEventListener("click", () => {
  const isPlaying = player.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//Next Song

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  // Проверяем состояние проигрывателя
  if (player.classList.contains("play")) {
    playSong();
  }
}
nextBtn.addEventListener("click", nextSong);

//Prev Song

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  if (player.classList.contains("play")) {
    playSong();
  }
}

prevBtn.addEventListener("click", prevSong);

//Progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
audio.addEventListener("timeupdate", updateProgress);

//Set progress
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
progressContainer.addEventListener("click", setProgress);

//Auto play
audio.addEventListener("ended", nextSong);

//Ползунок
const progressWrapper = document.querySelector(".progress-wrapper");
const progressSlider = document.querySelector(".progress");
const customSlider = document.querySelector(".custom-slider");

progressWrapper.addEventListener("click", (e) => {
  const clickX = e.clientX - progressWrapper.getBoundingClientRect().left;
  const progressWidth = (clickX / progressWrapper.offsetWidth) * 100;

  // Установите ширину прогресса и положение кастомного ползунка
  progressSlider.style.width = `${progressWidth}%`;
  customSlider.style.left = `${progressWidth}%`;

  // Вычислите время для перемотки и установите его
  const duration = audio.duration;
  audio.currentTime = (progressWidth / 100) * duration;
});
