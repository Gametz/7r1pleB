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

    // main

    $('.main__container').slick({
        arrows: false,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    // /main

    // slider

    $('.slider__items').slick({
        arrows: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        waitForAnimate: false,
        responsive: [
            {
              breakpoint: 1758,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 1406,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 706,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    // /slider

    // mob_sliders

    $('.stoke__cards--mob').slick({
        arrows: false,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2
              }
            }
        ]
    });
    
    $('.inter__cards--mob').slick({
        arrows: false,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2
              }
            }
        ]
    });


    // /mob_sliders

    // catalog

    $('.header__bottom__catalog').mouseover(function(){
        $('.header__catalog__nav').slideDown(function(){
            $('.header__bottom__catalog').mouseleave(function(){
                $(this).css('pointer-events','none');
                $('.header__catalog__nav').slideUp(function(){
                    $('.header__bottom__catalog').css('pointer-events','auto');
                });
            });
        });
    });

    // /catalog
    $('.wrapper').css('padding-top', $('.header').css('height'));
    if($(document).width() <= 992.68){
        $('.wrapper').css('padding-top', $('.header--mob').css('height'));
        $('.wrapper').css('background-color','#8B75C8');
    }

    $('.mob--header__burger--btn').click(function(){
        $('.mob--header__burger--nav').css({
            'left' : 0,
        });
        $('.header--mob').css({
            'position': 'absolute'
        });
    });
    $('.burger--back--btn').click(function(){
        $('.mob--header__burger--nav').css({
            'left' : -100 + '%'
        });
        $('.header--mob').css({
            'position': 'fixed'
        });
    });

    $('.burger--nav--cat-menu').click(function(){
        $('.burger--cat__nav').slideToggle();
    });

    $('.mob--header__search--btn--overlay').css('height', $('.wrapper').height());
    $('.mob--header__search--btn').click(function(){
        $('.mob--header__search--btn--overlay').css('display','block');
        $('.mob--header__search--form').css('display','flex');
    });
    $('.mob--header__search--btn--overlay').click(function(){
        $('.mob--header__search--form').css('display','none');
        $(this).css('display','none');
    });


    // stars
    $('.best__item--star').mouseover(function(){
        if($(this).parent().hasClass('.best__item--star--active')){
            return;
        }
        $(this).children().css('fill', '#FFC107');
        $(this).prevAll().children().css('fill', '#FFC107');
    });

    $('.best__item--star').mouseleave(function(){
        if($(this).parent().hasClass('.best__item--star--active')){
            return;
        }
        $(this).children().css('fill', '#D4D4D4');
        $(this).prevAll().children().css('fill', '#D4D4D4');
    });

    $('.best__item--star').click(function(){
        $(this).parent().addClass('.best__item--star--active');
        $(this).children().css('fill', '#FFC107');
        $(this).prevAll().children().css('fill', '#FFC107');
        $(this).parent().css('pointer-events','none');
    });

    // /stars

    // choose

    $('.choose__left__item').click(function(){
        $('.choose__left__item').removeClass('choose__left__item--active');
        $(this).addClass('choose__left__item--active');
        $('.choose__right__item').removeClass('choose__right__item--active');
        let index = $(this).index();
        $('.choose__right__item:eq('+index+')').addClass('choose__right__item--active');
    });

    // mob

    $('.choose__content--mob__title').click(function(){
        if($(this).hasClass('choose__content--mob__title--active')){
            $(this).next().slideUp();
            $(this).removeClass('choose__content--mob__title--active');
            $(this).parent().css('transform','translateY(0)');
            $(this).parent().nextAll().css('transform','translateY(0)');
            $(this).parent().prevAll().css('transform','translateY(0)');
            return;
        }
        $('.choose__content--mob__title').removeClass('choose__content--mob__title--active');
        $(this).addClass('choose__content--mob__title--active');
        $('.choose__content--mob__text').slideUp();
        $(this).next().slideDown();
        $(this).parent().nextAll().css('transform','translateY(-22px)');
        $(this).parent().css('transform','translateY(0)');
        $(this).parent().prevAll().css('transform','translateY(0)');
    });

    // /mob

    // /choose

    // inter

    $('.inter__cats__item').click(function(){
        $('.inter__cats__item').removeClass('inter__cats__item--active');
        $(this).addClass('inter__cats__item--active');
        $('.inter__cards').removeClass('inter__cards--active');
        let index = $(this).index();
        $('.inter__cards:eq('+index+')').addClass('inter__cards--active');
    });

    // /inter




});