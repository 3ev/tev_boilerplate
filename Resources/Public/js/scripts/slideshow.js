define(["jquery" ],function(require){ 


     //slideshow
     $('.slideshow .slide:first').fadeIn(2000); 

     setInterval(function(){

         $('.slide:first').fadeOut(1000).next('.slide').fadeIn(1000).end().appendTo('.slideshow');

     }, 4000);


 });