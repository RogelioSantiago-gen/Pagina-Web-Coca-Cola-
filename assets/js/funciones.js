jQuery(document).ready(listo);

/* Funciones para la hamburguesa */
function listo(){
    jQuery(".hamburguesa").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");

        });

        jQuery("header .container nav a").click(function(){
            jQuery("header .container nav").removeClass("open");

            var hamb = jQuery(this).attr("href");

            jQuery("html,body").animate({
                "scrollTop": jQuery(hamb).offset().top -76
            })
        })

}
