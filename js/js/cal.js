function count(){
    var a=parseInt(document.getElementById('num1').value);
	var b=parseInt(document.getElementById('num2').value);
    var select=document.getElementById('select').value;
    var result='';
	switch(select){
        case '+':result = a+b; break;
        case '-':result = a-b; break;
        case '*':result = a*b; break;
        case '/':result = a/b; break;
	}
   
    document.getElementById('result').value=result;
   }