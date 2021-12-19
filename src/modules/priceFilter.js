import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilterFormTo } from "./filters";

function priceFilter() {
  const priceFrom = document.querySelector("#min");
  const priceTo = document.querySelector("#max");

  priceFrom.addEventListener("input", (event) => {
    const value1 = priceFrom.value;
    const value2 = priceTo.value;
    getData().then((data) => {
      renderGoods(priceFilterFormTo(data, value1, value2));
    });
  });
  priceTo.addEventListener("input", (event) => {
    const value1 = priceFrom.value;
    const value2 = priceTo.value;
    getData().then((data) => {
      renderGoods(priceFilterFormTo(data, value1, value2));
    });
  });
}

export default priceFilter;
