(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        var s = skrollr.init({
            render:function(data){
                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
            }
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	