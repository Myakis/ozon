import renderCart from "./renderCart";

function cart() {
  const cartBtn = document.querySelector("#cart");
  const cartWindow = document.querySelector(".cart");
  const cartBtnClose = document.querySelector(".cart-close");
  const cartTotal = cartWindow.querySelector(".cart-total > span");
  const goodsWrapper = document.querySelector(".goods");
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartNumber = document.querySelector("#cart > span");

  cartBtn.addEventListener("click", (event) => {
    // event.preventDefault();
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    changeStyleDisplayElement(cartWindow, "flex");
    renderCart(cart);
    cartTotal.innerHTML = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
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

      cartNumber.innerHTML = cart.length;
    }
  });
  cartWrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      const card = event.target.closest(".card");
      const key = card.dataset.key;
      const index = cart.findIndex((item) => {
        return item.id === +key;
      });
      cart.splice(index, 1);
      console.log(key);

      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart(cart);
      cartTotal.innerHTML = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
      cartNumber.innerHTML = cart.length;
    }
  });
  document.onload = () => {
    cartNumber.innerHTML = cart.length;
  };
}
export default cart;
