$(function(){
	showDropMenu()
	
})

function showDropMenu(){
	user = $(".user-img")
	menu = $(".drop-menu")
	user.on("mouseover",function(){
		menu.css({
			"display":"block"
		})
	})
	
	user.on("mouseout",function(){
		menu.css({
			"display":"none"
		})
	})
	
	menu.on("mousemove",function(){
		menu.css({
			"display":"block"
		})
	})
	
	menu.on("mouseout",function(){
		menu.css({
			"display":"none"
		})
	})
	
}

