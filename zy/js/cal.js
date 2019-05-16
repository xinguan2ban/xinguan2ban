function clickme(){
	var str1=parseInt(document.getElementById("num1").value);
	var str2=parseInt(document.getElementById("num2").value);

	var cal=document.getElementById("cal").value;
	var result;
	switch(cal){
		case '+':result=str1+str2;break;
		case '-':result=str1-str2;break;
		case '*':result=str1*str2;break;
		case '/':result=str1/str2;break;
		default:alert("错误");break;
	}
	document.getElementById("result").value=result;
	
	var  num1= document.getElementById('num1').value;
	if(!(/^[0-9]+\.{0,1}[0-9]{0,2}$/.test(num1))){ 
	    alert("输入非法数值，请重输");  
	    return false; 
	} 
    var  num1= document.getElementById('num1').value;
	if(!(/^[0-9]+\.{0,1}[0-9]{0,2}$/.test(num1))){ 
	    alert("输入非法数值，请重输");  
	    return false; 
	} 

}

