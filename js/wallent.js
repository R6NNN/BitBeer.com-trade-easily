const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['ETH', 'USDT', 'USD'],
      datasets: [{
        label: 'Price',
        data: [1451.8, 306, 445],
        borderWidth: 2,
        cutout:120,
        backgroundColor: ["#F6BC27", "#DC5252", "#D9D9D9"]
      }]
    },
    options: {
      
      plugins: {

      legend: {
        display:false,

        title:{
         
          // text:'Assest Percentage',
          // padding:0,
          // color:'#DE5000',
          // font:{
          //   family:'Poppins, Microsoft JhengHei,arial',
          //   size:18,
          //   weight:600,
          // }
        }
        ,position:'bottom',
        // display: true, //This will do the task
        // align: 'right',

        labels:{
          display:true,
          padding:20,
          boxWidth:50,
          boxHeight:20,
          font:{
            family:'Poppins, Microsoft JhengHei,arial',
            size:16,
          }

        }
        
     }
    }
      ,layout: {
      padding:0,

     }
  }
});




