function faz_leitura(form) {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    let x = valor1 * valor2;
    let raiz_apprx = sqrt_approx(x).toFixed([2]);
    let err = x - (raiz_apprx * raiz_apprx);
    if (err < 0) {
        err = -err;
    }

    document.getElementById("r1").innerHTML = valor1;
    document.getElementById("r2").innerHTML = valor2;
    document.getElementById("r3").innerHTML = x;
    document.getElementById("r4").innerHTML = x;
    document.getElementById("r5").innerHTML = raiz_apprx;

}

function raiz_do_quadrado_mais_proximo(x) {
    let i = 0;
    while (i * i < x) {
        i++;
    }
    let dist_ii = i * i - x;
    let dist_ant = x - (i - 1) * (i - 1);

    return dist_ant < dist_ii ? i - 1 : i;
}

function sqrt_approx(x) {
    let sqrt_a = raiz_do_quadrado_mais_proximo(x);
    let a = sqrt_a * sqrt_a;

    // se x for um quadrado perfeito, x-a resultará em zero e a resposta será sqrt_a
    return sqrt_a + (x - a) / (2 * sqrt_a);
}