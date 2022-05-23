$(function(){
    var indexAtual = 0;
    var qtd;

    initSlider();
    sliderAuto();

    function initSlider() {
        qtd = $('.sobre-autor').length;
        var tamContainer = 100 * qtd;
        var tamSingle = 100 / qtd;

        //Definindo o tamanho das divs do slider dinamicamente
        $('.sobre-autor').css('width',tamSingle+'%');
        $('.scrollWraper').css('width',tamContainer+'%');
    }

    function sliderAuto() {
        $('.seta-bilocas h2').click(function(){

            indexAtual++;
            if (indexAtual == qtd) {
                indexAtual = 0;
            }
            goToSlider(indexAtual);

        });
    }

    function goToSlider(indexAtual) {
        var posicao = $('.sobre-autor').eq(indexAtual).offset().left - $('.scrollWraper').offset().left;

        $('.slider-bilocas span').eq(indexAtual-1).css('background-color','rgb(179, 193, 237)');
        $('.slider-bilocas span').eq(indexAtual).css('background-color','rgb(74, 116, 255)');

        $('.scrollEquipe').stop().animate({'scrollLeft':posicao});
    }
})