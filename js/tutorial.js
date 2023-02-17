// ----------------FAQ-popup------------

// 點選出現 #faq-pop (display=block)
// 點選 #faq-sec-off  #faq-pop(display = none)

let btn2 = document.querySelector("#faq-sec");
let faqPop = document.querySelector("#faq-pop");
let faqOff = document.getElementById("faq-sec-off");

btn2.addEventListener("click", function () {

  faqPop.style.display = "block";
  document.body.style.overflow = "hidden";

});

faqOff.addEventListener("click", function () {
  faqPop.style.display = "none";
  document.body.style.overflow = "scroll";

});

// =========== QA內容展開與隱藏(可動) ==============
let faqShow = document.querySelector("#faq-inf-show");
let faqHide = document.querySelector("#faq-inf-hide");
let faqArr = document.querySelector("#faq-arrow");


// faqShow.addEventListener("click", function() {
//   if (faqHide.style.display === "none") {
//     faqHide.style.display = "block";
//     faqArr.style.transform = "rotate( 90deg)";
//     faqArr.style.transformOrigin = "50%";
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