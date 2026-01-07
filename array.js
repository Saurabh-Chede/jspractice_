// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM is ready');
// });

// window.addEventListener('scroll', ()=>{
//     console.log(window.scrollY)
// })
// const textDiv = document.querySelectorAll('.hero div');
// const TEXT_TWO = document.querySelector('.text_two')

// // textDiv.addEventListener('click', () => {
// //   console.log("clicked");
// // });

// // TEXT_TWO.addEventListener('click',()=>{
// //     console.log('clicked two')
// // })

// textDiv.forEach( (div) => {

//     div.addEventListener('click', ()=>{
//         console.log(div.className,'clicked')
//     })

// });

// ------------------------------------------------------

// loops

// for loop

// for (let i = 0; i <= 10; i++) {
//   //   console.log(i);
// }

// let i = 5;

// while (i >= 1) {
//   //   console.log(i);
//   i--;
// }

// const Eventer = () => {
//   //   console.log("event delegation");
// };

// Eventer();

// const Google = function () {
//   //   console.log(`google.com connected`);
// };

// Google();

// const ArrayCount = function (n) {
//   let emptyARR = [];
//   for (let i = 0; i <= n; i++) {
//     emptyARR.push(i);
//   }
//   return emptyARR;
// };

// console.log(ArrayCount(30));

// pushing elements in object

// const OBJCountJ = function (n) {
//   let emptyARR = [];
//   for (let i = 0; i <= n; i++) {
//     emptyARR[i] = i;
//   }
//   return emptyARR;
// };

// console.log(OBJCountJ(30));

const HERO = document.querySelector(".hero");

HERO.addEventListener("click", (e) => {
  
  const card = e.target.closest('.card')

  const product = {
    id: card.dataset.id,
    title: card.querySelector("h3").innerText,
    price: card.querySelector("p").innerText,
  };
  
  console.log(product);
  
  if(card){
    console.log(`clicked`)
    console.log(card.querySelector('h3').innerText)
  }
});

let productsArray = [];

async function OMINIRips() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=10`);
    const data = await response.json();

    HERO.innerHTML = data.map(
      (product) => `
      <div class='card'>
      <img src="${product.image}" width="100" />
      <h3>${product.title}</h3>
      <p>₹ ${product.price}</p>
      </div>
      `
    ).join('');
  } catch (err) {
    console.log(err);
  }
}

OMINIRips();
