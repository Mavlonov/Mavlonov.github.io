$(document).ready(function () {
    var links = $('.nav-link'); //все ссылки
    links.on('click', function (e) {
        e.preventDefault();
        
        var selector = $(this).attr('href')
        links.removeClass('active')
       $(this).addClass('active');
        var target = $(selector)
        $('html, body').animate({
            scrollTop: target.offset().top - 50//координаты
        },1000)
    })
});