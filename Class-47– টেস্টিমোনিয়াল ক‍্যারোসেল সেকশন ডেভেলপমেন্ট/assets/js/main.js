(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            nav: false,
        });




    });


    jQuery(window).load(function () {


    });


}(jQuery));
