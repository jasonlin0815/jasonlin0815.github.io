$(document).ready(function()
{
    var displayIndex = 0;

    // Hide side description rapidly on start
    setTimeout(hideContent, 1000);

    // Description trigger on hover
    $(".content").hover(showContent, hideContent);

    // Thumbnail hover effect
    $(".gallery-img").hover(thumbnailHoverIn, thumbnailHoverOut);

    // Thumbnail onclick effect
    $(".gallery-img").on("click", thumbnailOnClick);

    // Hide gallery viewer
    setTimeout(hideGallery, 1000);

    // Trigger to show gallery
    $(".gallery-wrapper").hover(showGallery, hideGallery);

    $(".gallery-wrapper img").load(cropImage);
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
    if($(this).hasClass("selected"))
    {
        return;
    }
    else
    {
        $(this).find("img").css({
            "opacity": "1"
        });
    }
}

function thumbnailHoverOut()
{
    $(this).find("img").css({
        "opacity": "0.7"
    });
}

function hideGallery()
{
    $(".gallery-wrapper").animate({marginBottom: '-15%'}, 400);
}

function showGallery()
{
    $(".gallery-wrapper").animate({marginBottom: '0%'}, 400);
}

function thumbnailOnClick()
{
    var src = $(this).find("img").attr("src");

    // Revert previous selected img effect
    $(".selected").find("img").fadeTo(500, 0.7);
    $(".selected").removeClass("selected");

    // Add selected class to current selected image
    $(this).addClass("selected");
    $(".fullimg").fadeOut(500, function()
    {
        $(".fullimg").css("backgroundImage", "url(" + src + ")");
        $(".fullimg").fadeIn(500);
    });
    $(".selected").find("img").fadeIn(500);
}
