function count(){

var a=parseInt(document.getElementById("num1").value);

var b=parseInt(document.getElementById("num2").value);

var cal=document.getElementById("cal").value;
var c;
if(a==""|| isNaN(a)|| b==""|| isNaN(b)){
		   	alert("请填写数字");
		   }
else{
switch(cal){
case "+":c=a+b;break;
case "-":c=a-b;break;
case "*":c=a*b;break;
case "/":c=a/b;break;
}
document.getElementById("num3").value=c;
}

}

		   
		   
		 

