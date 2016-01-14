/*
 *  Author: Ray
 *  URL: https://github.com/FalseFlash
 *  Feel free to improve this. Just something quick I whipped up for my needs.
 *  
 * Example Use:
 * $('.clicky').luxScrollTo(); - Default values.
 * $('.clicky').luxScrollTo(1); - Scroll to time in seconds.
 * $('.clicky').luxScrollTo(1, 200); - Time and scroll offset
 * $('.clicky').luxScrollTo(1, null, '#GoToScroll'); - Time, no scroll offset and a target.
 */

(function ($) {
    // Time it takes in seconds to scroll to target.
    var scrollTime = 1;
    var offset = 200;

    $.fn.luxScrollTo = function (time, offset, target) {
        scrollTime = time * 1000 || scrollTime * 1000;
        try {
            // If target is not filled then try to get one.
            if (typeof target === 'undefined')
                target = $(this).data('scrollto');
            
            // Try to test for an element.
            // Return an error if not found.
            if (typeof target === 'undefined')
                throw 'luxScrollTo: Could not find target \'' + target + '\'';
        }
        catch(err) {
            return console.log(err);
        }
        finally {
            $(this).click(function (e) {
                if (typeof offset === 'undefined') {
                    $('html, body').animate({
                        scrollTop: $(target).offset().top
                    }, scrollTime);
                } else {
                    $('html, body').animate({
                        scrollTop: $(target).offset().top - offset
                    }, scrollTime);
                }
            });
        }
    }

}(jQuery));
