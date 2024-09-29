$(document).ready(function () {
    gnbFixed();

    const highPet = "highPet";
    const goodAndGood = "goodAndGood";
    $(`#${highPet}`).click(function () {
        $("#gnb").removeClass(goodAndGood).addClass(highPet);
        $(`#gnb-${highPet}`).show();
        $(`#gnb-${goodAndGood}`).hide();
        $(".contents_section").hide();
        $("#main-contents1").show();
    });
    $(`#${goodAndGood}`).click(function () {
        $("#gnb").removeClass(highPet).addClass(goodAndGood);
        $(`#gnb-${highPet}`).hide();
        $(`#gnb-${goodAndGood}`).show();
        $(".contents_section").hide();
        $("#main-contents5").show();
    });

    // 하이펫 애견보험 상단 gnb 버튼 이벤트
    $(".menu-button").click(function () {
        const targetId = $(this).data("target"); // 클릭한 버튼의 타겟 ID를 가져옴

        // 모든 섹션을 숨기고 타겟 섹션만 표시
        $(".contents_section").hide();
        $(`#${targetId}`).show();
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
