
function cal(){
	var i = 0;
	var x = document.getElementById("num1").value;
	var y = document.getElementById('num2').value;
	var op = document.getElementById("op").value;
	if(op==0)
	{
		i=parseInt(x)+parseInt(y);
	}
	else{
		if(op==1){
			i=x-y;
		}
		else{
			if(op==2){
				i=x*y;
			}else
			{
				i=x/y;
			}
		}
	}
document.getElementById("result").value=i;	
}

	    function away(str){
        var reg = /^\d+$/;              
               if (!reg.test(str)) {                  
                   alert("请输入数字");
               }
	
}
