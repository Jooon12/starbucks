const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('.search input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
})

const badgeEl = document.querySelector('header .badges');

// window 우리가 화면을 보는 창의 개념
// 300m/s 즉, .3초
// n초 단위로 부하를 준다 -> throttle()
// 부하를 줌으로써 가볍게 만들어줌 -> 함수가 많이 실행되면 무거워짐
// _.throttle(함수, 시간)

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // // 배지 숨기기
    // badgeEl.style.display = 'none';
    // grap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    gsap.to(toTopEl, .2, {
      x: 0
    })

  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    gsap.to(toTopEl, .2, {
      x: 100
    })

  }
}, 300));

const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  })
});


const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay:  (index + 1) * .7,
    opacity: 1
  });
});


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  slidePerView: 1,
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 기본값
  slidesPerView: 3, 
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    dlay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion'); 
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  // !는 앞에 있는 것의 반대라는 뜻
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 숨김해제
    promotionEl.classList.remove('hide');
  }
});

function floatingObject(selector) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, 1, {
    y: 20,
    repeat: -1,
    // -1 무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: 2
  })
}

floatingObject ('.floating');


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach (function (spyEl) {
  
  new ScrollMagic
   .Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
    triggerHook: .8 //지정한 요소가 .8이라는 부분에 걸리면..뭔가 실행됨
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
})

new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const thisYear = document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear(); //현재 연도 추출
