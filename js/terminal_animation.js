$(document).ready(function()
{
    // Cursor blinking
    setInterval('cursor()', 1000);

    // Navigation options pop up
    //navPopUp();

    // Terminal message display
    displayTerminalMsg();

    // Center display
    displayCenterMsg();

    // Enable Buttons
    enableButtons();
});

function cursor()
{
    $('#cursor')
    .animate({ opacity: 0 }, 'fast', 'swing')
    .animate({ opacity: 1 }, 'fast', 'swing');
}

function navPopUp()
{
    function navItemFloat(time, item)
    {
        setTimeout(function()
        {
            item.animate({ opacity: 1 }, 100);
        }, time);
    }

    navItemFloat(200, $('#hometab'));
    navItemFloat(300, $('#abouttab'));
    navItemFloat(400, $('#resumetab'));
    navItemFloat(500, $('#profoliotab'));
}

function displayTerminalMsg()
{
    ele = document.getElementById("terminal");

    display(100, "jasonlin@homepage: ~$ ", ele);
    type(1400, "run ~/init", ele);
    display(2700, "<br>Initializing environment...", ele);
    display(2900, "<br>Loading user configurations...", ele);
    display(3100, "<br>Executing program: intro.exe", ele);
    display(3300, "<br>Hello, World!", ele);
    display(3600, "<br>jasonlin@homepage: ~$ ", ele);
}

function displayCenterMsg()
{
    ele = document.getElementById("center-info");

    type(4000, "I am a", ele);
    erase(5000, ele);
    type(5500, "Software Engineer.", ele);
}

function enableButtons()
{
    setTimeout(function()
    {
        document.getElementById("btnRes").disabled = false;
        document.getElementById("btnCon").disabled = false;

        $('#btnRes').animate({ opacity: 1 }, 'fast', 'swing');
        $('#btnCon').animate({ opacity: 1 }, 'fast', 'swing');
    }, 6000);
}

function display(time, value, element)
{
    setTimeout(function()
    {
        element.innerHTML += value;
    }, time);
}

function type(time, value, element)
{
    var arr = value.split("");

    setTimeout(function()
    {
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
    }, time);
}

function erase(time, element)
{
    var value;
    var length;

    setTimeout(function()
    {
        value = element.innerHTML;
        length = value.length;

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
        }, 80)
    }, time);
}
