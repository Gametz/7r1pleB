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

    // slider ============================================
    $('.slider__items').slick({
        slidesToShow: 10,
        arrows: false,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
              breakpoint: 575,
              settings: {
                slidesToScroll:12,
                centerMode: true
              }
            }
        ]
    });
    // /slider ===========================================


});

