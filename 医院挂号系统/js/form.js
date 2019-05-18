$(function(){
	$('.date-pick').datePicker({clickInput:true});
})
function check(){
	var item = $(":checkbox[name='binglei[]']:checked");
	if($("#name").val()=="" || $("#name").val()=="请输入患者的姓名")
	{
		alert("请填入您的姓名 (带*为必填内容)");
		$("#name").focus();
		$("#name").css("background","#ccc");
		return false;
	}
	var partten = /^[\u4e00-\u9fa5A-Za-z]*$/;
	if(!partten.test($("#name").val()))
	{
		alert("请填写您正确的姓名格式");
		$("#name").focus();
		$("#name").css("background","#ccc");
		return false;
	}
	
	var age = $.trim($("#ageses").val());
      var regAge = /^\d{1,2}$/;
     if(regAge.exec(age)==null)
     {
         alert("年龄格式输入不正确!");
		 $("#ageses").focus();
		$("#ageses").css("background","#ccc");
		return false;
      }

	
	if($("#tel").val()=="" || $("#tel").val()=="请输入您的电话号码")
	{
		alert("请填入您的电话 (带*为必填内容)");
		$("#tel").focus();
		$("#tel").css("background","#ccc");
		return false;
	}
	var partten3 =/(13|14|15|18)[0-9]{9}$/;
	if(!partten3.test($("#tel").val()))
	{
		alert("请填入您正确的手机号码");
		$("#tel").focus();
		$("#tel").css("background","#ccc");
		return false;
	}
	if($("#keshi").val()=="")
	{
		alert("请选择您要预约专科(带*为必填内容)");
		$("#keshi").focus();
		$("#keshi").css("background","#ccc");
		return false;
	}
	if($("#zj").val()=="")
	{
		alert("请选择您要预约的专家(带*为必填内容)");
		$("#zj").focus();
		$("#zj").css("background","#ccc");
		return false;
	}
	if($("#time").val()=="" || $("#time").val()=="请选择预约门诊时间")
	{
		alert("请选择预约门诊时间(带*为必填内容)");
		$("#time").focus();
		$("#time").css("background","#ccc");
		return false;
	}
}