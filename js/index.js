

//=============RWD navbar click============

$(document).ready(function () {
  $('.ham-btn').on('click', function (e) {
    $('header ul').toggleClass('burgar_btn-show');
    $
    

    // 讓瀏覽器知道有點擊 .burgar_btn 的時候，會有收合功能，並在 body 產生一個新的 Class 名稱 burgar_btn-show
  });
});

// $(document).mouseup(function(e) {
//   var _con = $('header ul'); // 就是你不希望被點到的 div
//   if (!_con.is(e.target) && _con.has(e.target).length === 0 ) {
//       $('header ul').removeClass('burgar_btn-show'); // 功能代碼
//   }
// });


//=============  Currency Converter  ============

//1. 當輸入qbuy_crypto時，值經過計算將會回傳成為qbuy_currency的value
//2. 若有選擇改變 toCurrency，將會重新計算回傳成為qbuy_currency的value

//3. 若先輸入qbuy_currency時，值經過計算回傳成為qbuy_crypto的value
//4. 若有選擇改變 toCurrency，將會重新計算回傳成為qbuy_currency的value



// function quickBuy(){
  const qBuycryptoNum = document.getElementById("qbuy_crypto");
  const qBuycurrNum = document.getElementById("qbuy_currency");
  const toCurrency = document.getElementById("toCurrency");
  const fromCrypto = document.getElementById("fromCrypto");

  //匯率物件
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
  






  // ================匯率換算計算（Buy）==================
 //TODO: 製作SELL版本
 //FIXME: 整理function


  qBuycryptoNum.addEventListener("change", function(total){
    result = qBuycryptoNum.value * rateCrypto[fromCrypto.value];
    if (toCurrency.value == "USD"){
      total = result * rateCurr["USD"];
    }
    else{
      total = result * rateCurr["NTD"];
    }
    console.log (total);

    qBuycurrNum.value=total;
    // console.log(result);
    // toCurrency.addEventListener("change",function(){
    //   totalResult = result * rateCurr[toCurrency.value]
    //   console.log(totalResult)
    // })
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
    console.log (total);

    qBuycurrNum.value=total;
  });


  toCurrency.addEventListener("change", function(total){
    result = qBuycryptoNum.value * rateCrypto[fromCrypto.value];
    // console.log(result);

    // if (toCurrency.value == "USD"){
    //   total = result * rateCurr["USD"];
    // }
    // else{
    //   total = result * rateCurr["NTD"];
    // }
    
    total=result*rateCurr[toCurrency.value];

    console.log(total); //30
    qBuycurrNum.value=total;
    
  });


  qBuycurrNum.addEventListener("change", function(total){
    result = qBuycurrNum.value / rateCrypto[fromCrypto.value];
    // console.log(result);

    // if (toCurrency.value == "USD"){
    //   total = result / rateCurr["USD"];
    // }
    // else{
    //   total = result / rateCurr["NTD"];
    // }

    total=result*rateCurr[toCurrency.value];

    console.log(total);
    qBuycryptoNum.value=total;
    

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



