const contadorCarrinho = document.getElementById('contador');
const botoesAdicionarCarrinho = document.querySelectorAll('.add-carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');


const carrinho = [];


botoesAdicionarCarrinho.forEach(function (botao) {

    botao.addEventListener('click', function (event) {

        event.preventDefault();





        const produto = botao.closest('.box');

        const nomeProduto = produto.querySelector('h3');

        const nome = nomeProduto.textContent;

        const precoAtual = produto.querySelector('.preco-atual');

        const preco = precoAtual.textContent;

        const precoNumero = converterPreco(preco);


        const item = {
            nome,
            preco,
            quantidade: 1,
            precoNumero,

        };



        const itemExistente = carrinho.find(function (produtoNoCarrinho) {
            return produtoNoCarrinho.nome === nome;

        });
        

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push(item);
        }
    
        atualizarCarrinho();

        
    });


});

 function converterPreco(precoTexto) {
         const precoConvertido = Number (
                precoTexto
                    .replace("R$" , "")
                    .trim()
                    .replace(',','.')
            );
         return precoConvertido;
}

function atualizarCarrinho() {

    listaCarrinho.innerHTML = '';

    let totalCarrinho = 0;

    carrinho.forEach(function (item) {

        const subtotalItem = item.precoNumero * item.quantidade;


        totalCarrinho += subtotalItem;

        const produtoCarrinho = document.createElement('div');

        produtoCarrinho.textContent = `${item.nome} | ${item.preco} | Quantidade: ${item.quantidade}`;

        listaCarrinho.appendChild(produtoCarrinho);

    });

    const quantidadeTotal = carrinho.reduce(function (acumulador, item) {
        return acumulador + item.quantidade;

    }, 0);

    contadorCarrinho.textContent = quantidadeTotal;
    

    const totalElemento = document.createElement('p');

    totalElemento.textContent = `Total: R$ ${totalCarrinho.toFixed(2).replace(".", ",")}`;


    listaCarrinho.appendChild(totalElemento);


}