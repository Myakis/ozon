import renderCart from "./renderCart";
import postData from "./postData";

function cart() {
  const cartBtn = document.querySelector("#cart");
  const cartWindow = document.querySelector(".cart");
  const cartBtnClose = document.querySelector(".cart-close");
  const cartTotal = cartWindow.querySelector(".cart-total > span");
  const goodsWrapper = document.querySelector(".goods");
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartSendBtn = document.querySelector(".cart-confirm");
  //Находим значок кол-ва товаров в корзине
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
      // Меняем количество товаров в корзине при доьавление товара
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
      // Меняем количество товаров в корзине при удалении товара
      cartNumber.innerHTML = cart.length;
    }
  });

  cartSendBtn.addEventListener("click", () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    postData(cart).then(() => {
      localStorage.removeItem("cart");
      renderCart([]);
      cartTotal.innerHTML = 0;
      cartNumber.innerHTML = 0;
    });
  });

  window.onload = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    // При загрузке странице отображаем текущее количество товара в корзине
    cartNumber.innerHTML = cart.length;
  };
}
export default cart;
