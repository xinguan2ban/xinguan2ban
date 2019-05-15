function clickme(){
 var num1 = document.getElementById("num1");
 var num2 = document.getElementById("num2");

 var num11=parseInt(num1.value);
 var num22=parseInt(num2.value);
 
 var cal= document.getElementById("cal").value;
     
if(!(isNaN(num1.value)||isNaN(num2.value))){
 switch(cal){
        case "+":
         document.getElementById("result").value=num11+num22;
         break;
         case "-":
         document.getElementById("result").value=num11-num22;
         break;
         case "*":
         document.getElementById("result").value=num11*num22;
         break;
         case "/":
         document.getElementById("result").value=num11/num22;
        break;
    }
 }
      else	alert("不是数字");

}
