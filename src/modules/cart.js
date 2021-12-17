function cart() {
  const cartBtn = document.querySelector("#cart");
  const cartWindow = document.querySelector(".cart");
  const cartBtnClose = document.querySelector(".cart-close");
  cartBtn.addEventListener("click", (event) => {
    event.preventDefault();
    changeStyleDisplayElement(cartWindow, "flex");
  });

  cartBtnClose.addEventListener("click", () => {
    changeStyleDisplayElement(cartWindow, "");
  });

  function changeStyleDisplayElement(element, paramDisplay) {
    element.style.display = paramDisplay;
  }
}
export default cart;
