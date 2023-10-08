window.addEventListener("load", function () {
  let userPoint = document.querySelector(".point-user");
  let cpuPoint = document.querySelector(".point-cpu");
  let userChoise = document.querySelector(".choise-user");
  let cpuChoise = document.querySelector(".choise-cpu");
  let sound = document.querySelector(".sound");
  let res = document.querySelector(".results");
  let play = document.querySelector(".play");
  let buttons = document.querySelectorAll(".button");
  let userStep;
  let compStep;
  let countU = 0;
  let countC = 0;
  blocked = false;

  function choiceUser(e) {
    if (blocked) return;
    let target = e.target;
    // Если пользователь кликнул на изображение внутри кнопки
    if (target.classList.contains("icon")) {
      target = target.parentElement; // Получаем родительскую кнопку
    }
    if (target.classList.contains("button")) {
      userStep = target.dataset.field;
      buttons.forEach((item) => item.classList.remove("active", "error"));
      target.classList.add("active");
      choiceComp();
    }
  }
  function choiceComp(e) {
    blocked = true;
    let rand = Math.floor(Math.random() * 3);
    cpuChoise.classList.add("blink");
    let cpuChoises = cpuChoise.querySelectorAll(".button");
    setTimeout(() => {
      cpuChoise.classList.remove("blink");
      compStep = cpuChoises[rand].dataset.field;
      cpuChoises[rand].classList.add("active");
      winner();
    }, 3000);
    sound.setAttribute("src", "audio/choise.mp3");
    sound.play();
  }
  function winner() {
    blocked = false;

    let comb = userStep + compStep;

    switch (comb) {
      case "rr":
      case "ss":
      case "pp":
        res.innerText = "Draw!";
        sound.setAttribute("src", "audio/organ.mp3");
        sound.play();
        break;

      case "rs":
      case "sp":
      case "pr":
        res.innerText = "You Win!";
        sound.setAttribute("src", "audio/win.mp3");
        sound.play();
        countU++;
        userPoint.innerText = countU;
        cpuChoise
          .querySelector("[data-field=" + compStep + "]")
          .classList.add("error");
        break;

      case "sr":
      case "ps":
      case "rp":
        res.innerText = "You Lose!";
        sound.setAttribute("src", "audio/lose.mp3");
        sound.play();
        countC++;
        cpuPoint.innerText = countC;
        userChoise
          .querySelector("[data-field=" + userStep + "]")
          .classList.add("error");
        break;
    }
  }
  function playGame() {
    countU = countC = 0;
    res.innerText = "Make Choise!";
    userPoint.innerText = "0";
    cpuPoint.innerText = "0";
    buttons.forEach((item) => item.classList.remove("active", "error"));
  }

  play.addEventListener("click", playGame);
  userChoise.addEventListener("click", choiceUser);

  const scoreButton = document.querySelector(".score-button");
  const scoreWrapper = document.querySelector(".score-wrapper");
  const closeButton = document.querySelector(".close-btn");

  scoreButton.addEventListener("click", function (e) {
    e.stopPropagation(); // Предотвращаем всплытие события
    scoreWrapper.classList.add("active");
  });

  closeButton.addEventListener("click", function (e) {
    e.stopPropagation(); // Предотвращаем всплытие события
    scoreWrapper.classList.remove("active");
  });

  document.addEventListener("click", function (event) {
    if (
      scoreWrapper.classList.contains("active") &&
      event.target !== scoreButton &&
      !scoreWrapper.contains(event.target)
    ) {
      scoreWrapper.classList.remove("active");
    }
  });
});
