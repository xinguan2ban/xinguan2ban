function clickme(){
	var num1= parseFloat(document.getElementById("num1").value);
	var num2=parseFloat(document.getElementById("num2").value);
    var cal=document.getElementById("cal").value;
	var reg= /^\d+(\.\d+)?$/;
	var result;
	if((reg.test(num1)==true)&(reg.test(num2)==true)){
		switch(cal){
			case '+':result=num1+num2;break;
			case '-':result=num1-num2;break;
			case '*':result=num1*num2;break;
			case '/' : result=num1 / num2;break;
		}
		document.getElementById("num3").value=result;
	}else{
		alert("请输入数字");
	}