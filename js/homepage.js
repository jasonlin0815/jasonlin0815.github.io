// Animation for displaying messages
$(document).ready(function()
{
    // Removes noJS class from sidebar
    $("#sidebarWrapper").removeClass("noJS");

    // Cursor blinking
    setInterval('cursor()', 1000);

    // Terminal message display
    setTimeout(displayTerminalMsg, 600);

    // Center display
    setTimeout(displayCenterMsg, 3000);
});

// Cursor blinking effect
function cursor()
{
    $('#cursor')
    .animate({ opacity: 0 }, 'fast', 'swing')
    .animate({ opacity: 1 }, 'fast', 'swing');
}

// Display message on the terminal console effect
function displayTerminalMsg()
{
    var ele = document.getElementById("terminaldisp");

    // Delay values are relative to first animation not to overall window
    setTimeout(display, 0, "jasonlin@homepage: ~$ ", ele);
    setTimeout(typing, 500, "run ~/init", ele);
    setTimeout(display, 1500, "<br>Initializing environment...", ele);
    setTimeout(display, 2000, "<br>Loading user configurations...", ele);
    setTimeout(display, 2500, "<br>Executing program: intro.exe", ele);
    setTimeout(display, 3000, "<br>Hello, World!", ele);
    setTimeout(display, 3500, "<br>jasonlin@homepage: ~$ ", ele);
}

// Display message on the center of screen
function displayCenterMsg()
{
    var ele = document.getElementById("centerdisp");

    // All delays are relative to the first animation in the function
    setTimeout(typing, 0, "I am a", ele);
    setTimeout(erase, 1200, ele);
    setTimeout(typing, 2500, "Software Engineer.", ele);
}

// Support function to display the message without typing
function display(value, element)
{
    element.innerHTML += value;
}

// Support function to mimic typing effect
function typing(value, element)
{
    var arr = value.split("");

    var loopTimer = setInterval(function()
    {
        if(arr.length > 0)
        {
            element.insertAdjacentHTML('beforeend', arr.shift());
        }
        else
        {
            clearInterval(loopTimer);
        }
    }, 80);
}

// Support function to mimic erasing effect
function erase(element)
{
    var value = element.innerHTML;
    var length = value.length;

    var loopTimer = setInterval(function()
    {
        if(length >= 0)
        {
            element.innerHTML = value.substr(0, length--);
        }
        else
        {
            clearInterval(loopTimer);
        }
    }, 80);
}
