$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $(".headers").addClass("headeractive");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".headers").removeClass("headeractive");
        }
    });
});