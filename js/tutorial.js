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


// =========== QA內容展開與隱藏 ==============

  

let faqShow = document.querySelectorAll(".get-sta-inf-block");
let faqHide = document.querySelectorAll(".get-sta-inf-block-inf");
let faqArr = document.querySelectorAll(".arrow");

for(let i = 0; i < faqShow.length; i++){
  faqShow[i].addEventListener("click",function(){
    if (faqHide[i].style.display === "none"){
    faqHide[i].style.display = "block";
    faqArr[i].style.transform = "rotate(90deg)";
    faqArr[i].style.transitionDuration = "0.3s";
    }else{
      faqHide[i].style.display = "none";
      faqArr[i].style.transform = "rotate(0deg)";
      faqArr[i].style.transitionDuration = "0.3s";
    }

  
  })
}

