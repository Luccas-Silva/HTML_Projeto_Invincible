const btnCarrossel = document.querySelectorAll('.botao');
const imagems = document.querySelectorAll('.imagem');

btnCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        desativarBotaoSelecionado()
        selecionarBotao(botao);

        esconderImagemAtiva()
        mostrsrImagem(indice);
        
    });
});

function desativarBotaoSelecionado(){
    const botaoSelecionado = document.querySelector('.selecionado');
    console.log(botaoSelecionado.classList.remove('selecionado'));
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva(){
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa');
}

function mostrsrImagem(indice) {
    imagems[indice].classList.add('ativa');
}
