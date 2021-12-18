import getData from "./getData";
import postData from "./postData";

function second() {
  const cartBtn = document.querySelector("#cart");
  // cartBtn.addEventListener("click", () => {
  //   postData().then((data) => {
  //     console.log(data);
  //   });
  // });

  getData().then((data) => {
    console.log(data);
  });
}

export default second;
