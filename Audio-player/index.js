console.log(
  "1. Вёрстка +10\nвёрстка аудиоплеера: есть кнопка Play/Pause, кнопки 'Вперёд' и 'Назад' для пролистывания аудиотреков, прогресс-бар, отображается название и автор трека +5\nв футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n2. Кнопка Play/Pause +10\nесть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание аудиотрека +5\nвнешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент аудиотрек +5\n3. При кликах по кнопкам 'Вперёд' и 'Назад' переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый +10\n4. При смене аудиотрека меняется изображение - обложка аудиотрека +10\n5. Прогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека +10\n6. Отображается продолжительность аудиотрека и его текущее время проигрывания +10\n7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10"
);
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

const progressSlider = document.querySelector(".progress-slider");
progressSlider.value = 0;

// Добавьте обработчик события loadedmetadata для установки общей длительности при загрузке аудио
audio.addEventListener("loadedmetadata", function () {
  const durationText = formatTime(audio.duration);
  document.querySelector(".time-duration").textContent = durationText;
});

//Progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  // Обновляем положение ползунка
  progressSlider.value = progressPercent;
  // Обновляем текст общей длительности и текущего времени
  const durationText = formatTime(duration);
  const currentTimeText = formatTime(currentTime);
  document.querySelector(".time-duration").textContent = durationText;
  document.querySelector(".time-current").textContent = currentTimeText;
  audio.onloadedmetadata = function () {
    progressSlider.value = "0";
  };
}

// Создайте функцию для форматирования времени
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

audio.addEventListener("timeupdate", updateProgress);

//Set progress
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// При изменении положения ползунка, изменяем позицию воспроизведения
progressSlider.addEventListener("input", function () {
  const progressPercent = this.value;
  const duration = audio.duration;
  audio.currentTime = (progressPercent / 100) * duration;
});

//Auto play
audio.addEventListener("ended", nextSong);
