const formulario = document.querySelector("#formProduto");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const preco = document.querySelector("#preco").value.trim();
    const categoria = document.querySelector("#categoria").value.trim();

    //console.log(nome + " " + preco + " " + categoria)

    mensagem.classList.remove("erro", "sucesso");

    if(nome === "" || preco === "" || categoria === "") {
        mensagem.textContent = "ERRO: preencha todos os campos!";
        mensagem.classList.add("erro");
        return;
    }

    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    const proximoId = Number(localStorage.getItem("proximoId")) || 1;

    const novoProduto = {
        id: proximoId,
        nome: nome,
        preco: Number(preco),
        categoria: categoria
    }

    produtosSalvos.push(novoProduto);

    localStorage.setItem("produtos", JSON.stringify(produtosSalvos));

    localStorage.setItem("proximoId", proximoId + 1);

    mensagem.textContent = "sucesso! O produto " + nome + " foi cadastrado com sucesso";
    mensagem.classList.add("sucesso");

    formulario.reset();
});