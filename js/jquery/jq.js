$( () => {

$('.nav-item .nav-link').click( function(e) {

    e.preventDefault();

    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top,
    }, 500)
})



let win = $(window).height(),
    upperBar = $('.upper-bar').innerHeight(),
    navHeight = $('.header').innerHeight();


    $('.carousel-item').height(win - (upperBar + navHeight) );

$('.slider li').click(function() {
    $(this).addClass('active').siblings().removeClass('active')
})

let currentslide = 1,
    slides = $('.slider .img')
    slidesImgs = slides.children().length;


    $('.featured-work li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('img') === 'All') {
            $('.imgs-shuffle .col-md').animate({
                opacity: 1,
            });
        }else {
            $('.imgs-shuffle .col-md').animate({
                opacity: '.3',
            });
            $("."+$(this).data('img')).parent().animate({
                opacity: 1,
            })
        }
    })







});