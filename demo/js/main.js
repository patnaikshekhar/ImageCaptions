$(function() {

    $('div#slideUp').makeCaption({
        animation: 'slide',
        position: 'Below'
    });

    $('div#slideDown').makeCaption({
        animation: 'slide',
        position: 'Above'
    });

    $('div#fadeInAbove').makeCaption({
        animation: 'fadeIn',
        position: 'Above'
    });

    $('div#fadeInBelow').makeCaption({
        animation: 'fadeIn',
        position: 'Below'
    });

    $('div#scaleInAbove').makeCaption({
        animation: 'scaleIn',
        position: 'Above'
    });

    $('div#scaleInBelow').makeCaption({
        animation: 'scaleIn',
        position: 'Below'
    });

    $('div#rotateAbove').makeCaption({
        animation: 'rotate',
        position: 'Above'
    });

    $('div#rotateBelow').makeCaption({
        animation: 'rotate',
        position: 'Below'
    });

    $('div#pushBelow').makeCaption({
        animation: 'push',
        position: 'Below'
    });

    $('div#pushAbove').makeCaption({
        animation: 'push',
        position: 'Above'
    });
});
