$(document).ready(function(){
	//header部分鼠标滑过显示下拉下单。
	$(".shopcart").mouseover(function(){
		//alert(1)
		$(".shopcart-dis1").css({"display":"block"})
	}).mouseout(function(){
		$(".shopcart-dis1").css("display","none")
	}),
	$(".shopcart1").mouseover(function(){
		//alert(1)
		$(".shopcart-dis2").css("display","block")
	}).mouseout(function(){
		$(".shopcart-dis2").css("display","none")
	}),
	
	
	//logo表单点击获取焦点清空里面的内容
	$("#logo form .l1").focus(function(){
		$(this).val("");
	})
	
	
	//导航部分鼠标滑过改变背景颜色
	//、、、、、、、、、、、、、、、、一个小问题，鼠标移动只有一个边框消失，另一个不消失。
	$("#nav ul li").mouseover(function(){
		$(this).css({"background":"#a21e43"}).children().css({"border-right":"none"})
	}).mouseout(function(){
		$(this).css({"background":"#d41c4f"}).children(":not(.last)").css({"border-right":"1px solid #e85573"})
	})
	
	
	//实现轮播图的效果
	//圆点的颜色无法改变2.箭头的背景颜色不能添加
	var mySwiper = new Swiper('#box', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:5000,
		autoplayDisableOnInteraction:false,
		effect:'fade',
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    paginationType : 'bullets',
	    paginationElement:"li",
	    paginationClickable: true,
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
   		prevButton: '.swiper-button-prev',
	})        
	
	
	
	//实现二级菜单的效果
	$(".bannerul1>li").mouseover(function(){
		//alert(1)
		$(this).children(".bannerdiss1").css({"display":"block","box-shadow":"-3px 3px 8px #ccc"})
	}).mouseout(function(){
		$(this).children(".bannerdiss1").css("display","none")
	})
	$(".bannerul1>li").mouseover(function(){
		$(this).css("border-right","none")
	})
	

	
	
	//////////////////////第一层楼的轮播图////////////////////////////
//	var Swiper1 = new Swiper('#box1', {
//	    direction: 'horizontal',
//	    loop: true,
//	    autoplay:3000,
//		autoplayDisableOnInteraction:false,
//		effect:'fade',
//	    // 如果需要分页器
//	    pagination: '#cirs2',   
//	    paginationElement:"li",
//	    paginationClickable: true,
//	}) 

	/////////////////第一层楼的轮播图///////////////////////
	start();
	var timer;
	var flag=true;
	//图片自己实现轮播的效果
	function start(){		
		var page=1;
		clearInterval(timer);			
		timer=setInterval(function(){	
			if(flag){
				$("#lbu1").animate({"left":-948*page},1000);
				page++;
				if(page==6){
					page=1;
					$("#lbu1").animate({"left":"0"},0)
				}
				$(".ollist1 li").eq(page-1).addClass("lblist1").siblings().removeClass("lblist1")
			}
		},3000)
	}
//	//鼠标划过li时样式的改变
	$(".ollist1 li").mouseover(function(){
		$(this).children("a").css({"color":"red","text-decoration":"underline"})
	}).mouseout(function(){
		$(this).children("a").css({"color":"#fff","text-decoration":"none"})
	})
//鼠标点击li时图片也跟随变化
	$(".ollist1 li").click(function(){
		var i=$(this).index();
		$("#lbu1").stop().animate({"left":-948*i},1000);
		$(this).addClass("lblist1").siblings().removeClass("lblist1");
		page=i+1;
		start();
	})
	
	
	/////////////////第二层楼的轮播图////////////////////////////////////////
	start();
	var timer;
	var flag=true;
	//图片自己实现轮播的效果
	function start(){		
		var page=1;
		clearInterval(timer);			
		timer=setInterval(function(){	
			if(flag){
				$("#lbu2").animate({"left":-948*page},1000);
				page++;
				if(page==6){
					page=1;
					$("#lbu2").animate({"left":"0"},0)
				}
				$(".ollist2 li").eq(page-1).addClass("lblist2").siblings().removeClass("lblist2")
			}
		},3000)
	}
//	//鼠标划过li时样式的改变
	$(".ollist2 li").mouseover(function(){
		$(this).children("a").css({"color":"red","text-decoration":"underline"})
	}).mouseout(function(){
		$(this).children("a").css({"color":"#fff","text-decoration":"none"})
	})
//鼠标点击li时图片也跟随变化
	$(".ollist2 li").click(function(){
		var i=$(this).index();
		$("#lbu2").stop().animate({"left":-948*i},1000);
		$(this).addClass("lblist2").siblings().removeClass("lblist2");
		page=i+1;
		start();
	})
/////////////////第三层楼的轮播图////////////////////////////////////////
	start();
	var timer;
	var flag=true;
	//图片自己实现轮播的效果
	function start(){		
		var page=1;
		clearInterval(timer);			
		timer=setInterval(function(){	
			if(flag){
				$("#lbu3").animate({"left":-948*page},1000);
				page++;
				if(page==6){
					page=1;
					$("#lbu3").animate({"left":"0"},0)
				}
				$(".ollist3 li").eq(page-1).addClass("lblist3").siblings().removeClass("lblist3")
			}
		},3000)
	}
//	//鼠标划过li时样式的改变
	$(".ollist3 li").mouseover(function(){
		$(this).children("a").css({"color":"red","text-decoration":"underline"})
	}).mouseout(function(){
		$(this).children("a").css({"color":"#fff","text-decoration":"none"})
	})
//鼠标点击li时图片也跟随变化
	$(".ollist3 li").click(function(){
		var i=$(this).index();
		$("#lbu3").stop().animate({"left":-948*i},1000);
		$(this).addClass("lblist3").siblings().removeClass("lblist3");
		page=i+1;
		start();
	})
	/////////////////第四层楼的轮播图////////////////////////////////////////
	start();
	var timer;
	var flag=true;
	//图片自己实现轮播的效果
	function start(){		
		var page=1;
		clearInterval(timer);			
		timer=setInterval(function(){	
			if(flag){
				$("#lbu4").animate({"left":-948*page},1000);
				page++;
				if(page==6){
					page=1;
					$("#lbu4").animate({"left":"0"},0)
				}
				$(".ollist4 li").eq(page-1).addClass("lblist4").siblings().removeClass("lblist4")
			}
		},3000)
	}
//	//鼠标划过li时样式的改变
	$(".ollist4 li").mouseover(function(){
		$(this).children("a").css({"color":"red","text-decoration":"underline"})
	}).mouseout(function(){
		$(this).children("a").css({"color":"#fff","text-decoration":"none"})
	})
//鼠标点击li时图片也跟随变化
	$(".ollist4 li").click(function(){
		var i=$(this).index();
		$("#lbu4").stop().animate({"left":-948*i},1000);
		$(this).addClass("lblist4").siblings().removeClass("lblist4");
		page=i+1;
		start();
	})



})	
