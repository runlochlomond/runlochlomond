//= require countdown.min.js

document.addEventListener("DOMContentLoaded", function(event) { 
    setTime = function() {
        var elements = document.getElementsByClassName('countdown');
        var unitsToHide = ~(countdown.MONTHS | countdown.WEEKS | countdown.MILLISECONDS);

        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var classes = el.className.split(' ');

            var matchedClass = null;
            for (var j = 0; j < classes.length; j++) {
                var cls = classes[j];
                if (cls.startsWith('countdown-')) {
                    matchedClass = cls;
                }
            };

            matchedClass = matchedClass.replace('countdown-', '');
            var date = new Date(matchedClass);
            el.innerHTML = countdown(null, date, unitsToHide).toString();
        }

        setInterval(setTime, 1000);
    }

    setInterval(setTime, 1000);
});