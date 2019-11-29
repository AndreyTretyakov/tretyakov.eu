$(document).ready
(
    function()
    {
        $('nav').on('mouseleave', 
            function()
            {
                $('body').removeClass('nav-active');
                $('nav').removeClass('active');                          
            }
        );
        
        $('nav .nav-button').click
        (
            function()
            {
                $('nav').toggleClass('active');
                $('body').toggleClass('nav-active');
            }
        );
        
        $('nav ul li').find('span').click
        (
            function()
            {
                $(this).toggleClass('active');
                $(this).parent().find('ul').slideToggle();
            }
        );
    }
);