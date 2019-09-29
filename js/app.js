/* Shortcode */
var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
/* 
 * Variables
 */
let btn_tabs = queryAll(".btn__tab");
let nav = query(".navigation-container");
let close_btn = query('.close');

/* 
 * Events
 */

$(document).ready(function () {
    btn_tabs.forEach(el => {
        el.addEventListener("click", () => {
            btn_tabs.forEach(tab => tab.classList.remove("active"));
            el.classList.add("active");
        });
    });
    //nav icon
    nav.addEventListener("click", () => nav.classList.add("nav_active"));
    close_btn.addEventListener("click", () => nav.classList.remove("nav_active"));

    /* 
     * Owl Carosel
     */

    $(".slide").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true
    });

    $(".testi_slider").owlCarousel({
        items: 2,
        loop: true,
        dots: false,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2
            }
        }
    });

    $(".team_slide").owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            650: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
});

// init Isotope
var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid_item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid_item'
    }
});

// filter items on button click
$('.filter_grp').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});