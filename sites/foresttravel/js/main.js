$(function(){

    // ibg
    function ibg(){
    	$.each($('.ibg'), function(index, val){
    		if($(this).find('img').length>0){
    			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    		}
    	});
    }
    ibg();
    // /ibg

    // Плавная прокрутка к якорю================================================
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
    });
    // Плавная прокрутка к якорю================================================

    // БУРГЕР МЕНЮ
    $('.header__burger').click(function(){
        $('.header__nav').slideDown();
    });
    $('.header__nav').click(function(){
        $(this).slideUp();
    });
    // /БУРГЕР МЕНЮ

    // МЕНЮ В ПОДВАЛЕ
    $('.footer__offer, .footer__logo').click(function(){
        if($(window).width() <= 767.98){
            $(this).next().slideToggle();
        }
    });
    // /МЕНЮ В ПОДВАЛЕ


});