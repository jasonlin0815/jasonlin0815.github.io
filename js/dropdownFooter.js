$(document).ready(function() {
    $(window).scroll(function() {
        var c = $(window).scrollTop() + $(window).height();
        var d = $(document).height();
        if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
            $("#dropdown-footer").animate({
                height: 200
            }, 1000, "easeOutBounce", function() {
                $("#dropdown-footer").children().each(function() {
                    $(this).css({
                        display: "flex"
                    })
                    $(this).animate({
                        opacity: 0.7
                    }, 500);
                });
            });
        }
    });
});
