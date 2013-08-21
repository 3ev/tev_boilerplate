   define(["jquery" ],function(require){ 

    // toggle 'on' class on a specified element
    // ----------------------------------------------------------------------

    // to use this add the 'toggle-show' class to the handler element 
    // then add the id of the element to toggle the 'on' & 'active-toggle'
    // classes to the data attribute 'data-toggle-target'

    // toggle handler (does not need to be a link)
    // <a href="#" class="toggle-show" data-toggle-target="target_elem_id">

    // target element
    // <section id="target_elem_id">Content</section>
    
    $('body').on('click', '.toggle-show', function(event) {

        if( $(this).hasClass('on') ){

            // remove toggle classes on body click
            $('.active-toggle.on, .toggle-show.on').removeClass('on active-toggle');
            
            event.preventDefault();

        } else {

            event.preventDefault();

            // close active elements
            $('.on.active-toggle, .toggle-show.on').removeClass('on active-toggle');

            // get id of element to open from data attribute
            var targetElem = '#' + $(this).data('toggle-target'); 

            // add active classes to target element
            $(targetElem).addClass('on active-toggle');
            $(this).addClass('on');  

        }
    })

    .on('click', '.toggle-show, .active-toggle', function(event) {

        //stop the toggled elementy from being closed on click
        event.stopPropagation();
    })

    .on('click', function(event) {

        // remove active class when anywhere on the document is 
        // touched except the currently toggled element 
        $('.active-toggle.on, .toggle-show.on').removeClass('on active-toggle');

    });;


});