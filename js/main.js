$(function(){
    // 비주얼 슬라이딩
    const mv = $(".main-visual");
    const mvH = $(window).height();
    $(".main-visual").css("height", mvH);
    const mvTotal = mv.children().length; // 메인배너 개수
    let num = 0; //초기 값
    let mvPos = num * (-100) + "%";
    const speed = 3000;
    let mvInt = setInterval(autoMove , speed);
    let chk = 0;
    init();
    $(".mv-btn-toggle").click(function(){
      chk++;
      chk = chk % 2;
      $(this).toggleClass("fa-play fa-pause");
      if(chk == 1){
          clearInterval(mvInt);
      } else {
          mvInt = setInterval(autoMove , speed);
      }
    });
    $(".mv-btn").click(function(){
        clearInterval(mvInt);
        num = $(this).index();
        mvMove();
        mvInt = setInterval(autoMove , speed);
    });
    function autoMove(){
        num++;
        if(num == mvTotal) {
            num = 0;
        } 
        mvMove();
    }
    function mvMove(){
        mvPos = num * (-100) + "%";
        mv.css("left" , mvPos);
        $(".mv-btn").filter(".active").removeClass("active");
        $(".mv-btn:eq(" + num + ")").addClass("active");
    }
    function init(){
        $(".mv-btn:eq(" + num + ")").addClass("active");
        mvPos = num * (-100) + "%";
        mv.css("left" , mvPos);
    }

    // animation
    let wH = $(window).height();
    let scTop = $(window).scrollTop();
    $(".auto-ani").addClass("ani-play");
    $(".ani").each(function(){
        let trg = $(this);
        let trgOffsetMin = trg.offset().top - wH;
        let trgOffsetMax = trg.offset().top + trg.height();
        $(window).scroll(function(){
            scTop = $(window).scrollTop();
            if(scTop > trgOffsetMin && scTop < trgOffsetMax){
                trg.addClass("ani-play");
            }else {
                trg.removeClass("ani-play");
            }
        });
    });

    // 탭 구현
    let tabBtn = $(".main-tab-btn button");
    let tabCon = $(".main-tab-contents .wrap > div");
    let selNum = 0;
    tabBtn.eq(selNum).addClass("active");
    tabCon.eq(selNum).show();
    tabBtn.click(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        selNum = $(this).index();
        tabCon.hide();
        tabCon.eq(selNum).show();
    });
    $(".main-tab-btn button:eq(1)").click(function(){
      alert('로그인 후 이용가능 합니다.');
    });
    $(".main-tab-btn button:eq(2)").click(function(){
      alert('로그인 후 이용가능 합니다.');
    });
    $(".main-tab-btn button:eq(3)").click(function(){
      alert('로그인 후 이용가능 합니다.');
    });

    // business
    $(".main-biz ul").addClass("on");
    $(".main-biz li:eq(0)").addClass("active")
    $(".main-biz li").mouseenter(function(){
      $(this).parent().addClass("on");
  		$(this).addClass("active");
  		$(this).siblings().removeClass("active");
    });
    $(".main-biz li").mouseleave(function(){
      // $(this).parent().removeClass("on");
  		// $(this).removeClass("active");
    });
    $(".main-biz li a").click(function(e){
      e.preventDefault();
    });

    // 뉴스
    var newsSwiper = new Swiper(".news-box", {
      slidesPerView: 1,
      spaceBetween : 40,
      loop: true,
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween : 20,
        },
        768: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween : 30,
        },
        1500: {
          slidesPerView: 4,
        },
      },
      pagination: {
        el: ".main-latestnews-container .swiper-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          var pageNum = current < 10 ? '0' + current : current
          var pageTotal = total < 10 ? '0' + total : total
          var barWidth = (1 / total * current).toFixed(6) * 100 + '%'
          $(".page-num").text(pageNum);
          $(".page-total").text(pageTotal);
          $(".swiper-pagination-progressbar-fill").css("width",barWidth);
        },
      },

      navigation: {
          nextEl: ".latestnews-cnt .swiper-button-next",
          prevEl: ".latestnews-cnt .swiper-button-prev",
      },
    });
    
});