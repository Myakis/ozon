function getData(str) {
  return fetch(
    `https://ozontest-f5959-default-rtdb.firebaseio.com/goods.json`
  ).then((response) => {
    return response.json();
  });
}

export default getData;
