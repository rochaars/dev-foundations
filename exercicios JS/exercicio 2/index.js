const produto = {
    nome: "controle",
    preco: 69.90,
    estoque: 2,
    promocao: false,
};

if (!produto.estoque){
    console.log("produto indisponivel");
}else if(produto.estoque > 0 && produto.promocao){
    console.log("Produto em promoção");
}else {
    console.log("Produto Disponivel");
}




// const cliente = {

// nome: "Anderson",
// idade: 18,
// cidade: "São Paulo",
// profissão: "Programador",
// ativo: true,
// cadastro: "Premium",

// };

// if (!cliente.ativo) {
//     console.log("Cliente inativo");

// } else if (cliente.idade < 18 ){
//     console.log("Acesso negado");

// }else if (cliente.cadastro === "Premium"){
//     console.log("Acesso completo");
// }else {
//     console.log("Acesso básico");
// }


// exercicio 2 / se cliente tem cadastro Premium ou Basico ou acesso negado. (adicionado outra propriedade (cadastro))


// if (cliente.idade >= 18 && cliente.cadastro === "Premium"){
//     console.log("Acesso completo");

// }else if (cliente.idade >= 18 && cliente.cadastro === "Básico" ){
//     console.log("Acesso básico");

// }else {
//     console.log("Acesso negado");
// }   




// exercicio 1 / se cliente é menor idade ou maior de idade ou idoso


// if (cliente.idade < 18) {
//     console.log("Cliente menor de idade");

// }else if (cliente.idade >= 18 && cliente.idade <= 59) {
//     console.log("Cliente adulto");

// }else  {
//     console.log("Cliente idoso");
// }




