
    function count(){
     var a = document.getElementById("txt1").value;
      var b = document.getElementById("txt2").value;
     var c = document.getElementById("select").value;
   if(a==""|| isNaN(a)|| b==""|| isNaN(b)){
		   	alert("请填写数字");
		   }
     a = parseFloat(a);
   b = parseFloat(b);
     switch(c){
         case "+":
         document.getElementById("1").value=parseInt(a)+parseInt(b);
         break;
         case "-":
         document.getElementById("1").value=parseInt(a)-parseInt(b);
         break;
         case "*":
         ocument.getElementById("1").value=parseInt(a)*parseInt(b);
         break;
         case "/":
         document.getElementById("1").value=parseInt(a)/parseInt(b);
         break;
     }
    }
    
