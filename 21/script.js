/*
    21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
    retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
    = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/


function calcularPesoIdeal(alt, sexo) {
    let pesoIdeal;
    if (sexo === "F") {
        pesoIdeal = 62.1 * alt - 44.4;
    } else if (sexo === "M") {
        pesoIdeal = 72.7 * alt - 58;
    } else {
        console.log("Por favor, escolha entre F(feminino) ou M(masculino)")
    }

    console.log(`Você escolheu ${sexo}, seu peso ideal seria ${pesoIdeal.toFixed(2)}Kg`);
}

let alt = 1.60;
let sexo = "F";

calcularPesoIdeal(alt, sexo);