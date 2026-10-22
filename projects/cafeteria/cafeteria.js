const contadorCarrinho = document.getElementById('contador');
const botoesAdicionarCarrinho = document.querySelectorAll('.add-carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');



let carrinho = [];


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
    const precoConvertido = Number(
        precoTexto
            .replace("R$", "")
            .trim()
            .replace(',', '.')
    );
    return precoConvertido;
}

function atualizarCarrinho() {

    listaCarrinho.innerHTML = '';

    salvarCarrinho();

    if (carrinho.length === 0) {
        const mensagemVazio = document.createElement('p');

        mensagemVazio.textContent = 'Seu Carrinho está vazio';

        listaCarrinho.appendChild(mensagemVazio);

        contadorCarrinho.textContent = 0;

        return;
    }




    let totalCarrinho = 0;

    carrinho.forEach(function (item) {

        const subtotalItem = item.precoNumero * item.quantidade;


        totalCarrinho += subtotalItem;

        const infoCarrinho = document.createElement('div');

        infoCarrinho.classList.add('info-carrinho');

        const controlesCarrinho = document.createElement('div');

        controlesCarrinho.classList.add('controles-carrinho');

        const subtotalCarrinho = document.createElement('p');

        subtotalCarrinho.textContent = `Subtotal: R$ ${subtotalItem.toFixed(2).replace(".", ",")}`;

        const quantidadeCarrinho = document.createElement('p');

        quantidadeCarrinho.textContent = `Quantidade: ${item.quantidade}`;

        const nomeCarrinho = document.createElement('h3');

        nomeCarrinho.textContent = item.nome;

        const precoCarrinho = document.createElement('p');

        precoCarrinho.textContent = item.preco;

        const produtoCarrinho = document.createElement('div');

        produtoCarrinho.classList.add('produto-carrinho');

        const botaoDiminuir = document.createElement('button');
        botaoDiminuir.textContent = '-';

        botaoDiminuir.addEventListener('click', function () {

            if (item.quantidade > 1) {
                item.quantidade--;
            } else {
                carrinho = carrinho.filter(function (produtoNoCarrinho) {
                    return produtoNoCarrinho.nome !== item.nome;
                });
            }
            atualizarCarrinho();


        });

        const botaoAumentar = document.createElement('button');
        botaoAumentar.textContent = '+';

        botaoAumentar.addEventListener('click', function () {

            item.quantidade++
            atualizarCarrinho();


        });



        const botaoRemover = document.createElement('button');



        botaoRemover.textContent = `Remover`;

        botaoRemover.classList.add('botao-remover');

        botaoRemover.addEventListener('click', function () {


            carrinho = carrinho.filter(function (produtoNoCarrinho) {
                return produtoNoCarrinho.nome !== item.nome;



            });
            atualizarCarrinho();
            salvarCarrinho();
        });


        infoCarrinho.appendChild(nomeCarrinho);
        infoCarrinho.appendChild(precoCarrinho);
        infoCarrinho.appendChild(quantidadeCarrinho);
        infoCarrinho.appendChild(subtotalCarrinho);

        controlesCarrinho.appendChild(botaoDiminuir);
        controlesCarrinho.appendChild(botaoAumentar);
        controlesCarrinho.appendChild(botaoRemover);

        produtoCarrinho.appendChild(infoCarrinho);
        produtoCarrinho.appendChild(controlesCarrinho);

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

function salvarCarrinho() {
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );
}

function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
    };
}

carregarCarrinho();
atualizarCarrinho();