function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    // Verifica se a quantidade é maior que zero e se os valores de 'de' e 'ate' são válidos
    if (quantidade > 0 && de <= ate) {
        while (sorteados.length < quantidade) {
            numero = obterNumeroAleatorio(de, ate);

            // Adiciona o número somente se ele não estiver na lista
            if (!sorteados.includes(numero)) {
                sorteados.push(numero);
            }
        }
    } else {
        console.log('Quantidade inválida ou intervalo inválido.');
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao')

    } else {
        botao.classList.remove('container__botao') 
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
    document.getElementById('quantidade').focus(); // Focar no campo 'quantidade'
}