// -------Exchange order-dialog------------

let btn1 = document.querySelector("#traConfirm");
let confirmPop = document.querySelector("#confirmPop");
let overflow = document.querySelector("body");
btn1.addEventListener("click", function(){

    overflow.style.overflow = "hidden";
    confirmPop.showModal();
  })

