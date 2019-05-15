
function validate(str){              
}
function calculator(){
	var pre=document.getElementById("pre").value;
	var next=document.getElementById("next").value;
	var opra=document.getElementById("operator").value;
 
	var result=0;
	switch(opra) {
		case "+":
			result=parseInt(pre)+parseInt(next);
			break;
		case "-":
		result=parseInt(pre)-parseInt(next);
			break;
		case "*":
			result=parseInt(pre)*parseInt(next);
			break;
		case "/":
			if(parseInt(next)!=0){
				result=parseInt(pre)/parseInt(next);
			}
			else{
				alert("除数不能为0");
				return;
			}
			break;
		default:
			break;
	}
	document.getElementById("result").value=result;

}