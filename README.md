# LuxScrollTo
Scroll to an element or section either by clicking a link, button, etc using jQuery.

# Using Data
You can choose where you want to scroll by using the data-scrollto attr. This can also be set in the script (see below).
 ```html
<a href="#" data-scrollto="#maincontent" class="arrow-down-link">Some Link</a>
 ```

# Script Example Use
 ```javascript
 $('.clicky').luxScrollTo(); // Default values.
 
 $('.clicky').luxScrollTo(1); // Scroll to time in seconds.
 
 $('.clicky').luxScrollTo(1, 200); //  Time in seconds. and scroll offset
 
 $('.clicky').luxScrollTo(1, null, '#GoToScroll'); // Time, no scroll offset and a target.
