
  const tela0 = document.querySelector ('.tela0')
  const tela1 = document.querySelector ('.tela1');
  const tela2 = document.querySelector ('.tela2');
  const tela3 = document.querySelector ('.tela3');
  const tela4 = document.querySelector ('.tela4');
  const tela5 = document.querySelector ('.tela5');
  const tela6 = document.querySelector ('.tela6');
  const tela7 = document.querySelector ('.tela7');
  const tela8 = document.querySelector ('.tela8');
  const tela9 = document.querySelector ('.tela9');
  const tela10 = document.querySelector ('.tela10');
  const telaFinal = document.querySelector ('.telaFinal');
  const btnVoltarInicio = document.getElementById ('voltarInicio');
  const respostaErrada = document.querySelectorAll ('.erro');

  const todasTelas = [tela0, tela1, tela2, tela3, tela4, tela5, tela6, tela7, tela8, tela9,tela10, telaFinal,btnVoltarInicio];

function mostrarUmaTela (telaParaMostrar){
    todasTelas.forEach (tela => {
        if (tela){
            tela.style.display = 'none';
        };
    });
    //mostrar a tela que eu quero
    if(telaParaMostrar){
        telaParaMostrar.style.display = 'inline-block'; //para mostrar a tela do if anterior
    };
};

//evento do botão para começar a jogar
document.getElementById ('btnComecar').onclick = function (){
    mostrarUmaTela (tela1);
};
//evento para o acerto 
document.getElementById ('respostaCerta1').onclick = function (){
    mostrarUmaTela (tela2);
};
//para o acert2
document.getElementById ('respostaCerta2').onclick =  function (){
    mostrarUmaTela (tela3);
};
//acerto3
document.getElementById ('respostaCerta3').onclick =  function (){
    mostrarUmaTela (tela4);
};
//acerto4
document.getElementById ('respostaCerta4').onclick =  function (){
    mostrarUmaTela (tela5);
};
//acerto5
document.getElementById ('respostaCerta5').onclick =  function (){
    mostrarUmaTela (tela6);
};
document.getElementById ('respostaCerta6').onclick =  function (){
    mostrarUmaTela (tela7);
};
document.getElementById ('respostaCerta7').onclick =  function (){
    mostrarUmaTela (tela8);
};
document.getElementById ('respostaCerta8').onclick =  function (){
    mostrarUmaTela (tela9);
};
document.getElementById ('respostaCerta9').onclick =  function (){
    mostrarUmaTela (tela10);
};
document.getElementById ('respostaCerta10').onclick =  function (){
    mostrarUmaTela (telaFinal);
};
document.getElementById('voltarInicio').onclick = function (){
    mostrarUmaTela(tela0);
} 
//evento para as respostas erradas 
respostaErrada.forEach (elementoErro => {
    elementoErro.onclick = function(){
        mostrarUmaTela(tela0);
    }
});
