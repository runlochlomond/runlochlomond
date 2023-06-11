document.addEventListener("DOMContentLoaded", function(event) {
    setTime = function() {
        var elements = document.getElementsByClassName('countdown');
        var unitsToHide = ~(countdown.MONTHS | countdown.WEEKS | countdown.MILLISECONDS);

        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var dateText = el.dataset.countdown;
            var today = new Date();
            var date = new Date(dateText);
            if (date <= today) {
                el.innerHTML = 'Next year\'s race dates to be announced.';
            } else {
                el.innerHTML = countdown(null, date, unitsToHide).toString();
            }
        }
    }

    setInterval(setTime, 1000);
});
