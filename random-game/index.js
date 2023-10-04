window.addEventListener("load", function () {
  let countUser = document.querySelector(".count-user");
  let countComp = document.querySelector(".count-comp");
  let userField = document.querySelector(".user-field");
  let compField = document.querySelector(".comp-field");
  let sound = document.querySelector(".sound");
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
  }
  function winner(e) {}
  function playGame() {}

  play.addEventListener("click", playGame);
  userField.addEventListener("click", choiceUser);
});
