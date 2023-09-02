// function number(num) {
//   if (num < 0) {
//     return "numero negativo";
//   } else if (num == 0) {
//     return "numero igual a 0";
//   } else {
//     return "maior que zero";
//   }
// }

// console.log(number(10));

// function verifica(array, value) {
//   return array.includes(value);
// }

// const list = [1, 2, 3, 4, 5];

// console.log(verifica(list, 3));
// console.log(verifica(list, 10));

const products = [
  { name: "Maça", price: 2.5 },
  { name: "Coca cola", price: 8 },
  { name: "Guarana", price: 5 },
  { name: "Chocolate", price: 20 },
];

const checar = products.find((item) => item.price === 20);
console.log(checar);

const preco = products.filter((item) => item.price < 8);
console.log(preco);
