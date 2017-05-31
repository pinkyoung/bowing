
	// 判断网页是否加载完成     
   document.onreadystatechange = function () {      
       if(document.readyState=="complete") {            
          $('.loading').css("display","none"); 
          $(".left").addClass("m_l");
		  $(".right").addClass("m_r");     
       }     
   } 
   window.onload=function(){
	   	// 选择佛像
		var data_name = localStorage.getItem("data_name");
		var data_num = localStorage.getItem("data_num");
		$(".ser_name").html(data_name);
		$(".fo_src")[0].setAttribute("src","../img/fo"+data_num+".png");	
		$(".ser_back").click(function(){
			history.go(-1);
		});
		$(".img_fo").click(function(){
			$(".sure_taskf").css("display","block");
		});
		// 选择香
		$(".incense").click(function(){		
			if ( $(".smoke").css("display")=="block" ) {
				$(".done_incense").css("display","block");
				setTimeout(function(){
					$(".done_incense").css("display","none");
				},2000);
			}else{
				$(".incense_cho").css("display","block");
			};
		});
		$(".safe").click(function(){		
			var name_incense = $(this)[0].getAttribute("data-incense");
			var money_incense = $(this)[0].getAttribute("data-money");
			var img_name = $(this)[0].getAttribute("img_name");
			localStorage.setItem("img_name",img_name);
			$(".data_incense").html(name_incense);
			$(".data_money").html("("+money_incense+")");
			$(".sure_task").css("display","block");
		});
		// 选择水果
		$(".fruit").click(function(){		
			var name_incense = $(this)[0].getAttribute("data-incense");
			var money_incense = $(this)[0].getAttribute("data-money");
			var img_name = $(this)[0].getAttribute("img_name");
			localStorage.setItem("img_name",img_name);
			$(".data_incense").html(name_incense);
			$(".data_money").html("("+money_incense+")");
			$(".sure_task").css("display","block");		
		});
		// 重新选择按钮
		$(".re_btn").click(function(){		
			$(".sure_task").css("display","none");
			$(".sure_taskf").css("display","none");
		});
		var flag = false;
		// 确定选择
		$(".sure_btnf").click(function(){
			location.href="../bowing.html";
		});
		$(".sure_btn").click(function(){		
			var pic_name = localStorage.getItem("img_name");	
			if($(".incense_cho").css("display")=="block"){			
				$(".contain_img").append("<img class='img_incense'/>");
				$(".img_incense")[0].setAttribute("src","../img/"+pic_name+".png");
				$(".smoke").css("display","block");
				$(".contain_burning").css("display","block");
				$(".candle_move").addClass("candle_m");
				$(".incense_move").addClass("incense_m");
				setTimeout(function(){
					$(".incense_burn").css("display","block");
				},1800);							 	
				setTimeout(function(){
					$(".contain_burning").css("display","none");
					alert("获得功德值10！");	
				},3000);							 
				$(".img_incense").css("display","block");		
				$(".incense_cho").css("display","none");
				$(".sure_task").css("display","none");
			}else{
				flag=true;
				$(".sure_task").css("display","none");
				$(".con_fruit").css("display","none");
				$(".fruit_change")[0].setAttribute("src","../img/"+pic_name+".png");
				$(".fruit_change")[1].setAttribute("src","../img/"+pic_name+".png");
				$(".compote").css({"width":"31.33%","height":"108px"});
			}			
			
		});
		
		// 选择水果
		$(".compote").click(function(){		
			if( flag==true ){
				$(".done_fruit").css("display","block");
				setTimeout(function(){
					$(".done_fruit").css("display","none");
				},2000);
			}else{
				$(".con_fruit").css("display","block");
			}	
		});
		// 分享功能
		window.onload=function(){  
			 
		}
		
   }
