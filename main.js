//Create the burger menu

$(document).ready(function() {
    $('.burger').click(function() {
        $('.burger,.header-nav').toggleClass('active');
    });
});