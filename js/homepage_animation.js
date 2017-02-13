$(document).ready(function()
{
    // Cursor blinking
    setInterval('cursor()', 1000);

    // Navigation onMouseEnter event
    setTimeout(navTabMsg, 5000);

    // Terminal message display
    setTimeout(displayTerminalMsg, 1000);

    // Center display
    setTimeout(displayCenterMsg, 4000);

    // Enable Buttons
    setTimeout(enableButtons, 8500);
});

function navTabMsg()
{
    var nav = document.getElementById("nav");
    var ele = document.getElementById("hovercmd");
    var loopTimer;

    // Add mouseenter event
    nav.addEventListener('mouseover', navTabOnEnter, false);

    // Add mouseleave event
    nav.addEventListener('mouseleave', navTabOnExit, false);

    function navTabOnEnter(event)
    {
        var cmd = "";
        ele.innerHTML = "";

        if(event.target.className === "current")
            ele.innerHTML = "";
        else
            cmd = "load ~/" + event.target.id;

        var arr = cmd.split("");
        loopTimer = setInterval(function()
        {
            if(arr.length > 0)
                ele.insertAdjacentHTML('beforeend', arr.shift());
            else
                clearInterval(loopTimer);
        }, 80);
    }

    function navTabOnExit(event)
    {
        clearInterval(loopTimer);
        ele.innerHTML = "";
    }
}

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
    setTimeout(typing, 700, "run ~/init", ele);
    setTimeout(display, 1800, "<br>Initializing environment...", ele);
    setTimeout(display, 2200, "<br>Loading user configurations...", ele);
    setTimeout(display, 2700, "<br>Executing program: intro.exe", ele);
    setTimeout(display, 3300, "<br>Hello, World!", ele);
    setTimeout(display, 4000, "<br>jasonlin@homepage: ~$ ", ele);
}

// Display message on the center of screen
function displayCenterMsg()
{
    var ele = document.getElementById("infodisp");

    // All delays are relative to the first animation in the function
    setTimeout(typing, 0, "I am a", ele);
    setTimeout(erase, 1500, ele);
    setTimeout(typing, 3000, "Software Engineer.", ele);
}

// Clickable buttons appearing on screen
function enableButtons()
{
    // Enable both buttons
    document.getElementById("btnRes").disabled = false;
    document.getElementById("btnCon").disabled = false;

    // Animate the appearing effect
    $('#btnRes').animate({ opacity: 1 }, 'fast', 'swing');
    $('#btnCon').animate({ opacity: 1 }, 'fast', 'swing');
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
