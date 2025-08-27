document.addEventListener('DOMContentLoaded', () => {
    const telas = document.querySelectorAll('.telaInicial > div');
    let telaAtual = 0;

    function mostrarTela(index) {
        telas.forEach((tela, i) => {
            tela.style.display = (i === index) ? 'block' : 'none';
        });
    }

    mostrarTela(telaAtual);

    const btnComecar = document.getElementById('btnComecar');
    btnComecar.addEventListener('click', () => {
        telaAtual = 1;
        mostrarTela(telaAtual);
    });

    telas.forEach((tela, index) => {
        const botoes = tela.querySelectorAll('button');
        botoes.forEach(botao => {
            botao.addEventListener('click', () => {
                if (botao.id.startsWith('respostaCerta')) {
                    // certo → avança normalmente
                    setTimeout(() => {
                        if (index + 1 < telas.length) {
                            telaAtual = index + 1;
                            mostrarTela(telaAtual);
                            botaoCerto.style.backgroundColor = '';
                            botoesErro.forEach(btn => btn.style.backgroundColor = '');// 1000 ms = 1 segundo
                        }
                    }, 400);
                } else if (botao.classList.contains('erro')) {
                    // errado → volta para o começo
                    setTimeout(() => {
                        telaAtual = 0; // volta para a tela inicial
                        mostrarTela(telaAtual);
                    }, 400);
                }
            });
        });
    });
});
