/*
    49. Você recebe um array de objetos representando transações financeiras. Cada
    transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
    onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
    essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function agruparTransacoesPorCategoria(transacoes) {
    let transacoesPorCategoria = {};

    transacoes.forEach(function(transacao) {
        if (transacoesPorCategoria[transacao.categoria]) {
            transacoesPorCategoria[transacao.categoria].transacoes.push(transacao);
            transacoesPorCategoria[transacao.categoria].subtotal += transacao.valor;
        } else {
            transacoesPorCategoria[transacao.categoria] = {
                transacoes: [transacao],
                subtotal: transacao.valor
            };
        }
    });

    return transacoesPorCategoria;
}

let transacoes = [
    { id: 1, valor: 100, data: "2024-05-01", categoria: "Alimentação" },
    { id: 2, valor: 200, data: "2024-05-02", categoria: "Transporte" },
    { id: 3, valor: 150, data: "2024-05-03", categoria: "Alimentação" },
    { id: 4, valor: 120, data: "2024-05-04", categoria: "Transporte" },
    { id: 5, valor: 180, data: "2024-05-05", categoria: "Lazer" }
];

let transacoesAgrupadas = agruparTransacoesPorCategoria(transacoes);

console.log("Transações Agrupadas:", transacoesAgrupadas);
