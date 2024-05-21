/*
    46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
    com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
    de vendas por vendedor.
*/

function sumarizarVendas(vendas) {
    let resumoVendas = {};

    vendas.forEach(function(venda) {
        if (resumoVendas[venda.vendedor]) {
            resumoVendas[venda.vendedor] += venda.valor;
        } else {
            resumoVendas[venda.vendedor] = venda.valor;
        }
    });

    return resumoVendas;
}

let vendas = [
    { vendedor: "João", valor: 100 },
    { vendedor: "Maria", valor: 150 },
    { vendedor: "João", valor: 200 },
    { vendedor: "Pedro", valor: 120 },
    { vendedor: "Maria", valor: 180 }
];

let resumo = sumarizarVendas(vendas);

console.log("Resumo de vendas por vendedor:", resumo);
