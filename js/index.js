$(function() {
        var elem = $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
            {
           // height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                console.log(percent);
            }
        });
        $(window).resize(function() {
          if ($(window).width() <= 768) {
            elem.destroy();
          }
          else {
            elem.reinitialize();
          }
        });
    });

var start = (function() {
    function scrollTop() {
        return window.scrollTop || document.body.scrollTop || (document.documentElement && document.documentElement.scrollTop)
    }

    var top = scrollTop();
    var interval;
    window.onscroll = function() {
        var newtop = scrollTop();
        if (newtop < top) {
            clearInterval(interval);
        }
        top = newtop;
    };
    return function() {
        interval = setInterval(function() {
            window.scrollBy(0, 1);
        }, 100);
    }
}());

start();
