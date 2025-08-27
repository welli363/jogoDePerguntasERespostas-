document.addEventListene('DOMContentLoaded'), ()=>{
    // todas as telas 
    const telas = document.querySelectorAll('.telaInicial > div');
    let telaAtual = 0;

    //função para mostrar a tela atual
    function mostrarTela(index){
        telas.forEach((tela, i)=>{
            tela.style.display = i === index ? 'block' : 'none';
        });
    }
};
mostrarTela (telaAtual);
//botão começar
const btnComecar = document.getElementById('btnComecar').addEventListener('click', ()=>{
    telaAtual++;
    mostrarTela(telaAtual);
});
//adicionar evento em todas as respostas 
telas.forEach((tela, index)=>{
    const botoes = tela.querySelectorAll('button');
    botoes.forEach(botao =>{
        botao.addEventListene('click', ()=>{
            //verificar botao certa
            if(botao.id.startsWith('respostaCerta')){
                alert('Correta resposta!')
            }else if(botao.classList.contains('erro')){
                alert('Resposta errada!')
            }
            //para a proxima tela 
            if(index + 1 < telas.length - 1){
                telaAtual = index+1;
                mostrarTela(telaAtual);
            }else{
                //mostrar tela final
                telaAtual = telas.length - 1;
                mostrarTela(telaAtual);
            }
        })
    })
})