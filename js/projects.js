$(document).ready(function()
{
    $(".list li a").hover(displayImg, hideImg);
});

function displayImg()
{
    // Fade image in

    // Enlarge title text
    $(this).find("h1").css("font-size", "110px");

    // Reverse opacity between title and subtitle
    $(this).find("h1").css("color", "rgba(178, 221, 236, 0.4)");
    $(this).find("h3").css("color", "rgba(178, 221, 236, 0.8)");
}

function hideImg()
{
    // Fade image away
    // Revert effect
    $(this).find("h1").css("font-size", "75px");
    $(this).find("h1").css("color", "rgba(178, 221, 236, 0.8)");
    $(this).find("h3").css("color", "rgba(178, 221, 236, 0.4)");
}
