$(function(){

    $('.menu-mobile').click(function(){
        $(this).find('ul').slideToggle();
    });

    $('nav li').click(function(){
        var target = $(this).attr('href'); //Verifica qual é o id referente ao link-->sessão
        var posicao = $(target).offset().top; //Verifica a posição da sessão com o id determinado

        $('html,body').animate({'scrollTop':posicao});//Desce até a posição determinada

        return false; //Impede que o link att a pagina
    })

})