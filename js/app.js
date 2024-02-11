const wrapper = document.querySelector(".wrapper");
const shoes = document.querySelectorAll(".shoes-type");
const buyPage = document.querySelector(".buy-page");
const productBtn = document.querySelector(".product-btn");
const close = document.querySelector(".close");
const submit = document.querySelector(".submit");
const form = document.querySelector("#form");
const products = [
   {
      id: 1,
      title: "Air force",
      price: "199",
      img: "./img/shoes4.png",
   },
   {
      id: 2,
      title: "Jordan",
      price: "299",
      img: "./img/shoes1.png",
   },
   {
      id: 3,
      title: "Blazer",
      price: "149",
      img: "./img/shoes2.png",
   },
   {
      id: 4,
      title: "Crater",
      price: "119",
      img: "./img/shoes3.png",
   },
   {
      id: 5,
      title: "Hippie",
      price: "249",
      img: "./img/shoes5.png",
   },
];

let currentProduct = products[0];
console.log(currentProduct);
const currentImage = document.querySelector(".product-img");
const currentTitle = document.querySelector(".product-title");
const currentPrice = document.querySelector(".product-price");
const currentSize = document.querySelectorAll(".size");

shoes.forEach((elem, index) => {
   elem.addEventListener("click", () => {
      console.log(`translateX(${index * -100})`);
      wrapper.style.transform = `translateX(${index * -100}vw)`;
      elem.style.borderBottom = "white";
      // choosen product
      currentProduct = products[index];

      // title
      currentTitle.textContent = currentProduct.title;
      // price
      currentPrice.textContent = `$${currentProduct.price}`;
      // img
      currentImage.src = currentProduct.img;
   });
});

currentSize.forEach((elem, index) => {
   elem.addEventListener("click", () => {
      currentSize.forEach((elem) => {
         elem.style.color = "black";
         elem.style.backgroundColor = "white";
      });
      elem.style.color = "white";
      elem.style.backgroundColor = "black";
   });
});

productBtn.addEventListener("click", () => {
   console.log("Hello");
   buyPage.style.display = "flex";
});

close.addEventListener("click", () => {
   buyPage.style.display = "none";
});

form.addEventListener("submit", (e) => {
   e.preventDefault();
   buyPage.style.display = "none";
   alert("Ordered is placed. Thank You");
});
