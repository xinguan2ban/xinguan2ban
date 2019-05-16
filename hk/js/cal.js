function jisuan(){
	//数值的传达与计算
	var a=parseInt(document.getElementById("num1").value);
	var b=parseInt(document.getElementById("num2").value);
	var cal=document.getElementById("nal").value;
	var c=document.getElementById("nal").value;
	switch(cal){
		case'+':c=a+b;break;
		case'-':c=a-b;break;
		case'*':c=a*b;break;
		case'/':c=a/b;break;
		default:alert("错误");break;
	}
	document.getElementById("result").value=c;
	//检验第一个数值
	var  num1= document.getElementById('num1').value;
	if(!(/^[0-9]*$/.test(num1))){ 
	    alert("输入非法数值，请重输");  
	    return false; 
	} 
	//检验第二个数值
	var  num1= document.getElementById('num1').value;
	if(!(/^[0-9]*$/.test(num1))){ 
	    alert("输入非法数值，请重输");  
	    return false; 
	} 
}
