

//============= RWD navbar click =============

$(document).ready(function () {
  //點出現導覽列 
  $('.ham-btn').on('click', function (e) {
    $('header ul').toggleClass('burgar_btn-show');
    $('body').css('overflow','hidden');

  });

   //點黑底退出導覽列 
  $('.nav_bg').on('click',function(event){
    event.stopPropagation();
      $('header ul').toggleClass('burgar_btn-show');
      $('body').css('overflow','scroll');
      
    });


  

  });

//=========== 停止預設跳轉事件 =========

let el = document.querySelector(".q-tra-con-btn");

el.addEventListener('click', function(e) {
    e.preventDefault(); 
  });

let el2 = document.querySelectorAll(".q-tra-con-btn")[1];

el2.addEventListener('click', function(e) {
    e.preventDefault(); 
  });


//=============  Currency Converter  ============


// function quickBuy(){
  //buy-sec
  const qBuycryptoNum = document.getElementById("qbuy_crypto");
  const qBuycurrNum = document.getElementById("qbuy_currency");
  const toCurrency = document.getElementById("toCurrency");
  const fromCrypto = document.getElementById("fromCrypto");
  //sell-sec

  const qSellcryptoNum = document.querySelector("#qsell_crypto");
  const qSellcurrNum = document.querySelector("#qsell_currency");
  const toCrypto = document.querySelector('#toCrypto');
  const fromCurrency = document.querySelector('#fromCurrency');
  


  //---匯率物件
  const rateCurr = {
    "USD": 1,
    "NTD": 30
  };

  const rateCrypto = {
    "BTC" : 23953,
    "ETH" : 1660.8,
    "DOGE":0.866,
    "USDT": 1.002,
    "USDC":1 ,
    "BUSD": 0.99,
    "BNB": 310,
    "SOL" : 22.61,
    "XRP": 0.38
  };
  
// --------  placeholder  匯率顯示(not yet)--------

 //FIXME: 修正會與其他欄位打架的問題
// fromCrypto.addEventListener("change",function(){
//   qBuycurrNum.setAttribute("placeholder",(rateCrypto[fromCrypto.value]+ " USD "))
// });




// ---------- 匯率換算計算（Buy）----------

 //FIXME: 整理function

 


  qBuycryptoNum.addEventListener("change", function(total){
    result = qBuycryptoNum.value * rateCrypto[fromCrypto.value];
    if (toCurrency.value == "USD"){
      total = result * rateCurr["USD"];
    }
    else{
      total = result * rateCurr["NTD"];
    }
   
    qBuycurrNum.value=Math.round(total*100)/100;
    // total = (Math.round(qBuycurrNum.value))*100/100;
    // console.log (total);
    // qBuycurrNum.value=total;

  });


  fromCrypto.addEventListener("change", function(total){
    result = qBuycryptoNum.value * rateCrypto[fromCrypto.value];
    // console.log(result);

    if (toCurrency.value == "USD"){
      total = result * rateCurr["USD"];
    }
    else{
      total = result * rateCurr["NTD"];
    }
    // console.log (total);

    qBuycurrNum.value=Math.round(total*100)/100;
    // total = (Math.round(qBuycurrNum.value))*100/100;
    //四捨五入所得的total數字

  
  });


  toCurrency.addEventListener("change", function(total){
    result = qBuycryptoNum.value * rateCrypto[fromCrypto.value];

    total=result*rateCurr[toCurrency.value];

    // console.log(total); 
    qBuycurrNum.value=Math.round(total*100)/100;
    
  });

  qBuycurrNum.addEventListener("change", function(total){
    result = qBuycurrNum.value / rateCrypto[fromCrypto.value];

    total=result*rateCurr[toCurrency.value];

    // console.log(total);
    qBuycryptoNum.value=Math.round(total*100)/100;
    
  });

  // -------匯率換算計算（sell）----

  qSellcryptoNum.addEventListener("change", function(total){
    result = qSellcryptoNum.value * rateCrypto[toCrypto.value];
    if (toCurrency.value == "USD"){
      total = result * rateCurr["USD"];
    }
    else{
      total = result * rateCurr["NTD"];
    }
    // console.log (total);

    qSellcurrNum.value=Math.round(total*100)/100;

  });

  toCrypto.addEventListener("change", function(total){
    result = qSellcryptoNum.value * rateCrypto[toCrypto.value];
    // console.log(result);

    if (toCurrency.value == "USD"){
      total = result * rateCurr["USD"];
    }
    else{
      total = result * rateCurr["NTD"];
    }
    // console.log (total);

    qSellcurrNum.value=Math.round(total*100)/100;
  });


  fromCurrency.addEventListener("change", function(total){
    result = qSellcryptoNum.value * rateCrypto[toCrypto.value];
    total=result*rateCurr[fromCurrency.value];
    // console.log(total); 
    qSellcurrNum.value=Math.round(total*100)/100;

  });

  qSellcurrNum.addEventListener("change", function(total){
    result = qSellcurrNum.value / rateCrypto[toCrypto.value];

    total=result*rateCurr[fromCurrency.value];

    // console.log(total);
    qSellcryptoNum.value=Math.round(total*100)/100;
    
  });












  // curr_val.addEventListener("change", function(){
    
  //   result = qBuycryptoNum.value * rateCrypto[crypto_val];
     
  //   console.log(result);
  // });
  

  
  // qBuycryptoNum.addEventListener("onchange", function (){
  //   result = curr_val * qBuycryptoNum;
  //   console.log(result)
  // })










/* var qBuycryptoNum = document.getElementById("qbuy_crypto");
var qBuycurrNum = document.getElementById("qbuy_currency");

qBuycryptoNum.addEventListener("blur", function () {
  let qBuyCryptoAmount = document.getElementById("qbuy_crypto").value;
  let fromCrpto = document.getElementById("fromCrypto").value;
  let toCurr = document.getElementById("toCurrency").value;
  let buyresult = Math.round(qBuyCryptoAmount * fromCrpto) * 100 / 100;


  output = function () {
    if (toCurr === "USD") {

      result = (buyresult + 'USD');
    }
    else {
      result = buyresult * 30 + 'NTD';
    }
    // document.getElementById("qbuy_currency").innerHTML= result;
  }

  console.log(output);


  //取到小數點後兩位四捨五入
  // let buyresult = Math.round(qBuyCryptoAmount * fromCrpto)*100/100;
  // console.log(result);

})*/



