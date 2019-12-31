$(function(){
	
	$("#btn").click(function(){
		var nc=$("#txt").val();
		if(nc==""){alert("请评论!");return;}
		var str="<div class='liuyan-tx'><img src='imgs/face.jpg'/></div><div class='liuyan-img'><p>"+nc+"</p></div>";
		$("#liuyan").append(str);
	});
	
	
	$(".jiaoliu").click(function(){
	  $(".jiaoliu-kuang").css({"transform":"translateX(0px)"});
	});
	$("#cloce").click(function(){
	  $(".jiaoliu-kuang").css({"transform":"translateX(1000px)"});
	});
	
	
	
	$(".alert").on("close.bs.alert",function(e){
					$("#myModa1").modal();
				})
	
	
	$("#btn1").click(function(){
		var jl=$("#txt1").val();
		if(jl==""){alert("请评论!");return}
		var str="<div class='c2'><div class='jiaoliu-main-kk'><div class='tag tag2'><p class='arrow'><em></em><span>"+jl+"</span></p></div></div><div class='jiaoliu-main-img k1'><img src='imgs/icon1.png'/></div></div>";
		$("#jiaoliu-main").append(str)
	})
	/*广告*/
	$("#btn2").click(function(){
		$(".gg").hide(500)
	})
	
	//
	$("div").scroll(function() {
  		$(".footer").slideDown();
	});
	 $(window).scroll(function(event){
	 	$(".footer").fadeIn();
    });
})