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

    // menu
    $(document).scroll(function(){
        if($(document).scrollTop() >= 91){
            $('.menu').css('position','fixed');
            $('.header').css('margin-bottom','58px');
        }
        else{
            $('.menu').css('position','static');
            $('.header').css('margin-bottom','0');
        }
    });
    // /menu
    
    // sliders
    $('.main__container').slick({
        'arrows' : false,
        'dots' : true,
        'speed' : 900,
        'autoplay' : true,
        'autoplaySpeed' : 3000,
        'easing' : 'ease',
        'pauseOnFocus' : false,
        'pauseOnHover' : false,
        'pauseOnDotsHover' : false,
        'responsive' : [{
            'breakpoint' : 768,
            'settings' : {
                'dots' : false
            }
        }]
    });

    $('.cards__container').slick({
        'slidesToShow' : 3,
        'speed' : 700,
        'autoplay' : true,
        'autoplaySpeed' : 2000,
        'easing' : 'ease',
        'pauseOnFocus' : false,
        'pauseOnHover' : false,
        'responsive' : [
            {
                'breakpoint' : 768,
                'settings' : {
                    'arrows' : false,
                    'slidesToShow' : 2
                }
            },
            {
                'breakpoint' : 580,
                'settings' : {
                    'slidesToShow' : 1
                }
            }
        ]
    });

    $('.cards__container').on('afterChange',function(event, slick, currentSlide, nextSlide){
        $('.cards .slick-current').css('border-right','1px solid rgba(0,0,0,0.1)');
        $('.cards .slick-current').next().css('border-right','1px solid rgba(0,0,0,0.1)');
        $('.cards .slick-current').next().next().css('border','0');
    });

    $('.cards__container').on('beforeChange',function(event, slick, currentSlide, nextSlide){
        $('.cards .slick-current').next().next().css('border-right','1px solid rgba(0,0,0,0.1)');
        $('.cards .slick-current').next().next().next().css('border','0');
    });

    // /sliders
  
    // burger
    $('.burger').click(function(){
        $('.burger__nav').slideToggle(400, function(){
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    });
    // /burger

    // cats
    $('.cats__offer').click(function(){
       $('.cats__nav').slideUp(function(){
           if($(this).css('display') === 'none'){
               $(this).removeAttr('style');
           }
       });
       if($(this).next().css('display') == 'block'){
           $(this).next().slideUp(function(){
               if($(this).css('display') === 'none'){
                   $(this).removeAttr('style');
               }
           });
       }
       else{
           $(this).next().slideDown(function(){
               if($(this).css('display') === 'none'){
                   $(this).removeAttr('style');
               }
           });
       }
    });
    // /cats

});