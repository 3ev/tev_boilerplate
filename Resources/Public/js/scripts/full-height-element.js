define(["jquery"],function(require){ 

    (function(){

        // resize element to the height of the window on window resize
        onResize = function() {

      
                        elemHeight = $(window).innerHeight();

                        $('.full-height').css({
                            height: elemHeight + 'px'
                        });
                    
        }

        // trigger resize on doc ready
        $(document).ready(onResize);
        $(window).on('resize', onResize);

    })();

});