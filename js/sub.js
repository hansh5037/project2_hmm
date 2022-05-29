$(function(){
    // 서브페이지 LNB 작동
    var mainNum = $("body").attr("class").slice(2,3);
    var sub2Num = $("body").attr("class").slice(4,5);
    var sub3Num = $("body").attr("class").slice(6,7);
    console.log(mainNum+","+sub2Num+","+sub3Num);
    $(".lnb-depth1 li").eq(mainNum).addClass("on");
    $(".lnb-depth2 .depth2-" + mainNum).show();
    $(".lnb-depth2 .depth2-" + mainNum + "> li").eq(sub2Num).addClass("on");
    $(".lnb-depth3 .depth3-" + mainNum + "-" + sub3Num).show();
    $(".lnb-depth3 .depth3-" + mainNum + "-" + sub3Num + " > li").eq(sub3Num).addClass("on");
     
    var lnb_btn = $(".lnb-btn li.on");
    lnb_btn.click(function(){
        $(this).parent().toggleClass("h-auto");
        $(this).parents().siblings().filter("ul");
        return false;
    });
    // 바닥 클릭하면 lnb접기
    $(document).click(function(e){
        if(!$(e.target).hasClass("lnb_btn")) {
            $(".lnb-btn").removeClass("h-auto");
        }
    });
});