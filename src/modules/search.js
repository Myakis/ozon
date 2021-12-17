function search() {
  const searchBtn = document.querySelector(".search-btn");
  const searchStr = document.querySelector(".search-wrapper_input");

  searchBtn.addEventListener("click", () => {
    console.log(searchStr.value);
    searchStr.value = "";
  });
}
export default search;
