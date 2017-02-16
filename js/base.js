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

    // On mouse entering left panel effect
    document.getElementById("panel").addEventListener("mouseenter", showSidebar);
    document.getElementById("panel").addEventListener("mouseleave", hideSidebar);
});

function showSidebar()
{
    $("#sidebarWrapper").animate({marginLeft: '0'}, 400);
}

function hideSidebar()
{
    $("#sidebarWrapper").animate({marginLeft: '300px'}, 500);
}
