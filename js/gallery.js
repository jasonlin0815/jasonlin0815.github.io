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
    $(".gallery-img iframe").on("click", thumbnailOnClick);

    // Hide gallery viewer
    setTimeout(hideGallery, 1000);

    // Trigger to show gallery
    $(".gallery-wrapper").hover(showGallery, hideGallery);
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
         var src = $(this).find("img");

        // Revert previous selected img effect
        $(".selected").find("img").fadeTo(500, 0.7);
        $(".selected").removeClass("selected");

        // Remove iframe in fullimg div
        $(".fullimg iframe").remove();

        // Add selected class to current selected image
        $(this).addClass("selected");
        $(".fullimg").fadeOut(500, function()
        {
            if(src.hasClass("video"))
            {
                var url = "https://www.youtube.com/embed/" + src.attr("id");
                $(".fullimg").css("backgroundImage", "none");

                // Build iframe tag
                var iframe = $("<iframe>", {"src": url});
                $(".fullimg").append(iframe);
            }
            else
            {
                // Find image source
                var url = src.attr("src").split(".", 1);
                var jpgurl = url[0] + ".jpg";

                // Replace with jpeg version
                $(".fullimg").css("backgroundImage", "url(" + jpgurl + ")");
            }
            $(".fullimg").fadeIn(500);
        });
        $(".selected").find("img").fadeIn(500);

}
