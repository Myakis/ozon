import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilterFormTo, hotSaleFilter } from "./filters";

function priceFilter() {
  const priceFrom = document.querySelector("#min");
  const priceTo = document.querySelector("#max");
  const checkboxInput = document.querySelector("#discount-checkbox");
  const checkboxSpan = document.querySelector(".filter-check_checkmark");
  // Сортировка от минимальной цены
  priceFrom.addEventListener("input", (event) => {
    const value1 = priceFrom.value;
    const value2 = priceTo.value;
    getData().then((data) => {
      renderGoods(
        priceFilterFormTo(
          hotSaleFilter(data, checkboxInput.checked),
          value1,
          value2
        )
      );
    });
  });
  // Сортировка до максимальной цены
  priceTo.addEventListener("input", (event) => {
    const value1 = priceFrom.value;
    const value2 = priceTo.value;
    getData().then((data) => {
      renderGoods(
        priceFilterFormTo(
          hotSaleFilter(data, checkboxInput.checked),
          value1,
          value2
        )
      );
    });
  });
  //Сортировка по Sale
  checkboxInput.addEventListener("change", () => {
    checkboxSpan.classList.toggle("checked");
    getData().then((data) => {
      renderGoods(
        priceFilterFormTo(
          hotSaleFilter(data, checkboxInput.checked),
          priceFrom.value,
          priceTo.value
        )
      );
    });
  });
}

export default priceFilter;
