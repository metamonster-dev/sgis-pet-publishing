$(document).ready(function () {
    gnbFixed();

    const highPet = "highPet";
    const goodAndGood = "goodAndGood";
    // .top_btn 요소 선택
    const topButton = $(".top_btn");

    $("#highPetArrow").click(function () {
        $(this).addClass("active");
        $("#goodAndGoodArrow").removeClass("active");
    });
    $("#goodAndGoodArrow").click(function () {
        $(this).addClass("active");
        $("#highPetArrow").removeClass("active");
    });

    $(`#${highPet}`).click(function () {
        $("#gnb").removeClass(goodAndGood).addClass(highPet);
        $(`#gnb-${highPet}`).show();
        $(`#gnb-${goodAndGood}`).hide();
        $(".contents_section").hide();
        $("#main-contents1").show();
        $("#highPetArrow").addClass("active");
        $("#goodAndGoodArrow").removeClass("active");
        $(".menu-button").removeClass("active").first().addClass("active");
        $(".res_box").removeClass("active").first().addClass("active");
    });
    $(`#${goodAndGood}`).click(function () {
        $("#gnb").removeClass(highPet).addClass(goodAndGood);
        $(`#gnb-${highPet}`).hide();
        $(`#gnb-${goodAndGood}`).show();
        $(".contents_section").hide();
        $("#main-contents5").show();
        $("#goodAndGoodArrow").addClass("active");
        $("#highPetArrow").removeClass("active");
        $(".menu-button").removeClass("active").eq(4).addClass("active");
        $(".res_box").removeClass("active").eq(1).addClass("active");
    });

    // 하이펫 애견보험 상단 gnb 버튼 이벤트
    $(".menu-button").click(function () {
        $(".menu-button").removeClass("active");
        $(this).addClass("active");
        const targetId = $(this).data("target"); // 클릭한 버튼의 타겟 ID를 가져옴

        // 모든 섹션을 숨기고 타겟 섹션만 표시
        $(".contents_section").hide();
        $(`#${targetId}`).show();
        $("html, body").animate({ scrollTop: 0 }, "smooth");
    });

    // 스크롤 시 이벤트 처리
    $(window).on("scroll", function () {
        // 브라우저 너비가 900px 이상일 때만 실행
        if ($(window).width() > 900) {
            if ($(this).scrollTop() > 200) {
                // 스크롤 위치가 200px 이상일 때
                $(".top_btn").fadeIn(); // .top_btn 보이기
            } else {
                $(".top_btn").fadeOut(); // .top_btn 숨기기
            }
        } else {
            $(".top_btn").fadeOut(); // 900px 이하일 경우 버튼을 항상 숨김
        }
    });

    // 버튼 클릭 시 최상단으로 스크롤 이동
    topButton.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "smooth"); // 최상단으로 부드럽게 스크롤
    });

    $(`#gnb-${highPet}`).show();
    $(`#gnb-${goodAndGood}`).hide();
    $(`#${highPet}`).click();
});

function gnbFixed() {
    // GNB 메뉴를 감시하여 고정하는 로직
    const $gnbSection = $(".gnb_section"); // 고정할 메뉴 선택
    const gnbOffsetTop = $gnbSection.offset().top; // GNB 메뉴의 초기 위치 저장

    $(window).scroll(function () {
        if ($(window).scrollTop() >= gnbOffsetTop) {
            $gnbSection.addClass("fixed");
        } else {
            $gnbSection.removeClass("fixed");
        }
    });
}
