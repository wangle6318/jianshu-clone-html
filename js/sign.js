$(function(){
	
	fadeLogo()
	showError()
	window.onresize = function(){
		fadeLogo()
	}
	


	
	function fadeLogo(){
		var bw = $(document).width()
		var logo = $(".sign > .logo")
		if (bw < 780) {
			logo.css({
				"display":"none"
			})
		
		} else{
			logo.css({
				"display":"block"
			})
		}
	}
	
	function showError(){
		all_width = $(document).width()
		left = (all_width - 150)/2
		
		name = $(".name-error").text()
		__str = '<div class="error">' + name + '</div>'
		if (name) {
			$(".signup-container").append(__str)
			$(".signup-container").find(".error").css({
				"left":left
			}).fadeOut(2000)
			return false;
		}
		
		acct = $(".acct-error").text()
		__str = '<div class="error">' + acct + '</div>'
		if (acct) {
			$(".signup-container").append(__str)
			$(".signup-container").find(".error").css({
				"left":left
			}).fadeOut(2000)
			return false;
		}
		
		
		
	}
	
})