document.addEventListener('DOMContentLoaded', function(event) {
    var navbar = (document.getElementsByClassName('navbar'))[0];
    var offset = navbar.offsetTop + navbar.clientHeight;

    function onResize() {
        document.body.classList.remove('has-docked-nav');
        offset = navbar.offsetTop + navbar.clientHeight;
        onScroll();
    }

    function onScroll() {
        if (!document.body.classList.contains('has-docked-nav'))
            offset = navbar.offsetTop + navbar.clientHeight;

        if (offset < window.scrollY && !document.body.classList.contains('has-docked-nav'))
            document.body.classList.add('has-docked-nav');

        if (offset > window.scrollY && document.body.classList.contains('has-docked-nav'))
            document.body.classList.remove('has-docked-nav');
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    onScroll();
});