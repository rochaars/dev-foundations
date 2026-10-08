const contador = document.getElementById('contador');
const botoesCarrinho = document.querySelectorAll('.add-carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');

console.log(contador);
console.log(botoesCarrinho);
console.log(listaCarrinho);

// let quantidade = 0;

const carrinho = [];


botoesCarrinho.forEach(function (botao) {

    botao.addEventListener('click', function (event) {

        event.preventDefault();

        // quantidade++;



        const produto = botao.closest('.box');

        const nomeProduto = produto.querySelector('h3');

        const nome = nomeProduto.textContent;

        const precoAtual = produto.querySelector('.preco-atual');

        const preco = precoAtual.textContent;

        const item = {
            nome: nome,
            preco: preco
        };
        carrinho.push(item);
        console.log(carrinho.length);
        atualizarCarrinho();

        contador.textContent = carrinho.length;





    });

});

function atualizarCarrinho() {
    
    carrinho.forEach(function (item) {
        const produtoCarrinho = document.createElement('div');
        produtoCarrinho.textContent = `Nome: ${item.nome} Valor: R$ ${item.preco}`;
        console.log(item.nome);
        console.log(item.preco);
        console.log(produtoCarrinho);
    });
}