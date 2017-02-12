$(document).ready(function()
{
    setInterval(function()
    {
        $("#powerlight")
        .animate({ opacity: 0 }, 2000, 'swing')
        .animate({ opacity: 1 }, 1200, 'swing');
    }, 3500);
});
