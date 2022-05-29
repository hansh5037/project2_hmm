$(function(){
    AOS.init();
    // gnb
    $("#hmm-gnb > .depth1").on("mouseover",function(){
        $(this).find(".depth2").stop().show();
        $("#header").addClass("active");
    });
    $("#hmm-gnb > .depth1").on("mouseout",function(){
        $(this).find(".depth2").stop().hide();
        $("#header").removeClass("active");
    });

    //스크롤시 header 고정
    var jbOffset = $("#header").height();
    $(window).scroll( function() {
        if ( $( document ).scrollTop() > jbOffset) {
            $("#header").addClass("fixed");
        } else {
            $("#header").removeClass("fixed");
        }
    });

    // 모바일
    $(".m-language-btn li > a").click(function(){
        $(this).parent().siblings().removeClass("active-line");
        $(this).parent().toggleClass("active-line")
    });
    $(".m-open-btn").click(function(){
        $(".mobile").fadeIn(400);
        $("body").css('overflow','hidden').css('display','fixed');
        $("#m-gnb .depth1").removeClass("active");
        $(".depth2").stop().slideUp(100);
    });
    $(".m-close-btn").click(function(){
        $(".mobile").fadeOut(400);
        $("body").css('overflow','').css('display','');
    });
    // 모바일 gnb
    $("#m-gnb .depth1 > a").click(function(){
        $(this).parent().siblings().removeClass("active");
        $(this).parent().toggleClass("active");
        $(this).next().stop().slideToggle(400);
        $(this).parent().siblings().find(".depth2").stop().slideUp(400);
        return false;
    });

    // sitemap
    $(".sitemap-open-btn").click(function(){
        $(".modal").show();
        $(".sitemap-close-btn").show();
    });
    $(".sitemap-close-btn").click(function(){
        $(".modal").hide();
        $(".sitemap-close-btn").hide();
    });
    
    // 위로
    let wH = $(window).height();
    let scTop = $(window).scrollTop();
    $(window).scroll(function(){
        scTop = $(window).scrollTop();
        if(scTop > wH/2){
            $(".gototop").fadeIn(300);
        } else {
            $(".gototop").fadeOut(300);
        }
    });
    $(".gototop").click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 1200);
    });
});