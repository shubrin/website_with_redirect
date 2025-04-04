
// 현재 경로가 루트(index.html)일 때만 리다이렉트 실행
const pathname = window.location.pathname;
const isHomePage = pathname.endsWith("/") || pathname.endsWith("/index.html") || pathname === "/";

// 모바일 기기인지 확인
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isHomePage) {
    if (isMobile && !location.href.includes("mobile.html")) {
        window.location.href = "mobile.html";
    } else if (!isMobile && !location.href.includes("index.html")) {
        window.location.href = "index.html";
    }
}

// // 모바일 기기인지 확인하고 해당 페이지로 리다이렉트
// if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
//     if (!location.href.includes("mobile.html")) {
//         window.location.href = "mobile.html";
//     }
// } else {
//     if (!location.href.includes("index.html")) {
//         window.location.href = "index.html";
//     }
// }


$(function(){
    //logo img에 마우스 over하면
    // $(".logo").hover(function(){
    //     $(".img_logo").css("visibility", "hidden");
    //     $(".txt_logo").css("visibility", "visible");
    // }, function(){
    //     $(".img_logo").css("visibility", "visible");
    //     $(".txt_logo").css("visibility", "hidden");
    // });
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 100){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
            $("#header").addClass("deactive");
        }
    });
    $("#menu-toggle").click(function () {
        $("#mobile-menu").slideToggle(); // 메뉴 토글
    });
      $(".mobile-menu a").click(function () {
        $("#mobile-menu").slideUp();
    });
    //다크모드
    $("#dark-toggle").click(function () {
        $("body").toggleClass("dark-mode");
      
        // 아이콘 바꾸기
        const isDark = $("body").hasClass("dark-mode");
        $(this).text(isDark ? "☀️" : "🌙");
    });

    //s1 슬라이드
    let swiper1 = new Swiper(".swiper1", {
        loop:true,
        autoplay:{
            delay:4000
        },
        slidesPerView: 1,
        breakpoints: {
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.7,
            }
          },
        spaceBetween:24,
        navigation:{
            prevEl:".swiper-button-prev",
            nextEl:".swiper-button-next",
        }
    });
    //s2 슬라이드 애니메이션
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".s2", {
    scrollTrigger: {
        trigger: ".s2",
        start: "top 80%", // 화면의 80% 지점에서 시작
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
    });

    //st 흐르는 글자
    let $text = $(".inner .track");
    let $wrap = $(".inner");
    //track를 복제하여 .inner에 추가함
    $text.clone().appendTo($wrap);
    TweenMax.to($wrap, 80, {
        x: -($text.width()),   //오른쪽에서 왼쪽으로
        ease: Linear.easeNone, //등속운동
        repeat: -1             //무한반복
    });


    //s3 swiper slide
    let swiper2= new Swiper(".swiper2", {
        loop:true,
        autoplay:{
            delay:4000
        },
        navigation:{
            prevEl:".s3 .swiper-button-prev",
            nextEl:".s3 .swiper-button-next",
        }
    });
    gsap.registerPlugin(ScrollTrigger);

    //s3 슬라이드 애니메이션
    gsap.to(".s3", {
    scrollTrigger: {
        trigger: ".s3",
        start: "top 80%", // 화면의 80% 지점에서 시작
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
    });
    // //.s4 swiper slide
    // let swiper5= new Swiper(".swiper5", {
    //     loop:true,
    //     slidesPerView:2,
    //     navigation:{
    //         prevEl:".s4 .swiper-button-prev",
    //         nextEl:".s4 .swiper-button-next",
    //     }
    // });

    //s4 swiper
    let swiper3 = new Swiper(".mainSwiper",{
        effect:"fade",
        fadeEffect:{
            crossFade:true
        },
        //watchSlidesProgress:true,
        loop:true,
        autoplay:{
            delay:4000
        },
        speed:500,
        pagination:{
            el:".swiper-pagination",
            clickable:true,
            type:"bullets",
            renderBullet:function(index, className){
                return '<span class="' + className + '"><i></i><b></b></span>';
            }
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        }
    });
    //s4 애니메이션
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".s4", {
    scrollTrigger: {
        trigger: ".s4",
        start: "top 80%", // 화면의 80% 지점에서 시작
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
    });
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".s5", {
    scrollTrigger: {
        trigger: ".s5",
        start: "top 80%", // 화면의 80% 지점에서 시작
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
    });
    //s6 swiper
    let swiper4 = new Swiper(".swiper3", {
        loop:true,
        autoplay:{
            delay:4000
        },
        slidesPerView:1,
        breakpoints: {
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.7,
            }
          },
        spaceBetween:24,
        navigation:{
            prevEl:".swiper-button-prev",
            nextEl:".swiper-button-next",
        }
    });
    //s6 애니메이션
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".s6", {
    scrollTrigger: {
        trigger: ".s6",
        start: "top 80%", // 화면의 80% 지점에서 시작
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
    });

    //s7 애니메이션
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".s7", {
    scrollTrigger: {
        trigger: ".s7",
        start: "top 80%", // 화면의 80% 지점에서 시작
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
    });
    //s8
    gsap.to(".s8", {
        scrollTrigger: {
            trigger: ".s8",
            start: "top 80%", // 화면의 80% 지점에서 시작
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.to(".ceo-intro", {
        scrollTrigger: {
            trigger: ".ceo-intro",
            start: "top 80%", // 화면의 80% 지점에서 시작
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });
    gsap.to(".grap-box", {
        scrollTrigger: {
            trigger: ".grap-box",
            start: "top 80%", // 화면의 80% 지점에서 시작
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });
    gsap.to(".map-box", {
        scrollTrigger: {
            trigger: ".map-box",
            start: "top 80%", // 화면의 80% 지점에서 시작
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });
    gsap.to(".work-box", {
        scrollTrigger: {
            trigger: ".work-box",
            start: "top 80%", // 화면의 80% 지점에서 시작
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });
    gsap.to(".policy1", {
        scrollTrigger: {
            trigger: ".policy1",
            start: "top 80%", // 화면의 80% 지점에서 시작
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });
    
    gsap.to(".st", {
        scrollTrigger: {
            trigger: ".st",
            start: "top 80%", // 화면의 80% 지점에서 시작
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });




    //top버튼(.top-btn)
    //footer영역에서는 footer의 중간에 위치하다가 footer영역이 사라지면 화면 오른쪽 아래에 고정된 위치로 설정
    const topBtn = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const $target = entry.target;
            if(entry.isIntersecting){
                document.querySelector(".top-btn").classList.add("fixed");
            }else{
                document.querySelector(".top-btn").classList.remove("fixed");
            }
        });
    });
    const $top = document.querySelectorAll("footer");
    $top.forEach((item) => {
        topBtn.observe(item);
    });
    $(window).scroll(function(){
        //화면 위쪽에서는 top-btn이 안 보이다가 500px정도 스크롤되면 top-btn보임
        if($(this).scrollTop() > 500){
            $(".top-btn").addClass("show");
        }else{
            $(".top-btn").removeClass("show"); 
        }
    });
    //top-btn을 클릭하면 화면 맨 위로 이동
    $(".top-btn").click(function(){
        $("html, body").animate({scrollTop : 0});
    });
     //footer family site
     $(".family > a").click(function(e){
        e.preventDefault();
        $(".family-list").slideToggle();
        $(this).find("span").toggleClass("active")
    });

        //s4영역 scrollTrigger 애니메이션
        gsap.registerPlugin(ScrollTrigger);
        //왼쪽 영역의 txt3 글자 영역의 크기 0
        const proAni26 = gsap.timeline()
        .to(".product-box .cont .txt3", {
            scale:0, duration:0
        })
        //왼쪽 영역의 txt1 글자 영역 서서히 사라짐
        const proAni0 = gsap.timeline()
        .to(".product-box .cont .txt1",{
            duration:100, delay:50
        });
        const proAni1 = gsap.timeline()
        .to(".product-box .cont .txt1",{
            opacity:0, duration:100
        });
        //아래쪽 마스크 영역의 높이 0
        const proAni2 = gsap.timeline()
        .to(".product-box .left-cover-box .cover3",{
            height:0, duration:100
        });
        //위쪽 마스크 영역의 높이 0
        const proAni3 = gsap.timeline()
        .to(".product-box .left-cover-box .cover1",{
            height:0, duration:100
        });
        //왼쪽 마스크 영역의 넓이 0
        const proAni4 = gsap.timeline()
        .to(".product-box .left-cover-box .cover4",{
            width:0, duration:0
        });
        //오른쪽 마스크 영역의 넓이 0
        const proAni5 = gsap.timeline()
        .to(".product-box .left-cover-box .cover2",{
            width:0, duration:0
        });
        //왼쪽 영역의 이미지 나타남 
        const proAni6 = gsap.timeline()
        .to(".product-box .img-box .img-box2",{
            opacity:1, duration:0
        });
        //오른쪽 영역의 위쪽 마스크 높이 50% 
        const proAni7 = gsap.timeline()
        .to(".product-box .right-cover-box .cover1",{
            height:"50%", duration:100
        });
        //오른쪽 영역의 아래쪽 마스크 높이 50% 
        const proAni8 = gsap.timeline()
        .to(".product-box .right-cover-box .cover3",{
            height:"50%", duration:100
        });
        //오른쪽 영역의 왼쪽 마스크 넓이 50% 
        const proAni9 = gsap.timeline()
        .to(".product-box .right-cover-box .cover4",{
            width:"50%", duration:100
        });
        //오른쪽 영역의 오른쪽 마스크 넓이 50% 
        const proAni10 = gsap.timeline()
        .to(".product-box .right-cover-box .cover2",{
            width:"50%", duration:100
        });
        //오른쪽 영역의 txt2 서서히 나타남
        const proAni11 = gsap.timeline()
        .to(".product-box .cont .txt2",{
            opacity:1, delay:50, duration:100
        });
        const proAni12 = gsap.timeline()
        .to(".product-box .cont .txt2",{
            duration:100
        });
        //왼쪽 영역의 마스크 가로길이와 세로길이 늘리기
        //아래쪽 마스크 영역의 높이 50%
        const proAni13 = gsap.timeline()
        .to(".product-box .left-cover-box .cover3",{
            height:'50%', duration:100, delay:50
        });
        //위쪽 마스크 영역의 높이 50%
        const proAni14 = gsap.timeline()
        .to(".product-box .left-cover-box .cover1",{
            height:'50%', duration:100, delay:50
        });
        //왼쪽 마스크 영역의 넓이 50%
        const proAni15 = gsap.timeline()
        .to(".product-box .left-cover-box .cover4",{
            width:'50%', duration:100, delay:50
        });
        //오른쪽 마스크 영역의 넓이 50%
        const proAni16 = gsap.timeline()
        .to(".product-box .left-cover-box .cover2",{
            width:'50%', duration:100, delay:50
        });
        //왼쪽 영역의 txt3 크기 1
        const proAni27 = gsap.timeline()
        .to(".product-box .cont .txt3",{
            scale:1, duration:0
        });
        //왼쪽 영역의 txt3 서서히 나타남
        const proAni17 = gsap.timeline()
        .to(".product-box .cont .txt3",{
            opacity:1, delay:50, duration:100, 
        });
        const proAni18 = gsap.timeline()
        .to(".product-box .cont .txt3",{
            duration:100
        });
        //오른쪽 영역의 .txt2 사라짐
        const proAni19 = gsap.timeline()
        .to(".product-box .cont .txt2",{
            opacity:0, delay:50, duration:100, 
        });
        //오른쪽 영역의 마스크 가로길이 0
        const proAni20 = gsap.timeline()
        .to(".product-box .right-cover-box .cover2",{
            width:0, delay:50, duration:100, 
        });
        const proAni21 = gsap.timeline()
        .to(".product-box .right-cover-box .cover4",{
            width:0, delay:50, duration:100, 
        });
        //오른쪽 영역의 마스크 세로길이 0
        const proAni22 = gsap.timeline()
        .to(".product-box .right-cover-box .cover1",{
            height:0, delay:50, duration:0, 
        });
        const proAni23 = gsap.timeline()
        .to(".product-box .right-cover-box .cover3",{
            height:0, delay:50, duration:0,
        });
        //오른쪽 영역의 .img-box3 나타남
        const proAni24 = gsap.timeline()
        .to(".product-box .cont .img-box3",{
            opacity:1, delay:10, duration:100, 
        });
    
        const productAni = gsap.timeline({
            scrollTrigger:{
                trigger:".product",
                start:"center center+=10px",
                end:"+=2000px, top",
                
                pin:true,
                scrub:1.5,
                // markers: true
            }
        });
        //timeline과 scrollTrigger 연동
        productAni.add([proAni26])
        .add([proAni0, proAni1, proAni6])
        .add([proAni2, proAni3, proAni4, proAni5, proAni7, proAni8, proAni9, proAni10, proAni11, proAni12])
        .add([proAni13, proAni14, proAni15, proAni16, proAni19])
        .add([proAni17, proAni18, proAni20, proAni21, proAni22, proAni23, proAni24, proAni27])






    //스크롤 내릴 때 마다 section안의 자식 콘텐츠들의 애니메이션 실행
    //section 갯수만큼 반복
    $("section").each(function(){
            //각 section의 시작위치(top)값을 sectionTop변수에 저장
            let sectionTop = $(this).offset().top-300;
            //각 섹션의 bottom(끝위치)값을sectionBottom변수에 저장
            let sectionBottom = sectionTop + $(this).height();
            //만약 section영역이 viewPort안으로 들어오면
            if(sectionTop < $(window).scrollTop() && sectionBottom > $(window).scrollTop()){
                $(this).addClass("child-ani");
            }
            else{
                $(this).removeClass("child-ani");
            }
    });
});
