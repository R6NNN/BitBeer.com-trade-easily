

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
// let overflow = document.querySelector("body");
// btn1.addEventListener("click", function(){

//     overflow.style.overflow = "hidden";
//     confirmPop.showModal();
//   })

//----------------FAQ-popup------------

// 點選出現 #faq-pop (display=block)
// 點選 #faq-sec-off  #faq-pop(display = none)

// let btn2 = document.querySelector("#faq-sec");
// let faqPop = document.querySelector("#faq-pop");
// let faqOff = document.getElementById("faq-sec-off");

// btn2.addEventListener("click", function () {

//   faqPop.style.display = "block";
//   document.body.style.overflow = "hidden";

// });

// faqOff.addEventListener("click", function () {
//   faqPop.style.display = "none";
//   document.body.style.overflow = "scroll";

// });

// =========== QA內容展開與隱藏(可動) ==============
// let faqShow = document.querySelector("#faq-inf-show");
// let faqHide = document.querySelector("#faq-inf-hide");
// let faqArr = document.querySelector("#faq-arrow");


// faqShow.addEventListener("click", function() {
//   if (faqHide.style.display === "none") {
//     faqHide.style.display = "block";
//     faqArr.style.transform = "rotate(90deg)";
//     faqArr.style.transitionDuration = "0.3s";
//     faqHide.style.transitionDuration = "0.8s";

//   } else {
//     faqHide.style.display = "none";
//     faqArr.style.transform = "rotate(0deg)";
//     faqArr.style.transitionDuration = "0.3s";

//   }
// });

// =========== QA內容展開與隱藏(clas測試用) ==============

// let faqShow = document.querySelectorall(".get-sta-inf-block");
// let faqHide = document.querySelectorall(".get-sta-inf-block-inf");
// let faqArr = document.querySelectorall(".arrow");

// faqShow.forEach() => {
//   e.addEventListener("click", ()=> {
//   // if (faqHide.style.display === "none") {
//   //   faqHide.style.display = "block";
//   //   faqArr.style.transform = "rotate(90deg)";
//   //   faqArr.style.transitionDuration = "0.3s";
//   //   faqHide.style.transitionDuration = "0.8s";

//   // } else {
//   //   faqHide.style.display = "none";
//   //   faqArr.style.transform = "rotate(0deg)";
//   //   faqArr.style.transitionDuration = "0.3s";

//   // }

// })


//=============RWD navbar click============

$(document).ready(function () {
  $('.ham-btn').on('click', function (e) {
      $('header ul').toggleClass('burgar_btn-show');
      // 讓瀏覽器知道有點擊 .burgar_btn 的時候，會有收合功能，並在 body 產生一個新的 Class 名稱 burgar_btn-show
  });
});


