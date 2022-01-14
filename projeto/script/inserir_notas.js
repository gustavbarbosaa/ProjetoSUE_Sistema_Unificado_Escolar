function media() {
    let pegarNotaUm = document.getElementById('nota1');
    let pegarNotaDois = document.getElementById('nota2');
    let pegarNotaTres = document.getElementById('nota3');
    let pegarRes = document.getElementById('media')

    let notaUm = Number(pegarNotaUm.value);
    let notaDois = Number(pegarNotaDois.value);
    let notaTres = Number(pegarNotaTres.value);
    let media = (notaUm + notaDois + notaTres) / 3;

    
    pegarRes.innerHTML = `A sua média é ${media}.`;
    
    if (media < 7) {
        pegarRes.innerHTML += `<p> Sua média está abaixo de 7. Você precisa fazer a recuperação.</p>`;
    } else {
        pegarRes.innerHTML += `<p>Parabéns, você está aprovado.</p>`;
    }
}
