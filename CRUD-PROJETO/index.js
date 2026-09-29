const listaProdutos = document.querySelector('tbody')

const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || []

produtosSalvos.forEach((produto) => {
    const linha = document.createElement("tr")

const colunaId = document.createElement("td")
colunaId.textContent = produto.id

const colunaItem = document.createElement("td")
colunaItem.textContent = produto.nome

const colunaValor = document.createElement("td")
colunaValor.textContent = "R$" + produto.preco.toFixed(2)

const colunaQuantidade = document.createElement("td")
colunaQuantidade.textContent = produto.quantidade

const colunaStatus = document.createElement ("td")
colunaStatus.textContent = produto.status

const colunaCategoria = document.createElement("td")
colunaCategoria.textContent = produto.categoria 

const colunaAcoes = document.createElement("td")
colunaAcoes.classList.add("acoes")
const botaoEditar = document.createElement("button")
botaoEditar.textContent = "Editar"
botaoEditar.classList.add("botaoEditar")

const botaoExcluir = document.createElement("button")
botaoExcluir.textContent = "Excluir"
botaoExcluir.classList.add("botaoExcluir")

colunaAcoes.append(botaoEditar, botaoExcluir)

linha.append(
    colunaId,
    colunaItem,
    colunaValor,
    colunaQuantidade,
    colunaStatus,
    colunaCategoria,
    colunaAcoes
)
listaProdutos.append(linha)

});