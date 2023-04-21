$(function () {
    $('.carousel').carousel({
        interval: 1000,
        wrap: true,
    });
})

$(".nav .nav-link").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });