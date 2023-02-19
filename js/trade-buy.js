// let buyCrypto = document.querySelector("#buyCrypto");
let buyCrypto = document.querySelector("#buyCrypto");
let payCurr = document.querySelector('#payCurr');
let payNum = document.querySelectorAll('.payNum');
let payFee = document.querySelector('.payFee');
let curlist = document.querySelector('#curlist');

let rateCur = {
  "USD": 1,
  "NTD": 30
};

// let formatter= new Intl.NumberFormat=('en-US',{
//   style: 'currency',
//   currency: 'USD',

// })


buyCrypto.addEventListener("blur", function (total) {

  if (curlist.value == "USD") {
    total = buyCrypto.value * 1284 * rateCur["USD"];
    payCurr.value = Math.round(total * 10) / 10;

    payNum[0].textContent =" $ "+(Math.round(total * 10) / 10 + 0.5);
    payNum[1].textContent =" $ "+(Math.round(total * 10) / 10 + 10);
    payNum[2].textContent =" $ "+(Math.round(total * 10) / 10 + 20);
  } else {
    total = buyCrypto.value * 1284 * rateCur["NTD"];
    payCurr.value = Math.round(total * 10) / 10;

    payNum[0].textContent =" NT$ "+(Math.round(total * 10) / 10 + 0.5);
    payNum[1].textContent =" NT$ "+(Math.round(total * 10) / 10 + 10);
    payNum[2].textContent =" NT$ "+(Math.round(total * 10) / 10 + 20);
  };


});


curlist.addEventListener("blur", function (total) {

  if (curlist.value == "USD") {
    total = buyCrypto.value * 1284 * rateCur["USD"];
    payCurr.value  = Math.round(total * 10) / 10;
    payNum[0].textContent =" $ "+(Math.round(total * 10) / 10 + 0.5);
    payNum[1].textContent =" $ "+(Math.round(total * 10) / 10 + 10);
    payNum[2].textContent =" $ "+(Math.round(total * 10) / 10 + 20);


  } else {
    total = buyCrypto.value * 1284 * rateCur["NTD"];
    payCurr.value  = Math.round(total * 10) / 10;
    payNum[0].textContent =" NT$ "+(Math.round(total * 10) / 10 + 0.5);
    payNum[1].textContent =" NT$ "+(Math.round(total * 10) / 10 + 10);
    payNum[2].textContent =" NT$ "+(Math.round(total * 10) / 10 + 20);


  }

  

  // payNum[0].textContent =" $ "+(Math.round(total * 10) / 10 + 0.5);
  // payNum[1].textContent =" $ "+(Math.round(total * 10) / 10 + 10);
  // payNum[2].textContent =" $ "+(Math.round(total * 10) / 10 + 20);
  
});