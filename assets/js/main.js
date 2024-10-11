$(document).ready(function () {
    gnbFixed();
    initSelect();

    // SELECT custom
    $(".select > button").on("click", function () {
        $(this).parents(".select").toggleClass("on").siblings().removeClass("on");
    });
    $(document).on("click", ".select ul li button", function () {
        $(this).parents(".select").removeClass("on");
        $(this).parents('.select').find("> button").text($(this).text());
        $(this).parents('.select').find("> button").attr('value', $(this).attr("value"));
    });

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
        $(".top_gnb .terms1").removeClass("terms_hide");
        $(".top_gnb .terms2").addClass("terms_hide");
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
        $(".top_gnb .terms1").addClass("terms_hide");
        $(".top_gnb .terms2").removeClass("terms_hide");
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

function initSelect() {
    const selectData = [
        {
            id: '1',
            name: '소형견',
            list: [
                {
                    id: '1-1',
                    name: '요크셔테리어',
                },
                {
                    id: '1-2',
                    name: '실키테리어',
                },
                {
                    id: '1-3',
                    name: '포메라니안',
                },
                {
                    id: '1-4',
                    name: '페키니즈',
                },
                {
                    id: '1-5',
                    name: '치와와',
                },
                {
                    id: '1-6',
                    name: '잉글리쉬 코커스파니엘',
                },
                {
                    id: '1-7',
                    name: '비글',
                },
                {
                    id: '1-8',
                    name: '폭스테리어',
                },
                {
                    id: '1-9',
                    name: '프렌치불독',
                },
                {
                    id: '1-10',
                    name: '푸들미니어쳐',
                },
                {
                    id: '1-11',
                    name: '퍼그',
                },
                {
                    id: '1-12',
                    name: '슈나우더 미니어쳐',
                },
                {
                    id: '1-13',
                    name: '시츄',
                },
                {
                    id: '1-14',
                    name: '몰티즈',
                },
                {
                    id: '1-15',
                    name: '미니어쳐 핀셔',
                },
                {
                    id: '1-16',
                    name: '토이푸들',
                },
                {
                    id: '1-17',
                    name: '이탈리안 그레이하운드',
                },
                {
                    id: '1-18',
                    name: '코커스파니엘',
                },
                {
                    id: '1-19',
                    name: '비숑프리제',
                },
                {
                    id: '1-20',
                    name: '보스턴 테리어',
                },
                {
                    id: '1-21',
                    name: '킹챨스 스파니엘',
                },
                {
                    id: '1-22',
                    name: '닥스훈트',
                },
                {
                    id: '1-23',
                    name: '셔트랜드 쉽독',
                },
                {
                    id: '1-24',
                    name: '소형견 기타',
                },
            ]
        },
        {
            id: '2',
            name: '중형견',
            list: [
                {
                    id: '2-1',
                    name: '보더콜리',
                },
                {
                    id: '2-2',
                    name: '불독',
                },
                {
                    id: '2-3',
                    name: '차우차우',
                },
                {
                    id: '2-4',
                    name: '사모예드',
                },
                {
                    id: '2-5',
                    name: '시베리안 허스키',
                },
                {
                    id: '2-6',
                    name: '브리트니 스패니엘',
                },
                {
                    id: '2-7',
                    name: '불 테리어',
                },
                {
                    id: '2-8',
                    name: '달마시안',
                },
                {
                    id: '2-9',
                    name: '슈나우더',
                },
                {
                    id: '2-10',
                    name: '웰시 코르기',
                },
                {
                    id: '2-11',
                    name: '바셋 하운드',
                },
                {
                    id: '2-12',
                    name: '진돗개',
                },
                {
                    id: '2-13',
                    name: '삽살개',
                },
                {
                    id: '2-14',
                    name: '풍산개',
                },
                {
                    id: '2-15',
                    name: '아메리칸 코카 스파니엘',
                },
                {
                    id: '2-16',
                    name: '비어디드 콜리',
                },
                {
                    id: '2-17',
                    name: '미니어쳐 불 테리어',
                },
                {
                    id: '2-18',
                    name: '아메리칸 핏불테리어',
                },
                {
                    id: '2-19',
                    name: '아메리칸 스태퍼드셔 테리어',
                },
                {
                    id: '2-20',
                    name: '스태퍼드셔 불 테리어',
                },
                {
                    id: '2-21',
                    name: '중현견 기타',
                },
            ]
        },
        {
            id: '3',
            name: '대형견',
            list: [
                {
                    id: '3-1',
                    name: '알래스칸 맬러뮤트',
                },
                {
                    id: '3-2',
                    name: '콜리',
                },
                {
                    id: '3-3',
                    name: '도베르만 핀셔',
                },
                {
                    id: '3-4',
                    name: '올드 잉글리쉬 쉽독',
                },
                {
                    id: '3-5',
                    name: '슈나우더 자이언트',
                },
                {
                    id: '3-6',
                    name: '아프간 하운드',
                },
                {
                    id: '3-7',
                    name: '버니즈 마운틴 독',
                },
                {
                    id: '3-8',
                    name: '복서',
                },
                {
                    id: '3-9',
                    name: '브리아드',
                },
                {
                    id: '3-10',
                    name: '저먼 세퍼드',
                },
                {
                    id: '3-11',
                    name: '그레이 하운드',
                },
                {
                    id: '3-12',
                    name: '포인터',
                },
                {
                    id: '3-13',
                    name: '스탠다드 푸들',
                },
                {
                    id: '3-14',
                    name: '보르조이',
                },
                {
                    id: '3-15',
                    name: '불마스티프',
                },
                {
                    id: '3-16',
                    name: '그레이트 댄',
                },
                {
                    id: '3-17',
                    name: '그레이트 피레니즈',
                },
                {
                    id: '3-18',
                    name: '마스티프',
                },
                {
                    id: '3-19',
                    name: '뉴펀들랜드',
                },
                {
                    id: '3-20',
                    name: '블러드하운드',
                },
                {
                    id: '3-21',
                    name: '세인트버나드',
                },
                {
                    id: '3-22',
                    name: '스코티시 디어하운드',
                },
                {
                    id: '3-23',
                    name: '잉글리쉬 및 아이리쉬 세터',
                },
                {
                    id: '3-24',
                    name: '골든 리트리버',
                },
                {
                    id: '3-25',
                    name: '아키타',
                },
                {
                    id: '3-26',
                    name: '아이리시 울프 하운드',
                },
                {
                    id: '3-27',
                    name: '티베티안 마스티프',
                },
                {
                    id: '3-28',
                    name: '도베르만',
                },
                {
                    id: '3-29',
                    name: '도사견',
                },
                {
                    id: '3-30',
                    name: '니폴리탄 마스티프',
                },
                {
                    id: '3-31',
                    name: '로트와일러',
                },
                {
                    id: '3-32',
                    name: '믹스견(45kg 이상)',
                },
                {
                    id: '3-33',
                    name: '대형견 기타',
                },
            ]
        },
    ];
    
    const lis_init = `<li><button type="button" value="0">선택해주세요</button></li>`;
    let lis_1 = lis_init; 
    selectData.map((item) => {
        lis_1 += `<li><button type="button" value="${item.id}">${item.name}</button></li>`;
    });

    $("#breed_1 ul").html(lis_1);
    $("#breed_1 ul li button").on("click", function() {
        const val = $(this).attr('value');
        let lis_2 = lis_init;

        if (val !== '0') {
            selectData.map((item) => {
                if (item.id === val) {
                    item.list.map((item2) => {
                        lis_2 += `<li><button type="button" value="${item2.id}">${item2.name}</button></li>`;
                    });
                }
            });
        } else {
            lis_2 = lis_init;
        }
        $("#breed_2 ul").html(lis_2);
        $('#breed_2 > button').text('선택해주세요');
        $('#breed_2 > button').attr('value', '0');
    });
}
