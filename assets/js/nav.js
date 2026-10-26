// Hamburger-Menue fuer die Handy-Ansicht (Breakpoint 768px, siehe style.css)
(function () {
    var navbar = document.querySelector('.navbar');
    var toggle = document.querySelector('.navbar__toggle');
    var menu = document.getElementById('navbar-menu');
    if (!navbar || !toggle || !menu) {
        return;
    }
    var icon = toggle.querySelector('i');

    function setOpen(open) {
        navbar.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
        icon.className = open ? 'ri-close-line' : 'ri-menu-line';
    }

    toggle.addEventListener('click', function () {
        setOpen(!navbar.classList.contains('is-open'));
    });

    // Nach Klick auf einen Link, Escape, Klick ausserhalb oder Wechsel auf Desktop-Breite schliessen
    menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
            setOpen(false);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    });

    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target)) {
            setOpen(false);
        }
    });

    window.matchMedia('(min-width: 769px)').addEventListener('change', function (e) {
        if (e.matches) {
            setOpen(false);
        }
    });
})();
