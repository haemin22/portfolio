console.log('[화면이 로딩되었습니다.]');

// 목표
// 1. 햄버거 버튼을 누를때, 
// 2. 모바일 네비게이션 메뉴를 화면에 나오게 한다.

// DOM (엘리먼트)를 선택 할 때
document.querySelector(".hamburger-btn").addEventListener('click', function() {
    console.log('[Click]')
    document.querySelector(".m-nav").classList.add('open');
});


// 목표
// 1. X 버튼을 누를때
// 2. 모바일 네비게이션 메뉴를 화면에 안나오게 한다.
document.querySelector(".m-nav-close-btn").addEventListener('click', function() {
    console.log('[Click]')
    document.querySelector(".m-nav").classList.remove('open');
});
