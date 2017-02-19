$(document).ready(function()
{
    // Logo onclick event
    var logo = document.getElementById("logo");
    logo.onclick = function(event)
    {
        if(document.getElementById("sidebar").style.display === "none")
            showSidebar();
        else
            hideSidebar();
    }

    // Right panel hover event
    // Delay effect to prevent sidebar poping right out after page transition
    setTimeout(function()
    {
        $(".rightpanel").hover(showSidebar, hideSidebar);
    }, 500);

    // Internal link hover effect
    $(".internal").hover(dimCurrent, litCurrent);

    // Internal anchor hover effect
    $(".internal li").hover(internalHoverIn, internalHoverOut);
});

function showSidebar()
{
    $(".sidebar-wrapper").animate({marginLeft: '0'}, 400);
}

function hideSidebar()
{
    $(".sidebar-wrapper").animate({marginLeft: '300px'}, 500);
}

function dimCurrent()
{
    $(".current").find("a").css('borderBottom', '2px solid rgba(83, 80, 87, 0.3)');
}

function litCurrent()
{
    $(".current").find("a").css('borderBottom', '2px solid rgba(83, 80, 87, 1)');
}

function internalHoverIn()
{
    $(this).find("a").css('borderBottom', '2px solid rgba(83, 80, 87, 1)');
}

function internalHoverOut()
{
    if($(this).hasClass('current'))
        $(this).find("a").css('borderBottom', '2px solid rgba(83, 80, 87, 0.3)');
    else
        $(this).find("a").css('borderBottom', 'none');
}
