function checkUsername(){
//获取控件
//alert("hello");
var usernameEle=document.getElementById("username");
//alert(usernameEle);
//value和val的区别
//获取控件值
var usernameVal=usernameEle.value;
//alert(usernameVal);
//判断值是否满足要求
//必须是8-14位的长度，正则表达式
var len=usernameVal.length;

//在该控件的后面给出相应的信息提示(span)
var usernameSpan=document.getElementById("usernameSpan");
if (len<8||len>14){
usernameSpan.innerHTML="<font color='red'>请输入合法用户名</font>";
}else{
usernameSpan.innerHTML="<font color='red'>ok</font>";
}
}
function checkPassword(){
//获取控件
//alert("hello");
var passwordEle=document.getElementById("password");
//alert(usernameEle);
//value和val的区别
//获取控件值
var passwordVal=passwordEle.value;
//alert(usernameVal);
//判断值是否满足要求
//必须是8-14位的长度，正则表达式
var len=passwordVal.length;

//在该控件的后面给出相应的信息提示(span)
var passwordSpan=document.getElementById("passwordSpan");
if(len<3||len>6){
passwordSpan.innerHTML="<font color='red'>请输入正确密码</font>";
}else{
passwordSpan.innerHTML="<font color='red'>ok</font>";
}
}