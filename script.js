let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefa() {
  listElement.innerHTML = "";

  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefatext = document.createTextNode(todo);

    liElement.appendChild(tarefatext);
    listElement.appendChild(liElement);
  });
}

function addTarefas() {
  if (inputElement.value === "") {
    alert("digite algo");
    return false;
  } else {
    let newTarefas = inputElement.value;
    tarefas.push(newTarefas);

    inputElement.value = "";

    renderTarefa();
  }
}
