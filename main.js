
  const tela0 = document.querySelector ('.tela_0')
  const tela1 = document.querySelector ('.tela_1');
  const tela2 = document.querySelector ('.tela_2');
  const tela3 = document.querySelector ('.tela_3');
  const tela4 = document.querySelector ('.tela_4');
  const tela5 = document.querySelector ('.tela_5');
  const tela6 = document.querySelector ('.tela_6');
  const tela7 = document.querySelector ('.tela_7');
  const tela8 = document.querySelector ('.tela_8');
  const tela9 = document.querySelector ('.tela_9');
  const tela10 = document.querySelector ('.tela_10');
  const tela11 = document.querySelector ('.tela_11');
  const tela12 = document.querySelector ('.tela_12');
  const tela13 = document.querySelector ('.tela_13');
  const tela14 = document.querySelector ('.tela_14');
  const tela15 = document.querySelector ('.tela_15');
  const tela16 = document.querySelector ('.tela_16');
  const respostaErrada = document.querySelectorAll ('.error');

  const todasTelas = [tela0, tela1, tela2, tela3, tela4, tela5, tela6, tela7, tela8, tela9,tela10, 
    tela11, tela12, tela13, tela14, tela15, tela16];

function mostrarUmaTela (telaParaMostrar){
    todasTelas.forEach (tela => {
        if (tela){
            tela.style.display = 'none';
        };
    });
    //mostrar a tela que eu quero
    if(telaParaMostrar){
        telaParaMostrar.style.display = 'block' //para mostrar a tela do if anterior
    };
};

//evento do botão para começar a jogar
document.getElementById ('botao').onclick = function (){
    mostrarUmaTela (tela1);
};
//evento para o acerto 
document.getElementById ('certo').onclick = function (){
    mostrarUmaTela (tela2);
};
//para o acert2
document.getElementById ('certo2').onclick =  function (){
    mostrarUmaTela (tela3);
};
//acerto3
document.getElementById ('certo3').onclick =  function (){
    mostrarUmaTela (tela4);
};
//acerto4
document.getElementById ('certo4').onclick =  function (){
    mostrarUmaTela (tela5);
};
//acerto5
document.getElementById ('certo5').onclick =  function (){
    mostrarUmaTela (tela6);
};
document.getElementById ('certo6').onclick =  function (){
    mostrarUmaTela (tela7);
};
document.getElementById ('certo7').onclick =  function (){
    mostrarUmaTela (tela8);
};
document.getElementById ('certo8').onclick =  function (){
    mostrarUmaTela (tela9);
};
document.getElementById ('certo9').onclick =  function (){
    mostrarUmaTela (tela10);
};
document.getElementById ('certo10').onclick =  function (){
    mostrarUmaTela (tela11);
};
document.getElementById ('certo11').onclick =  function (){
    mostrarUmaTela (tela12);
};
document.getElementById ('certo12').onclick =  function (){
    mostrarUmaTela (tela13);
};
document.getElementById ('certo13').onclick =  function (){
    mostrarUmaTela (tela14);
};
document.getElementById ('certo14').onclick =  function (){
    mostrarUmaTela (tela15);
};
document.getElementById ('certo15').onclick =  function (){
    mostrarUmaTela (tela16);
};

//evento para as respostas erradas 
respostaErrada.forEach (elementoErro => {
    elementoErro.onclick = function(){
        mostrarUmaTela(tela0);
    }
});
