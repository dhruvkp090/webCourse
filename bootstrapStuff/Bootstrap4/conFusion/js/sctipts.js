$(document).ready(function(){
    $('#mycarousel').carousel( {interval : 1000} )
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    $('#loginLink').click(function(){
        $('#loginModal').modal('toggle');
        $('#loginModal').modal('show');
    });
    $('#reserveLink').click(function(){
        $('#reservation').modal('toggle');
        $('#reservation').modal('show');
    });
});