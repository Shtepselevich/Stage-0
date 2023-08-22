document.querySelectorAll(".favorites-radio__input").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");

    document
      .querySelectorAll(".favorites-radio__input")
      .forEach((child) =>
        child.classList.remove("favorites-radio__input-active")
      );
    document
      .querySelectorAll(".favorites-season")
      .forEach((child) => child.classList.remove("favorites-season-active"));
    item.classList.add("favorites-radio__input-active");
    document.getElementById(id).classList.add("favorites-radio__input-active");
  })
);
