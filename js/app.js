$(document).ready(function () {
    /* 
     * Variables
     */
    let btn_tabs = $('.btn__tab');
    let nav = $('.navigation-container');
    let navBtn = $('.nav_icon');
    let close_btn = $('.close');
    const searchPopUp = $('#search-popup-wrapper');
    const searchInput = $('#search-popup-wrapper input');
    const searchBtn = $('.search-container span');
    const searchClose = $('#search-close');
    /* 
     * Events
     */

    btn_tabs.on('click', function () {
        btn_tabs.removeClass('active');
        $(this).addClass('active');
    });


    //nav icon
    navBtn.on('click', () => {
        navBtn.addClass('btn-active');
        nav.addClass("nav_active");
    });
    close_btn.on('click', () => {
        navBtn.removeClass('btn-active');
        nav.removeClass("nav_active");
    });


    /* 
     * Owl Carosel
     */
    let header_slider = $(".slide");
    header_slider.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true
    });
    let testi_slider = $(".testi_slider");
    testi_slider.owlCarousel({
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

    let team_slider = $(".team_slide");

    team_slider.owlCarousel({
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
    $('.team_slider .prev').on("click", function () {
        team_slider.trigger('prev.owl.carousel');
    });
    $('.team_slider .next').on("click", function () {
        team_slider.trigger('next.owl.carousel');
    });
    let blog_slides = $(".blog_slides");
    blog_slides.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2,
            },
            960: {
                items: 3,
            },
            1280: {
                items: 4,
            },
            1600: {
                items: 5,
            },
            1920: {
                items: 6,
            }

        }
    });
    $('.blog__form .prev').on("click", function () {
        blog_slides.trigger('prev.owl.carousel');
    });
    $('.blog__form .next').on("click", function () {
        blog_slides.trigger('next.owl.carousel');
    });



    // init Isotope
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid_item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid_item',
        }
    });

    // filter items on button click
    $('.filter_grp').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    // SEarch Bar
    searchBtn.on('click', (e) => {
        searchPopUp.fadeIn();
        searchInput.focus();
    });
    searchClose.on('click', () => {
        searchPopUp.fadeOut();
    });

    // Scroll To Top
    $('.slideToTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 500) {
            $('.slideToTop').show();
        } else {
            $('.slideToTop').hide();
        }
    });


    //Counter
    var Count = $('.texts p:nth-child(1)');
    Count.each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 3000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
    });




});