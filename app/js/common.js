$('.btn-size').click(function (e) {
    e.preventDefault();
    $(this).siblings('.box-hidden').fadeToggle();
    $(this).parents('.product-box__wrapper').toggleClass('click');
});

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

$('.checkbox-phone').click(function () {
   $('.form-box__title-phone').fadeIn();
   $('.form-box__title-whatsapp').hide();
});

$('.checkbox-whatsapp').click(function () {
    $('.form-box__title-whatsapp').fadeIn();
    $('.form-box__title-phone').hide();
});

var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();

