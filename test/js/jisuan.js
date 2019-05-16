
function clicked(){
 var num1 = parseInt(document.getElementById("num1").value);
 var num2 = parseInt(document.getElementById("num2").value);

 var sel = document.getElementById("jisuan").value;
     

 switch(sel){
        case "+":
         document.getElementById("result").value=num1+num2;
         break;
         case "-":
         document.getElementById("result").value=num1-num2;
         break;
         case "*":
         document.getElementById("result").value=num1*num2;
         break;
         case "/":
         document.getElementById("result").value=num1/num2;
        break;
     }
 
     
}


