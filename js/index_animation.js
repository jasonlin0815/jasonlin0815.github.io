$(document).ready(function()
{
    setInterval(function()
    {
        $("#powerlight")
        .animate({ opacity: 0 }, 2000, 'swing')
        .animate({ opacity: 1 }, 1200, 'swing');
    }, 3500);
});

$('a').click(function(event)
{
    // Delay propagation to next page
    event.preventDefault();
    var dst = this.getAttribute("href");

    // Play short entering animation

    // Delay time
    setTimeout(function()
    {
        window.location = dst;
    });
});
