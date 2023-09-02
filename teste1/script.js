let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listarTarefas")) || [];

function renderTarefa() {
  listElement.innerHTML = "";

  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefatext = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    let posicao = tarefas.indexOf(todo);

    linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

    liElement.appendChild(tarefatext);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);
  });
}

renderTarefa();

function addTarefas() {
  if (inputElement.value === "") {
    alert("digite algo");
    return false;
  } else {
    let newTarefas = inputElement.value;
    tarefas.push(newTarefas);

    inputElement.value = "";

    renderTarefa();
    salvarDados();
  }
}

function deletarTarefa(posicao) {
  tarefas.splice(posicao, 1);
  renderTarefa();
  salvarDados();
}

function salvarDados() {
  localStorage.setItem("@listarTarefas", JSON.stringify(tarefas));
}
