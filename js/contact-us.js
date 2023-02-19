//停止預設跳轉事件
let el = document.querySelector(".con-form button");

el.addEventListener('click', function(e) {
    e.preventDefault(); 
  });