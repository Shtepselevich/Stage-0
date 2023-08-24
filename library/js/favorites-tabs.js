// Получаем все радиокнопки
const radioButtons = document.querySelectorAll(".favorites-radio__input");

// Получаем все блоки с сезонами
const seasonBlocks = document.querySelectorAll(".favorites-season");

// Добавляем обработчик события для каждой радиокнопки
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", function () {
    // Получаем значение выбранной радиокнопки
    const selectedSeason = this.value;

    // Скрываем все блоки с сезонами
    seasonBlocks.forEach((block) => {
      block.style.display = "none";
    });

    // Отображаем блок с сезоном, соответствующим выбранной радиокнопке
    const selectedBlock = document.querySelector(
      `.favorites-${selectedSeason}`
    );
    if (selectedBlock) {
      selectedBlock.style.display = "flex";
    }
  });
});
