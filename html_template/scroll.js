$(
    function()
    {
        $("a[href^='#']").click
        (
            function()
            {
                    $('.title-active').each
                    (
                        function()
                        {
                            $(this).removeClass();
                        }
                    );
                    $('a.active').each
                    (
                        function()
                        {
                            $(this).removeClass();
                        }
                    );
                    $(this).addClass('active');
                    var _href = $(this).attr("href");
                    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                    $(_href).addClass('title-active');
                    return false;
            }
        );
    }
);