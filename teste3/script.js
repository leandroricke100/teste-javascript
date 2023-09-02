const produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

console.log(`Total de itens: ${produtos.length}`);

console.log(
  `Tirando o "Mouse", fica assim: ${produtos.filter((p) => p !== "Mouse")}`
);

const resultado = produtos.find((item) => {
  if (item === "Computador") {
    console.log("produto encontrado");
  } else {
    console.log("Produto nao encontrado");
  }
});

produtos.splice(1, 1);

console.log(produtos);

///////////////////////////////

const numeros = [1, 3, 5, 7, 0, 9];

console.log(numeros.sort());

//console.log(numeros.shift());
//numeros.splice(0, 1);

console.log(numeros);

console.log(numeros.reverse());

const hoje = "01.09.2023";

const [dia, mes, ano] = hoje.split(".");

console.log(`dia : ${dia}`);
console.log(`mes : ${mes}`);
console.log(`ano: ${ano}`);
