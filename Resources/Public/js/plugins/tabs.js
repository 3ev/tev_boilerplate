define(["jquery" ],function($){ 

// simple tabs script
// ollie rogers 2013
// use like so: 
/*
   $('#yourelement').tabs({
        navigation: 'tab-link', 
        content:    'tab-content',  
        active:     'active'
    });
*/




    (function ($) {

        $.fn.tabs = function (options) {

        var parentId = this.attr('id'),

            tabs = {
              count: 0
            }, 

            //default element classes sections
            options = {
              navigation: 'tab-link', // tabbed navigation default
              content:    'tab-content', // content sections default
              active:     'active' // active element class default
            }



        $('#'+ parentId +' .' + options.navigation ).each(function(){

            tabs.count += 1;

            // assign control links
            $(this).attr('data-tab-link', tabs.count);

            // count sections and add number to link tab
            $('#'+ parentId + ' .' + options.content + ':eq('+ ( tabs.count - 1 )+')').attr('data-tab-section' , tabs.count);

        })
        .on('click', function(event) {

              var currentLink = $(this).data('tab-link'); //current link index

              // remove active classes
              $('#'+ parentId + ' .' + options.navigation + ', #'+ parentId + ' .' + options.content).removeClass('active');


              // show the new tab
              $('#'+ parentId + ' .' + options.navigation + '[data-tab-link="' + currentLink + '"], #'+ parentId + ' .' + options.content + '[data-tab-section="' + currentLink + '"]').addClass('active');
               
              event.preventDefault();

         });


      };


    })(jQuery);



});

