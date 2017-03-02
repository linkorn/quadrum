$('nav').load('components/nav.html');
$('header').load('components/intro.html');
$('#about').load('components/about.html');
$('#portfolio').load('components/portfolio.html');
$('#service').load('components/service.html');
$('#service-mobile').load('components/service-mobile.html');
$('#contact').load('components/contact.html');
$('#partners').load('components/partners.html');
$('footer').load('components/footer.html');

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    $(".social").css("transform","translateY(-"+$(window).scrollTop()+"px)").css("opacity",1-$(window).scrollTop()/30);
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});
