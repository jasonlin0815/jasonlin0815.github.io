$(document).ready(function()
{
    // Hide side description rapidly on start
    setTimeout(hideContent, 1000);

    // Description trigger on hover
    $(".content-trigger").hover(showContent, hideContent);

    // Thumbnail hover effect
    $(".gallery-img").hover(thumbnailHoverIn, thumbnailHoverOut);

    // Thumbnail onclick effect
    $(".gallery-img").on("click", thumbnailOnClick);

});

function showContent()
{
    $(".content").animate({marginLeft: '0%'}, 400);
}

function hideContent()
{
    $(".content").animate({marginLeft: '-49%'}, 400);
}

function thumbnailHoverIn()
{
    if(!$(this).hasClass("selected"))
    {
        $(this).find("img").css({
            "border": "4px solid rgba(178, 221, 236, 0.7)"
        });
    }
}

function thumbnailHoverOut()
{
    $(this).find("img").css({
        "border": "0"
    });
}

function thumbnailOnClick()
{
    var src = $(this).find("img").attr("src");
    $(".selected").css({
        "border": "0"
    })
    $(this).addClass("selected");
    $(".fullimg").fadeOut(500, function()
    {
        $(".fullimg").css("backgroundImage", "url(" + src + ")");
        $(".fullimg").fadeIn(500);
    });
}
