define(["jquery" ],function(require){ 

  (function(){

      // modal window 
      // ----------------------------------------------------------------------

      // dom elements
      modal = {};
      modal.bodyActiveClass = 'modal-window-open';
      modal.windowActiveClass = 'active-modal';    
      modal.windowElem = '.modal-window';

      // bind modal events to the body
      $('body').on('click', '.open-modal', function(event) {
        event.preventDefault();

        // activate modal window
        $('body').addClass( modal.bodyActiveClass);

        // add attr data-modal-target="the-id-of-modal-to-open" to the target window
        // required to have multiple modal windows on page
        var targetwindow = $(this).data('modal-target');

        if(targetwindow){

          $('#' + targetwindow).addClass(modal.windowActiveClass);

        }

      }).on('click', '.modal-overlay, .modal-close ', function(event) {

        // close modal window
        $('body').removeClass( modal.bodyActiveClass);

        // remove active class
        $(modal.windowElem).removeClass(modal.windowActiveClass);

      }).on('click', modal.windowElem, function(event) {

        // prevent click event inside the modal from closing it
        event.stopPropagation();
        
      });

  })()

});