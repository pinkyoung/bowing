document.onreadystatechange = function () {      
   if(document.readyState=="complete") {            
      $('.loading').css("display","none");      
   }     
} 
window.onload=function(){
	// 佛像的选择
	$(".img_con").click(function(){
		var data_name = $(this)[0].getAttribute("data_name");	
		var data_num = $(this)[0].getAttribute("data_num");		
		localStorage.setItem("data_name",data_name);
		localStorage.setItem("data_num",data_num);		
		location.href="html/serve.html";								
	});
}