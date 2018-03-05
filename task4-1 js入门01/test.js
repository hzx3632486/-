var elem = function(id){
   	   return document.getElementById(id);
}
   var handler = function(){
   	   var inputNum = parseInt(elem("aqi-input").value);
   	   if((!isNaN(inputNum))&&(inputNum>=0)&&(inputNum<=1000)){
   	      elem("aqi-display").innerHTML = inputNum;
   	   }
   	   else{
          alert("非法输入");
   	   }
   }
   elem("button").onclick = function(){
   	   handler();
   }
   elem("aqi-display").onkeyup = function(){
   	   if(event.keyCode === 13){
   	   	   handler();
   	   }
   }
