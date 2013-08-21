define(["tev_boilerplate/lib/modernizr"],function(require){

    // assign variables you want to attach to the global object here.


    // asign type of menu interaction event with modernizr
    (Modernizr.touch)? OT.menuInteraction = 'touchend' : OT.menuInteraction = 'click';

    

});