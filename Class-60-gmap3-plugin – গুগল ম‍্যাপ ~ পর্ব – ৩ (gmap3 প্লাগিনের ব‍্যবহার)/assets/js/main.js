(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        var uluru = {
            lat: -25.363,
            lng: 131.044
        };
        $('.map')
            .gmap3({
                zoom: 7,
                center: uluru
            })
            .marker({
                position: uluru
            })
            .infowindow({
                content: "Hello from Uluru"
            })
            .then(function (infowindow) {
                var map = this.get(0);
                var marker = this.get(1);
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });
            });






    });


    jQuery(window).load(function () {


    });


}(jQuery));
