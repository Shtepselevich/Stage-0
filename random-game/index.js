window.addEventListener("load", function () {
  let countUser = document.querySelector(".count-user");
  let countComp = document.querySelector(".count-comp");
  let userField = document.querySelector(".user-field");
  let compField = document.querySelector(".comp-field");
  let sound = document.querySelector(".sound");
  let res = document.querySelector(".results");
  let play = document.querySelector(".play");
  let fields = document.querySelectorAll(".field");
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
    if (target.classList.contains("field")) {
      userStep = target.dataset.field;
      fields.forEach((item) => item.classList.remove("active", "error"));
      target.classList.add("active");
      choiceComp();
    }
  }
  function choiceComp(e) {
    blocked = true;
    let rand = Math.floor(Math.random() * 3);
    compField.classList.add("blink");
    let compFields = compField.querySelectorAll(".field");
    setTimeout(() => {
      compField.classList.remove("blink");
      compStep = compFields[rand].dataset.field;
      compFields[rand].classList.add("active");
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
        countUser.innerText = countU;
        compField
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
        countComp.innerText = countC;
        userField
          .querySelector("[data-field=" + userStep + "]")
          .classList.add("error");
        break;
    }
  }
  function playGame() {
    countU = countC = 0;
    res.innerText = "Make Choise!";
    countUser.innerText = "0";
    countComp.innerText = "0";
    fields.forEach((item) => item.classList.remove("active", "error"));
  }

  play.addEventListener("click", playGame);
  userField.addEventListener("click", choiceUser);
});
