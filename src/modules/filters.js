export function seacrhFilter(goods, value) {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toUpperCase().includes(value.toUpperCase());
  });
}
export function categoryFilter(goods, value) {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
}

//Поиск по цене через фильтр
export function priceFilterFormTo(goods, value1 = 0, value2 = 99999999999) {
  if (value1.length === 0) {
    value1 = 0;
  }
  if (value2.length === 0) {
    value2 = Infinity;
  }
  return goods.filter((goodsItem) => {
    return goodsItem.price > value1 && goodsItem.price < value2;
  });
}
export function hotSaleFilter(goods, value) {
  return goods.filter((goodsItem) => {
    if (value) {
      return goodsItem.sale === true;
    } else {
      return goodsItem;
    }
  });
}
