$(function() {

    var header = $("#header");
    var headerH = $("#header").innerHeight();
    var scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });


    function checkScroll(scrollOffset) {
        if( scrollOffset >= headerH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        } 
    }


    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this), blockId = $(this).data('scroll'), blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    });
    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this), blockId = $this.data('scroll'), blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    });    


    /* Registration */
    $("#reg_btn").on("click", function(event) {
        event.preventDefault();

        $(this).addClass("active");
        $("#reg_pole").addClass("active");
    });

    $("#reg_close").on("click", function(event) {
        event.preventDefault();

        $("#reg_pole").toggleClass("active");
    });


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    $("#nav").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav_toggle").toggleClass("active");
    })


    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true, 
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});