jQuery(document).ready(function($){
    //Variables
    var $root = $('html, body'),
        menu_toggle = $('.menu-toggle');
    
        // Toggle nav menu on button click

    menu_toggle.on('click', function(){
        var $this = $(this);
       
        $this.toggleClass('close');
        $('.menu, .menu-nav, .menu-nav-item').toggleClass('show');
    
    });
});