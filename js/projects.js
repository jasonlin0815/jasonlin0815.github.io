$(document).ready(function()
{
    $(".fullimg").fadeOut(100);
    $(".list li a").hover(displayImg, hideImg);
    $(".list li a").on("click", projectOnClick);
});

function displayImg()
{
    var src = $(this).find("img").attr("src");

    // Fade image in
    $(".fullimg").css({"background-image": "url(" + src + ")"});
    $(".fullimg").fadeIn(300);

    // Enlarge title text
    $(this).find("h1").css("font-size", "110px");

    // Reverse opacity between title and subtitle
    $(this).find("h1").css("color", "rgba(178, 221, 236, 0.4)");
    $(this).find("h3").css("color", "rgba(178, 221, 236, 0.8)");
}

function hideImg()
{
    // Fade image away
    $(".fullimg").fadeOut(100);

    // Revert effect
    $(this).find("h1").css("font-size", "75px");
    $(this).find("h1").css("color", "rgba(178, 221, 236, 0.8)");
    $(this).find("h3").css("color", "rgba(178, 221, 236, 0.4)");
}

function projectOnClick(event)
{
    event.preventDefault();
    var target = $(this).attr("href");

    $(".fullimg").animate({
        "width": "100%",
        "opacity": "0"
    }, 500);

    setTimeout(function()
    {
        window.location = target;
    }, 550);

}
