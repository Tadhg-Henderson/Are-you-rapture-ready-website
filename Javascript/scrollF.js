$(document).ready(function() {
    $('scrollLink1').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('#readings').offset().top
        }, 500);
    });
});