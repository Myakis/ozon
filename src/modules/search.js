function search() {
  //Создаем константы
  const searchBtn = document.querySelector(".search-btn");
  const searchStr = document.querySelector(".search-wrapper_input");

  //Выводим в консоль значение input при клики на кпопку поиска
  searchBtn.addEventListener("click", () => {
    console.log(searchStr.value);
    searchStr.value = "";
  });

  //Все тоже самое, но при нажатии клавиши enter
  window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      console.log(searchStr.value);
      searchStr.value = "";
    }
  });
  //
}

export default search;
