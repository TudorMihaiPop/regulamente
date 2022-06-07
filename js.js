$(document).ready(function () {

    $(document).on("contextmenu", function (e) {
        return false;
    });




    $('.carr').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: ".carr",
        prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="arr-prev" alt=""></div>',
        nextArrow: '<div class="next_arrow"><img src="img/next.png" class="arr-next" alt=""></div>'
        // prevArrow: '<button class="slide-arrow prev-arrow"><img src="/img/prev.png" class="arr-prev" alt=""></button>',
        // nextArrow: '<button class="slide-arrow next-arrow"><img src="/img/next.png" class="arr-next" alt=""></button>'
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////












































// COMUNE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $(".cui-btn").click(function () {
        $(".slide-container").load("div.html .cui", function (e) {


            $('.cui').slick({
                infinite: true,
                autoplay: true,
                arrows: true,
                prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
                nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
                slidesToShow: 1,
                slidesToScroll: 1
            });
            $('.carr').slick('slickPause')
            $('.slide-container').addClass('shadow')
            $(".pause-close-btns").css("display", "block")
        });
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".ordine-btn").click(function () {
    $(".slide-container").load("div.html .ordine", function (e) {
        $('.ordine').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $(".decizie544-btn").click(function () {
        $(".slide-container").load("div.html .decizie544", function (e) {


            $('.decizie544').slick({
                infinite: true,
                autoplay: true,
                arrows: true,
                prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
                nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
                slidesToShow: 1,
                slidesToScroll: 1
            });
            $('.carr').slick('slickPause')
            $('.slide-container').addClass('shadow')
            $(".pause-close-btns").css("display", "block")
        });
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $(".decizie1644-btn").click(function () {
        $(".slide-container").load("div.html .decizie1644", function (e) {
            $('.decizie1644').slick({
                infinite: true,
                autoplay: true,
                arrows: true,
                prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
                nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
                slidesToShow: 1,
                slidesToScroll: 1
            });
            $('.carr').slick('slickPause')
            $('.slide-container').addClass('shadow')
            $(".pause-close-btns").css("display", "block")
        });
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $(".decizie982-btn").click(function () {
        $(".slide-container").load("div.html .decizie982", function (e) {
            $('.decizie982').slick({
                infinite: true,
                autoplay: true,
                arrows: true,
                prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
                nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
                slidesToShow: 1,
                slidesToScroll: 1
            });
            $('.carr').slick('slickPause')
            $('.slide-container').addClass('shadow')
            $(".pause-close-btns").css("display", "block")
        });
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $(".decizie2524-btn").click(function () {
        $(".slide-container").load("div.html .decizie2524", function (e) {
            $('.decizie2524').slick({
                infinite: true,
                autoplay: true,
                arrows: true,
                prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
                nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
                slidesToShow: 1,
                slidesToScroll: 1
            });
            $('.carr').slick('slickPause')
            $('.slide-container').addClass('shadow')
            $(".pause-close-btns").css("display", "block")
        });
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


















// JOCURI
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".pegasus-btn").click(function () {
    $(".slide-container").load("div.html .pegasus", function (e) {


        $('.pegasus').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".jpl-btn").click(function () {
    $(".slide-container").load("div.html .jpl", function (e) {


        $('.jpl').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".impera6-btn").click(function () {
    $(".slide-container").load("div.html .impera6", function (e) {


        $('.impera6').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".egt-btn").click(function () {
    $(".slide-container").load("div.html .egt", function (e) {


        $('.egt').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".egt4-btn").click(function () {
    $(".slide-container").load("div.html .egt4", function (e) {


        $('.egt4').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".fiveofkings-btn").click(function () {
    $(".slide-container").load("div.html .fiveofkings", function (e) {


        $('.fiveofkings').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".hbp7-btn").click(function () {
    $(".slide-container").load("div.html .hbp7", function (e) {


        $('.hbp7').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".hsg-btn").click(function () {
    $(".slide-container").load("div.html .hsg", function (e) {


        $('.hsg').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".igt-btn").click(function () {
    $(".slide-container").load("div.html .igt", function (e) {


        $('.igt').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".impera-btn").click(function () {
    $(".slide-container").load("div.html .impera", function (e) {


        $('.impera').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".playmax40-btn").click(function () {
    $(".slide-container").load("div.html .playmax40", function (e) {


        $('.playmax40').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".ruleta-btn").click(function () {
    $(".slide-container").load("div.html .ruleta", function (e) {


        $('.ruleta').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ///////////////     SPECIFICE

// NASAUD
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".jackpot-nasaud-btn").click(function () {
    $(".slide-container").load("div.html .jackpot-nasaud", function (e) {


        $('.jackpot-nasaud').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".constatator-nasaud-btn").click(function () {
    $(".slide-container").load("div.html .constatator-nasaud", function (e) {


        $('.constatator-nasaud').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FAGARAS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".constatator-fagaras-btn").click(function () {
    $(".slide-container").load("div.html .constatator-fagaras", function (e) {


        $('.constatator-fagaras').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".jackpot-fagaras-btn").click(function () {
    $(".slide-container").load("div.html .jackpot-fagaras", function (e) {


        $('.jackpot-fagaras').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".lasvegasgamesandfun-fagaras-btn").click(function () {
    $(".slide-container").load("div.html .lasvegasgamesandfun-fagaras", function (e) {


        $('.lasvegasgamesandfun-fagaras').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".maritiandrefood-fagaras-btn").click(function () {
    $(".slide-container").load("div.html .maritiandrefood-fagaras", function (e) {


        $('.maritiandrefood-fagaras').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".mutare-fagaras-btn").click(function () {
    $(".slide-container").load("div.html .mutare-fagaras", function (e) {


        $('.mutare-fagaras').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".pariuri-fagaras-btn").click(function () {
    $(".slide-container").load("div.html .pariuri-fagaras", function (e) {


        $('.pariuri-fagaras').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".promotie-fagaras-btn").click(function () {
    $(".slide-container").load("div.html .promotie-fagaras", function (e) {


        $('.promotie-fagaras').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FALTICENI
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".constatator-falticeni-btn").click(function () {
    $(".slide-container").load("div.html .constatator-falticeni", function (e) {


        $('.constatator-falticeni').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".jackpot-falticeni-btn").click(function () {
    $(".slide-container").load("div.html .jackpot-falticeni", function (e) {


        $('.jackpot-falticeni').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".mutare-falticeni-btn").click(function () {
    $(".slide-container").load("div.html .mutare-falticeni", function (e) {


        $('.mutare-falticeni').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SIMLEU
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".constatator-simleu-btn").click(function () {
    $(".slide-container").load("div.html .constatator-simleu", function (e) {


        $('.constatator-simleu').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".jackpot-simleu-btn").click(function () {
    $(".slide-container").load("div.html .jackpot-simleu", function (e) {


        $('.jackpot-simleu').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".mutare-simleu-btn").click(function () {
    $(".slide-container").load("div.html .mutare-simleu", function (e) {


        $('.mutare-simleu').slick({
            infinite: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<div class="left_arrow"><img src="img/prev.png" class="reg-prev-arr" alt=""></div>',
            nextArrow: '<div class="next_arrow"><img src="img/next.png" class="reg-next-arr" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.carr').slick('slickPause')
        $('.slide-container').addClass('shadow')
        $(".pause-close-btns").css("display", "block")
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


































/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $(".pause-btn").click(function () {
        $('.slide-container').children().slick('slickPause')
        logOutTime = 60000
        $(".pause-btn").css("display", "none")
        $(".exit-btn").css("display", "block")
        resetTimer()
        // console.log($('.slide-container').children())

    });

    $(".exit-btn").click(function () {
        $(".slide-container").load("div.html .empty")
        $(".pause-btn").css("display", "block")
        $(".exit-btn").css("display", "none")
        $(".pause-close-btns").css("display", "none")
        $('.slide-container').removeClass('shadow')
        $('.carr').slick('slickPlay')
        resetTimer()
        logOutTime = 30000
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let logOutTime = 30000

let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmouseover = resetTimer;
    document.onkeypress = resetTimer;
    document.ontouchstart = resetTimer;
    document.ontouchend = resetTimer;
    document.ontouchmove = resetTimer;
    function logout() {
        //   alert("egt4u are now logged out.")
        $(".slide-container").load("div.html .empty")
        $('.carr').slick('slickPlay')
        // $(".egt4").css("display", "none");
        $('.slide-container').removeClass('shadow')
        $(".pause-btn").css("display", "block")
        $(".exit-btn").css("display", "none")
        $(".pause-close-btns").css("display", "none")
        logOutTime = 30000
        // $( ".exit-btn" ).css("display", "none")
        // $( ".pause-btn" ).css("display", "none")
    }


    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, logOutTime)
    }
};
window.onload = function () {
    inactivityTime();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
