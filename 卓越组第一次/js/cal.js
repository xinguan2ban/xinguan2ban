function click(){
 var num1 = parseInt(document.getElementById("num1").value);
 var num2 = parseInt(document.getElementById("num2").value);

 var cal= document.getElementById("cal").value;
     

 switch(cal){
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