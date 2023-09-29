const input = document.getElementById("input");
const images = document.querySelector(".images");
const search = document.querySelector(".search-icon__find");
const clean = document.querySelector(".search-icon__clean");

document.addEventListener("DOMContentLoaded", function () {
  loadRandomImages();
});

// Функция для загрузки 9 рандомных изображений
async function loadRandomImages() {
  const randomApiUrl =
    "https://api.unsplash.com/photos/random?count=24&client_id=1cfzsA17tpQI4OFEMGIxvNDbeP5uYoLRsYrN5sOMhxQ";

  fetch(randomApiUrl)
    .then((response) => {
      if (response.ok) return response.json();
      else alert(response.status);
    })
    .then((data) => {
      const imageUnits = [];
      for (let i = 0; i < data.length; i++) {
        imageUnits[i] = document.createElement("div");
        imageUnits[i].className = "img";
        imageUnits[i].style.backgroundImage =
          "url(" + data[i].urls.regular + ")";
        imageUnits[i].addEventListener("dblclick", function () {
          window.open(data[i].links.download, "_blank");
        });
        images.appendChild(imageUnits[i]);
      }
    });
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") loadImg();
});

search.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    loadImg();
  }
});

clean.addEventListener("click", function () {
  input.value = "";
  input.focus();
});

async function loadImg() {
  removeImages();

  const apiUrl =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=24&client_id=1cfzsA17tpQI4OFEMGIxvNDbeP5uYoLRsYrN5sOMhxQ";

  fetch(apiUrl)
    .then((response) => {
      if (response.ok) return response.json();
      else alert(response.status);
    })

    .then((data) => {
      const imageUnits = [];
      for (let i = 0; i < data.results.length; i++) {
        imageUnits[i] = document.createElement("div");
        imageUnits[i].className = "img";
        imageUnits[i].style.backgroundImage =
          "url(" + data.results[i].urls.regular + ")";
        imageUnits[i].addEventListener("dblclick", function () {
          window.open(data.results[i].links.download, "_blank");
        });
        images.appendChild(imageUnits[i]);
      }
    });
}
async function removeImages() {
  images.innerHTML = "";
}
