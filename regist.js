function checkUsername(){
	/*第一步：获取到控件*/
	var usernameEle=document.getElementById("username");
	/*alert(usernameEle);*/
	/*第二步：获取到控件的值*/
	
	var usernameVal=usernameEle.value("");
	/*alert(usernameVal);*/
	/*第三步：判断值是否满足要求*/
	/*简单来写：必须是8-14位的长度（正则表达式）*/
	var len=usernameVal.length;
	
	/*第四步：在该控件的后面给出相应的信息提示（也就是写在对应的span标签中)*/
	var usernameSpan=document.getElementById("usernameSpan");
	if(len<8||len>14){
		usernameSpan.innerHTML="<font color='red'>请输入合法的输入名</font>"
	}else{
		usernameSpan.innerHTML="<font color='lightcoral'>√</font>"
	}
}
function checkPassword(){
	
}
