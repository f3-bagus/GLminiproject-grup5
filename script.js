$(window).resize(function () {
    moveElements();
});

$('.card').mouseenter(function () {
    $(this).css({
        'filter': 'brightness(90%)',
    });
}).mouseleave(function () {
    $(this).css({
        'filter': 'brightness(100%)',
    });
});

$(document).ready(function () {
    $('.paket').mouseenter(function () {
        $(this).css({
            'filter': 'brightness(80%)',
        });
    }).mouseleave(function () {
        $(this).css({
            'filter': 'brightness(100%)',
        });
    });
});
