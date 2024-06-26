
function myFunction() {
    let min = document.getElementById("inputval");
    let max = document.getElementById("inputmax");
    let min1=min.value;
    let max1=max.value;
    var color=(100/max1)*min1;
      var b=(max1-min1);
      var y=(100/max1)*b;
      let rounded = color.toFixed(2);
  
    
   
      // if(parseInt(max.value)<(parseInt(min.value))<100000){
      //     console.log(typeof min.value,typeof max.value)
         
            // alert("please enter a valid value")
      if(parseInt(max.value)<(parseInt(min.value))){
         console.log(typeof min.value,typeof max.value)
      }else{
          
     
       document.getElementById("level3").style.background='linear-gradient(to top,#008CFF 0%,#C2E3FF '+color+'% )';
       document.getElementById("level2").style.background='conic-gradient(from -20deg,#C2E3FF 0% 0deg,#C2E3FF '+y+'% 0deg,#008CFF 0% 0deg ,#008CFF '+color+'% 180deg )';
       document.getElementById("level1").style.background='linear-gradient(to top, #008CFF '+color+'%,  #C2E3FF 0%)';
      document.getElementById("persentage1").innerText=''+rounded+'%'
      document.getElementById("persentage2").innerText=''+rounded+'%'
      document.getElementById("persentage3").innerText=''+rounded+'%'
      }
      }
