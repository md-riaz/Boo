/* Shortcode */
var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
/* 
 * Variables
 */
let btn_tabs = queryAll(".btn__tab");
/* 
 * Events
 */
btn_tabs.forEach(el => {
    el.addEventListener("click", () => {
        btn_tabs.forEach(tab => tab.classList.remove("active"));
        el.classList.add("active");
    });
});

/* 
 * Owl Carosel
 */
$(document).ready(function () {

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