const menuBtn = document.querySelector('.fa-bars');
const sideNav = document.querySelector('.sideNav');
const menuBtn2 = document.querySelector('.manuBtn2'); // Updated class name
const closeBtn = document.querySelector('.fa-xmark');

sideNav.style.right = '-100%';
menuBtn.addEventListener('click', function(){
    sideNav.style.right = 0;
    menuBtn.style.zIndex = -1;
    closeBtn.style.zIndex = 3;
})

closeBtn.addEventListener('click',function(){
    sideNav.style.right = '-100%';
    menuBtn.style.zIndex = 3;
    closeBtn.style.zIndex = -1;
})

