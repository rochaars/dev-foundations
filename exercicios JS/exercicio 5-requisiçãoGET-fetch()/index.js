const produto = {

    nome: "Teclado Mecanico",
    preco: 499,
    estoque: 5

};

const produtoJSON = JSON.stringify(produto);

console.log(typeof produtoJSON);
console.log(typeof produto);

const produtoConvertido = JSON.parse(produtoJSON);

console.log(typeof produtoConvertido);
console.log(produtoConvertido.nome);

fetch("http://localhost:8000/produtos")
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(produtos) {
        produtos.forEach( function (produto) {
            console.log(`Nome: ${produto.nome} - Preço: R$ ${produto.preco}`);
        });
    });