$(document).ready(function()
{
    var navMoveValue = parseFloat($("#navbar-wrapper").css("height"));

    // Animate FAB onclick opening navbar
    $("#fab").on("click", function() {
        // Animate fab dissapearing
        $(this).animate({
            opacity: 0
        }, 500, function() {
            $(this).css({display: "none"});
        });

        // Animate nav bar dropping down
        $("#navbar-wrapper").animate({
            marginTop: 0
        }, 1000, "easeOutBounce");
        $("body").animate({
            marginTop: navMoveValue
        }, 1000, "easeOutBounce");
    });

    // Animate navbar onclick closing and return fab
    $("#navbar-close-button").on("click", function() {
        // Appearing fab
        $("#fab").css({display: "flex"});
        $("#fab").animate({
            opacity: 1
        }, 500);

        // Closing nav bar
        $("#navbar-wrapper").animate({
            marginTop: -navMoveValue
        }, 1000, "easeOutExpo");
        $("body").animate({
            marginTop: 0
        }, 1000, "easeOutExpo");
    });
});
