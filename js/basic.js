$(function(){
	change_bind()
	window.onresize = function(){
		bind_info()
	}
	bind_email()
	sex_choice()
})


function bind_info(){
	
	var left = $(document).width() / 3
	var top = ($(document).height() - 314) / 2
//	console.log(left)
//	console.log(top)
	$(".modal-dialog").css({
		"left": left,
		"top": top
	})
}



function change_bind(){
	$(".cancel-bind").parent().on("mouseenter",function(){
		$(this).children("a").removeClass("cancel-bind")
	})
	
	$(".cancel-bind").parent().on("mouseleave",function(){
		$(this).children("a").addClass("cancel-bind")
	})
	
	$(".container").on("click",".close",function(){
		$(".container .modal-dialog").remove()
	})
	
	$("#bind-phone").on("click",function(){
		_str_phone = '<div class="modal-dialog">' +
						'<div class="modal-header">' +
							'<h4 class="modal-title">绑定手机</h4>' +
							'<button type="button" class="close"><img src="img/close.svg"/></button>' +
						'</div>' +
						'<div class="modal-body">' +
							'<div class="tips">' +
								'根据国家法律要求，目前只支持国内手机号。绑定遇到问题？' +
							'</div>' +
							'<form class="mobile-reset-password">' +
								'<div class="input-prepend restyle">' +
									'<div class="overseas">' +
										'<input type="text" placeholder="手机号" />'+
									'</div>' +
									'<div class="input-prepend security-up-code">' +
										'<input type="text" placeholder="短信验证码" />' +
										'<a class="btn-in-resend">发送验证码</a>' +
									'</div>' +
									'<a class="sign-in-button">确认</a>' +
								'</div>' +
							'</form>' +
						'</div>' +
					'</div>'
		$(".container").append(_str_phone);
		bind_info();	
	})
	
	$("#bind-email").on("click",function(){
		_str_email = '<div class="modal-dialog">' +
						'<div class="modal-header">' +
							'<h4 class="modal-title">绑定邮箱</h4>' +
							'<button type="button" class="close"><img src="img/close.svg"/></button>' +
						'</div>' +
						'<div class="modal-body">' +
							'<form class="email-reset-password">' +
								'<div class="input-prepend restyle">' +
									'<div class="overseas">' +
										'<input type="text" placeholder="请输入你的常用邮箱" />'+
									'</div>' +
									'<div class="input-prepend security-up-code">' +
										'<input type="text" placeholder="验证码" />' +
										'<a class="btn-in-resend">发送验证码</a>' +
									'</div>' +
									'<a class="sign-in-button">确认</a>' +
								'</div>' +
							'</form>' +
						'</div>' +
					'</div>'
		$(".container").append(_str_email);
		bind_info();	
	})
	
	$("#cancel-bind-email").on("click",function(){
		sure = confirm("确定要解绑邮箱吗?")
		if (sure){
			_email = $(this).siblings("div").text()
			_str_email = '<div class="modal-dialog">' +
							'<div class="modal-header">' +
								'<h4 class="modal-title">安全验证</h4>' +
								'<button type="button" class="close"><img src="img/close.svg"/></button>' +
							'</div>' +
							'<div class="modal-body">' +
								'<div class="tips">' +
								'为了保证你的账号安全，请先验证身份，验证成功后进行下一步操作，验证码10分钟内有效' +
								'</div>' +
								'<div class="tips email-contact">' +
									'<h3>' +
										'<span>用邮箱</span>' + _email +
										'<span>验证</span>' +
									'</h3>' +
								'</div>' +
								'<form class="email-reset-password">' +
									'<div class="input-prepend restyle">' +
									'<div class="input-prepend security-up-code">' +
										'<input type="text" placeholder="验证码" />' +
										'<a class="btn-in-resend">发送验证码</a>' +
									'</div>' +
										'<a class="sign-in-button">确认</a>' +
									'</div>' +
								'</form>' +
							'</div>' +
						'</div>'
			$(".container").append(_str_email);
			bind_info();
		}
	})
	
}

function bind_email(){
	$(".container").on("click",".modal-dialog .email-reset-password .btn-in-resend",function () {
		$(this).parent().siblings(".overseas").children("input").attr("readonly",true);
		var btn = $(".container .modal-dialog .email-reset-password .btn-in-resend")
		btn.attr("disabled",true).css("pointer-events","none");
		var interValobj;
		var count = 600;
		var curCount = count;
		btn.html(curCount + "s后重发")
		interValobj = window.setInterval(function(e){
			if (curCount) {
				curCount--;
				btn.html(curCount + "s后重发")
			} else{
				window.clearInterval(interValobj)
				$(".container .modal-dialog .email-reset-password .overseas input").attr("readonly", false);
				btn.html("发送验证码")
				btn.attr("disabled",false).css("pointer-events","auto");
			}
		},1000)
	})
	
	$(".container").on("click",".modal-dialog .email-reset-password .sign-in-button",function () {
		email = $(this).siblings(".overseas").children("input").val();
		console.log(email)
		code = $(this).siblings(".security-up-code").children("input").val()
		console.log(code)
		$(".container .modal-dialog").remove();
		_str_email = 	'<td class="setted">' +
							'<div>' + '1085987931@qq.com' + '</div>' +
							'<a class="cancle-bind" id="cancel-bind-email">取消绑定</a>' +
						'</td>';
		block_email = $(".container-right .base tr:eq(2)");
		block_email.children("td:eq(1)").remove();
		block_email.append(_str_email);
})
}

function unbind_email(){
	$(".container").on("click",".modal-dialog .unbind_email .btn-in-resend",function () {
		alert("hello");
	})
}

function sex_choice(){
	$(".infomation tr:eq(0) td:eq(1) input").on("click",function(){
		if (typeof($(this).attr("checked"))=="undefined") {
			$(this).attr("checked","checked").siblings().removeAttr("checked");
		}
	})
	
	$(".setting-save").on("click", function () {
        var sex = $(".infomation tr:eq(1) td:eq(1) input:checked").val()
        console.log(sex)
   });
}


