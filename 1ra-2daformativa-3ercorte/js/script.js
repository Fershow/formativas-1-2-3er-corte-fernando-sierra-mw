$(document).ready(function(){
    // Menú Responsive
    $('aside#menu-movil').css('left','-290px');
    $('#cerrar').hide();

    $('#abrir').click(function(){
        $('aside#menu-movil').animate({
            left: 0
        },300,'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        $('header, main, footer').animate({
            left: 290,
            opacity: 0.15
        },300,'easeOutExpo');

        event.preventDefault();
    });

    $('#cerrar, aside#menu-movil nav a').click(function(){
        $('aside#menu-movil').animate({
            left: -290
        },300,'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        $('header, main, footer').animate({
            left: 0,
            opacity: 1
        },300,'easeOutExpo');

        event.preventDefault();
    });



    /*  Función para detectar Scroll Down */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10) {
            $('header').removeClass('transparente');
            $('header').addClass('gris');

            $('a#abrir').removeClass('blanco');
            $('a#abrir').addClass('azul');

        } else {
            $('header').removeClass('gris');
            $('header').addClass('transparente');

            $('a#abrir').removeClass('azul');
            $('a#abrir').addClass('blanco');

        }
    });
 

    
    /* Activador de Slick Slider */
    $('.slick-inicio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 1500,
        speed: 500,
        fade: true,
        infinite: true
    });

// Componente Precarga Puntos
$('#carga-01').animate({ opacity: 1 },200,'easeOutExpo');
$('#carga-02').delay(200).animate({ opacity: 1 },100,'easeOutExpo');
$('#carga-03').delay(400).animate({ opacity: 1 },100,'easeOutExpo');
$('#carga-04').delay(600).animate({ opacity: 1 },100,'easeOutExpo');
$('#carga-05').delay(800).animate({ opacity: 1 },100,'easeOutExpo');
$('#carga-06').delay(1000).animate({ opacity: 1 },100,'easeOutExpo');
$('#carga-07').delay(1200).animate({ opacity: 1 },100,'easeOutExpo');
$('#carga-08').delay(1400).animate({ opacity: 1 },100,'easeOutExpo');
$('#carga-09').delay(1600).animate({ opacity: 1 },100,'easeOutExpo');
$('#carga-10').delay(1800).animate({ opacity: 1 },100,'easeOutExpo');

$('#precarga-puntos').delay(2000).animate({
    top: '-100%',
    opacity: 0
},300,'easeInExpo');

    
  // Sistema de Tabs
  $('#tab-01').click(function(){
    /* $('div#contenedor-tabs').css('left','0'); */
    $('div#contenedor-tabs').animate({
        left: 0
    },200,'easeOutExpo');

    $('#tab-01').addClass('tab-activa');
    $('#tab-01').removeClass('tab-inactiva');

    $('#tab-02, #tab-03').removeClass('tab-activa');
    $('#tab-02, #tab-03').addClass('tab-inactiva');
});

$('#tab-02').click(function(){
    /* $('div#contenedor-tabs').css('left','-1100px'); */
    $('div#contenedor-tabs').animate({
        left: '-100%'
    },200,'easeOutExpo');

    $('#tab-02').addClass('tab-activa');
    $('#tab-02').removeClass('tab-inactiva');

    $('#tab-01, #tab-03').removeClass('tab-activa');
    $('#tab-01, #tab-03').addClass('tab-inactiva');
});

$('#tab-03').click(function(){
    /* $('div#contenedor-tabs').css('left','-2200px'); */
    $('div#contenedor-tabs').animate({
        left: '-200%'
    },200,'easeOutExpo');

    $('#tab-03').addClass('tab-activa');
    $('#tab-03').removeClass('tab-inactiva');

    $('#tab-02, #tab-01').removeClass('tab-activa');
    $('#tab-02, #tab-01').addClass('tab-inactiva');
});


});