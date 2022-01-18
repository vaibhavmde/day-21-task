var count=document.querySelector("#count");  //select the element using #count
var time=10;                                 // creating a local variable time for timmer

count.innerHTML=time--;                      //decrementing count     
setTimeout(() => {                           //setTimeout method to create delay 
  count.innerHTML=time--;                     
  setTimeout(() => {                         //callback
    count.innerHTML=time--;
    setTimeout(() => {                       //callback
      count.innerHTML=time--;           
      setTimeout(() => {                       //callback
        count.innerHTML=time--;
        setTimeout(() => {                     //the hole nesting is called callback hell
          count.innerHTML=time--;
          setTimeout(() => {
            count.innerHTML=time--;
            setTimeout(() => {
              count.innerHTML=time--;
              setTimeout(() => {
                count.innerHTML=time--;
                setTimeout(() => {
                  count.innerHTML=time--;
                  setTimeout(() => {
                    count.innerHTML="Happy Republic Day";  //display the msg
                  },1000);
                },1000);
              },1000);
            },1000);
          },1000);
        },1000);
      },1000);
    },1000);
  },1000);
},1000);