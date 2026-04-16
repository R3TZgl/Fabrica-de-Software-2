function adicionarTarefa() {
    const input = document.getElementById("tarefa");
    const valor = input.value;

    if (valor.trim() === "") return;

    const item = document.createElement("li");
    item.textContent = valor;

    item.addEventListener("click", function () {
        item.classList.toggle("done");
    });

    document.getElementById("lista").appendChild(item);

    input.value = "";
    input.focus();
}