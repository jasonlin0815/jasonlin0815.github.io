$(document).ready(function()
{
    $("#fab").on("click", fabOpenNav);
    $("#navbar-close-button").on("click", fabCloseNav);
});

function fabOpenNav()
{
    $(this).animate({opacity: 0}, 100);

    var navbarHeight = $("#navbar-wrapper").css("height");
    $("#navbar").css("display", "block");
    $("body").css("margin-top", navbarHeight);
}

function fabCloseNav()
{
    $("#fab").animate({opacity: 1}, 100);

    $("#navbar").css("display", "none");
    $("body").css("margin-top", 0);
}
