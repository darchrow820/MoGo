$(function() {

    let introH = $("#intro").innerHeight();
    let header = $("#header");
    let scrollOffset = $(window).scrollTop();

    // Fixed header
    checkScroll(scrollOffset)

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll() {
        
        if (scrollOffset >= introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
        blockID = $(this).data("scroll"),
        blockOffset = $(blockID).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    // Menu toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active")
    })

});
