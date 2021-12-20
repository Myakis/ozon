function renderCart(goods) {
  const cardWrapper = document.querySelector(".cart-wrapper");
  cardWrapper.innerHTML = "";

  // localStorage.setItem("goods", JSON.stringify(goods));

  if (goods.length === 0) {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div id="cart-empty">
      Ваша корзина пока пуста
    </div>
    `
    );
  } else {
    goods.forEach((goodItem) => {
      cardWrapper.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card" data-key="${goodItem.id}">
          ${goodItem.sale ? `<div class="card-sale">🔥Hot Sale🔥</div>` : ""}
          <div class="card-img-wrapper">
            <span
              class="card-img-top"
              style="
                background-image: url('${goodItem.img}');
              "
            ></span>
          </div>
          <div class="card-body justify-content-between">
            <div class="card-price">${goodItem.price}  ₽</div>
            <h5 class="card-title">
              ${goodItem.title} 
            </h5>
            <button class="btn btn-primary">В корзину</button>
          </div>
  </div>
`
      );
    });
  }
}
export default renderCart;
