const prompt = require("prompt-sync")({ sigint: true });

var listaDeCompras = [];
var continuar = true;

while (continuar) {
    var item = prompt("Digite um item para adicionar à lista de compras:");
    listaDeCompras.push(item);

    var resposta = prompt("Deseja adicionar mais itens à lista de compras? (S/N)");
    if (resposta.toLowerCase() === "n") {
        continuar = false;
    }
}

console.log("Lista de compras:");
for (var i = 0; i < listaDeCompras.length; i++) {
    console.log(i + "- " + listaDeCompras[i]);
}

var excluiritem = prompt("Gostaria de excluir algum item da lista? (S ou N)");

if (excluiritem.toLowerCase() === "s") {
    var excluir = prompt("Digite o nome do item que deseja excluir:");
    var removedor = listaDeCompras.indexOf(excluir);

    if (removedor != -1) {
        listaDeCompras.splice(removedor, 1);
        console.log("Item removido com sucesso!");
    } else {
        console.log("Item não encontrado!");
    }
}

console.log("Lista de compras atualizada: ");
console.log(listaDeCompras.join("\n"));