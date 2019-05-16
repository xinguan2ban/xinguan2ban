var result_1;
//加法
function add() {
  var a = getFirstNumber();
  var b = getTwiceNumber();
  var re =Number( a) +Number( b);
  sendResult(re);
}

//减法
function subtract() {
  var a = getFirstNumber();
  var b = getTwiceNumber();
  var re = a - b;
  sendResult(re);
}

//乘法
function ride() {
  var a = getFirstNumber();
  var b = getTwiceNumber();
  var re = a * b;
  sendResult(re);
}

//除法
function devide() {
  var a = getFirstNumber();
  var b = getTwiceNumber();
  var re = a / b;
  sendResult(re);
}

//给p标签传值
function sendResult(result_1) {
  var num = document.getElementById("result")
  num.innerHTML = result_1;
}

//获取第一位数字
function getFirstNumber() {
  var firstNumber = document.getElementById("first").value;
  return firstNumber;
}

//获取第二位数字
function getTwiceNumber() {
  var twiceNumber = document.getElementById("twice").value;
  return twiceNumber;
}