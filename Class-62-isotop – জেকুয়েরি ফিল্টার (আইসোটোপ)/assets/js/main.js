(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();


        $(".filter-list li").on('click', function () {

            $(".filter-list li").removeClass("active");
            $(this).addClass("active");


            var selector = $(this).attr("data-filter");

            $(".product-list").isotope({

                filter: selector,
            });

        });


        $(".product-list").isotope();




    });


    jQuery(window).load(function () {


    });


}(jQuery));
