$(function(){
	goTop()
})

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