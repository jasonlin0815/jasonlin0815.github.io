$(document).ready(function()
{
    // Animate FAB onclick opening navbar
    $("#fab").on("click", openNavbar);

    // Animate navbar onclick closing and return fab
    $("#navbar-close-button").on("click", closeNavbar);

    // Scroll to page animation
    $("#navbar-pages li").on("click", navigatePage);
});

function navigatePage() {
    var target = $(this).find("a").attr("href");
    var currentPage = $(".navbar-pages-current");

    if($(currentPage).find("a").attr("href") != target)
    {
        // Scroll to page animation
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 500);

        // Update current page
        currentPage.removeClass("navbar-pages-current");
        $(this).addClass("navbar-pages-current");
    }

    // Close navbar after click
    closeNavbar();
}

function closeNavbar() {
    var navMoveValue = parseFloat($("#navbar-wrapper").css("height"));
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
}

function openNavbar()
{
    var navMoveValue = parseFloat($("#navbar-wrapper").css("height"));
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

}
