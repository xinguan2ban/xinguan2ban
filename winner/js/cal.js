function clickme(){
	
	 var one = document.all.one.value;

   　　　　var two= document.all.two.value;

   　　　　var sh=document.all.suanfa.value;

   　　　　var che;

  　　　　 switch(sh){

   　　　　 case "+":                     
                  che=parseFloat(one)+parseFloat(two);break;

    　　　　case "-":

　　　　　　　　　　che=parseFloat(one)-parseFloat(two);break;

   　　　　 case"*":
                  che=parseFloat(one)*parseFloat(two);break;

    　　　　case"%":
                   che=parseFloat(one)%parseFloat(two);break;

}

   　　　　　　document.getElementById("result").value=che;

 

  　　　　　　
   }