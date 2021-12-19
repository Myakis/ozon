import getData from "./getData";
import renderGoods from "./renderGoods";
import { seacrhFilter } from "./filters";

function search() {
  const searchStr = document.querySelector(".search-wrapper_input");
  searchStr.addEventListener("input", (event) => {
    const value = event.target.value;
    getData().then((data) => {
      renderGoods(seacrhFilter(data, value));
    });
  });
}

export default search;
