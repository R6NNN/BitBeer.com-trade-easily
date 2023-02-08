

// ---------------Swiper-------------------

// var mySwiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// })


//-------Exchange order-dialog------------

// let btn1 = document.querySelector("#traConfirm");
// let confirmPop = document.querySelector("#confirmPop");
let overflow = document.querySelector("body");
// btn1.addEventListener("click", function(){
    
//     overflow.style.overflow = "hidden";
//     confirmPop.showModal();
//   })

//----------------FAQ-popup------------

// 點選出現 #faq-pop (display=block)
// 點選 #faq-sec-off  #faq-pop(display = none)

let btn2 = document.querySelector("#faq-sec");
let faqPop = document.querySelector("#faq-pop");
let faqOff = document.getElementById("faq-sec-off");

  btn2.addEventListener("click",function(){
    
    faqPop.style.display = "block";
    overflow.style.overflow = "hidden";

  });

  faqOff.addEventListener("click",function(){
    faqPop.style.display = "none";

  })

// let test = document.querySelector(".test");
// test.addEventListener("click",function(){
//     console.log('123');
// })



