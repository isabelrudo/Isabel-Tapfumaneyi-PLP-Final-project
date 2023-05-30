const addToCartBtns = document.querySelectorAll(".btn");

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});

