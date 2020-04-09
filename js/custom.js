$(function () {
    //    slick banner
    $('.warp').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });
//second silide
    $('.warp2').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });
//    mixitup
    var mixer = mixitup('.galitems');
    //===== Sticky
    
$(window).on('scroll', function(event) {    
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
        $(".navigation").removeClass("sticky");
        $(".header-three .navigation img").attr("src", "images/logo-2.png");
    } else{
        $(".navigation").addClass("sticky");
        $(".header-three .navigation img").attr("src", "images/logo.png");
    }
});
//bact to top
$(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
//preloder
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    

//venobox
    
     $('.video').venobox({
         framewidth: '500px',
        spinner: 'wandering-cubes'
     }); 




});
