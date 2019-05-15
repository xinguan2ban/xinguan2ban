function count(){

var a=parseInt(document.getElementById("num1").value);

var b=parseInt(document.getElementById("num2").value);

var select=document.getElementById("cal").value;
var c='';
switch(select){
case "+":c=a+b;break;
case "-":c=a-b;break;
case "*":c=a*b;break;
case "/":c=a/b;break;
}
document.getElementById("num3").value=c;


}
function check(obj){ 
if (isNaN(obj.value)) 
{alert("请输入数字！"); 
obj.value="";} 
} 