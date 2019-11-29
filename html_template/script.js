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

                if ($('body').hasClass('nav-active') == true)
                {
                   
                }
                else
                {
                   
                }
            }
        );
        
    }
);