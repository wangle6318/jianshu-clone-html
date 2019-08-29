$(function(){
	pageChangeRotate()
	cancleFollow()
	goTop()
	load_more_article()
})

function pageChangeRotate(){
	var page_change = $(".page-change")
	var img = $(".page-change > img")	
	page_change.on("click",function(){
		img.addClass("page-change-rotate").animate({height:"auto"},function(){
			$(this).removeClass("page-change-rotate")
		})
	})
}

function cancleFollow(){
	var cancle = $(".following")
	cancle.on("mousemove",function(){
		$(this).text("取消关注")
	})
	
	cancle.on("mouseout",function(){
		$(this).text("已关注")
	})
}


function goTop(){
	$(document).scroll(function(){	
		var top = $(document).scrollTop()
		var side_tool = $(".side-tool li")
		if (top > 400){
			side_tool.css({
				"display":"block"
			})
		} else{
			side_tool.css({
				"display":"none"
			})
		}		
	})
	
	var side_tool = $(".side-tool li")
	side_tool.on("click",function(){
            $('body,html').animate({scrollTop:0},300);	
	})
}


function load_more_article(){
	$(".container-left > .load-more").on("click",function (){
		article_id = [1,2,3,4];
		var x; 
		for (x in article_id){
			console.log(article_id[x])
		}
	})
}
