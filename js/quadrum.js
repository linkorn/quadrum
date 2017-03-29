function initMain(){
    $('nav').load('components/nav.html',null,function(){
         $('a.page-scroll').bind('click', function(event) {
            event.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href').replace('/','')).offset().top
            }, 1500, 'easeInOutExpo');
           
        });
        collapseNavbar();
    });
    $('header').load('components/intro.html');
    $('#about').load('components/about.html');
    $('#portfolio').load('components/portfolio.html');
    $('#service').load('components/service.html');
    $('#service-mobile').load('components/service-mobile.html');
    $('#contact').load('components/contact1.html');
    $('#partners').load('components/partners1.html');
    $('footer').load('components/footer.html');    
}

function initProject(){
    $('nav').load('components/inner-nav.html');
    $("#project").load('components/project-1.html',function(){
        var carouselSlider = new $.carouselSlider( $('.detailSlider')); 
    });
     $('footer').load('components/footer.html');    
}

function initTextPage(){
    $('nav').load('components/inner-nav.html');
    $("#design").load('components/design-interior.html');
    $('footer').load('components/footer.html');    
}

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

$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});
