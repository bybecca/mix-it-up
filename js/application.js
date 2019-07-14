//JavaScript Document


$(document).ready(function () {
	"use strict";
    
    	$('.test').hide();
	
		$(".clickMe").on("click", function(){
	 
		$(this).next().slideToggle(); 
		$(this).next().siblings(".test").slideUp(); 
			event.preventDefault(); 
	});
    
    
    $("input:radio[name=size]").click(function() {
        var value = $(this).val();
            var image_name;
            if(value == 'large'){
//                image_name = "formula_gdp.gif";
                $(".mixPhoto").show();
                $(".mixPetite").hide();
            }else if(value == 'small'){
                $(".mixPhoto").hide();
                $(".mixPetite").show();
//                    image_name = "formula_pop.gif";
//                }else{
//                    image_name = "formula_none.gif";
//                }
            }
//         $('#formula').attr('src', image_name);
//        https://stackoverflow.com/questions/16584541/using-radio-buttons-to-change-an-image
    });
	
        $("#slideshow").owlCarousel({
	items: 1,	
	loop: true,
	nav: true,
	navText: ["",""],
}); 
    

});