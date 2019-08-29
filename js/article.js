$(function(){
	commentEnter()
	authorOnly()
	thumbsup()
	replyComment()
	goTop()
	markArticle()
	loveArticle()
	following_author()
})

function commentEnter(){
	var txt = $(".new-comment textarea")
	var cancle = $(".cancel-comment")
	var __cancle = $(".sub-comment-list .new-comment .cancel")
	txt.on("click",function(){
		$(this).siblings(".write-function-block").css({
			"display":"block"
		})
	})

	cancle.on("click",function(){
		$(this).parent().css({
			"display":"none"
		})
	})

	__cancle.on("click",function(){
		$(this).parentsUntil(".comment").filter(".sub-comment-list").children(".reply-form").css({
			"display":"none"
		})
	})
}

function authorOnly(){
	author = $(".author-only")
	author.on("click",function(){
		if (author.hasClass("active")) {
			author.removeClass("active")
		} else{
			author.addClass("active")
		}
	})
}

function thumbsup(){
	var thumbs = $(".tool-group .thumbsup")
	thumbs.on("click",function(){
		oldsrc = $(this).find("img").attr("src")
		newsrc = ""
		if (oldsrc.indexOf("-") == -1) {
			newsrc = oldsrc.split(".")[0] +"-a.svg"
		} else{
			newsrc = oldsrc.split("-")[0] +".svg"
		}
		$(this).find("img").attr("src",newsrc)
	})
}

function replyComment(){
	var reply = $(".tool-group .reply")
	reply.on("click",function(){
		$(this).parentsUntil(".comment").filter(".comment-content").siblings(".sub-comment-list").children(".reply-form").css({
			"display":"block"
		})
	})
}


function goTop(){
	$(document).scroll(function(){	
		var top = $(document).scrollTop()
		var side_tool = $(".side-tool li:first-child")
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
	
	var side_tool = $(".side-tool li:first-child")
	side_tool.on("click",function(){
            $('body,html').animate({scrollTop:0},300);	
	})
}

function markArticle(){
	var mark = $(".side-tool .mark")
	mark.on("click",function(){
		oldsrc = $(this).find("img").attr("src")
		if (oldsrc.indexOf("-") == -1) {
			newsrc = oldsrc.split(".")[0]+"-active.svg"
		} else{
			newsrc = oldsrc.split("-")[0]+".svg"
		}
		$(this).find("img").attr("src",newsrc)
	})
}

function loveArticle(){
	var love = $(".side-tool .love")
	love.on("click",function(){
		oldsrc = $(this).find("img").attr("src")
		if (oldsrc.indexOf("-") == -1) {
			newsrc = oldsrc.split(".")[0]+"-active.svg"
		} else{
			newsrc = oldsrc.split("-")[0]+".svg"
		}
		$(this).find("img").attr("src",newsrc)
	})
}

function following_author(){
	$(".info").on("mouseenter",".following",function(){
		$(this).text("取消关注")
	})
	
	$(".info").on("mouseleave",".following",function(){
		$(this).text("已关注")
	})
	
	$(".info").on("click",".follow",function(){
		$(".follow").removeClass("follow").removeClass("btn-success").addClass("btn-default").addClass("following").text("已关注")
	})
	
	$(".info").on("click",".following",function(){
		$(".following").removeClass("following").removeClass("btn-default").addClass("btn-success").addClass("follow").text("关注")
	})
	
}
