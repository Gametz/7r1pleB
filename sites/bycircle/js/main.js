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
        }, 800);
        $('body').css('overflow','auto');
        $('.header__nav--mob').slideUp();
        return false;
    });
    // Плавная прокрутка к якорю================================================

    // burger
    $('.header__buger--btn').click(function(){
        $('.header__nav--mob').slideDown();
        $('body').css('overflow','hidden');
    });
    $('.header__nav--mob').click(function(){
        $(this).slideUp();
        $('body').css('overflow','auto');
    });
    // /burger

    // slider
    $('.slider__body').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500
    });
    // /slider


});