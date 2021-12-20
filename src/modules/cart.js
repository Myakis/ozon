import renderCart from "./renderCart";

function cart() {
  const cartBtn = document.querySelector("#cart");
  const cartWindow = document.querySelector(".cart");
  const cartBtnClose = document.querySelector(".cart-close");
  const goodsWrapper = document.querySelector(".goods");

  cartBtn.addEventListener("click", (event) => {
    // event.preventDefault();
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    changeStyleDisplayElement(cartWindow, "flex");
    renderCart(cart);
  });

  cartBtnClose.addEventListener("click", () => {
    changeStyleDisplayElement(cartWindow, "");
  });

  function changeStyleDisplayElement(element, paramDisplay) {
    element.style.display = paramDisplay;
  }

  goodsWrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
      const card = event.target.closest(".card");
      const key = card.dataset.key;
      const goods = JSON.parse(localStorage.getItem("goods"));
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      const goodItem = goods.find((item) => {
        return item.id === +key;
      });
      cart.push(goodItem);
      localStorage.setItem("cart", JSON.stringify(cart));

      console.log(cart.length);
    }
  });
}
export default cart;
