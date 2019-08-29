$(function(){	
	InitUMeditor()
	newArticle()
	changeActive()
	delArticle()
	save()
})

function InitUMeditor(){
	var um = UM.getEditor('myEditor',{
		toolbar: ['undo', 'redo','|', 'bold','italic','strikethrough',
		'fontfamily','fontsize','forecolor','backcolor','|','justifyleft','justifycenter','justifyright',
		'horizontal','|','link unlink |','video','image','emotion','|','source','preview','imagecenter'],
		initialFrameHeight: 538,
		initialFrameWidth: 820,
		autoHeightEnabled: false,
		autoFloatEnabled: true,
		maxInputCount:10,
		'autotypeset':true,
	});
}


function newArticle(){
	var new_art = $(".new-article")
	var list = $(".article-list")
	new_art.on("click",function(){
		old = $(".article-list").find(".article-active")
		if (old.length) {
			setCookie(old.attr("data-artid"),UM.getEditor('myEditor').getContent())
		}
		now = new Date()
		var data_temp = String.fromCharCode(65 + Math.floor(Math.random()*26)) + String(now.valueOf()).substring(5,13)
//		console.log(now.valueOf())
//		console.log(data_temp)
		txt = String(now.getFullYear()) +"-"+ String(now.getMonth()+1) +"-"+ String(now.getDate()) +" "+ String(now.getHours()) +":"+ String(now.getMinutes()) +":"+ String(now.getSeconds()) 
		var _str = '<li class="article article-active"'+ ' data-artid='+ data_temp +'>' +
						'<img src="img/icon-articles.svg"/>' +
						'<span class="article-title">'+txt+'</span>' +
						'<img src="img/del.svg" class="delete"/>' +
					'</li>'
		list.children("li").each(function(){
			$(this).removeClass("article-active")
		})
		list.prepend(_str)
		changeTitle()
		UM.getEditor('myEditor').setContent('<p>这里我可以写一些输入提示</p>')
	})	
}

function changeActive(){
	var current = $(".container-middle .article-list")
	current.on("click",".article",function(){
		old = $(".article-list").find(".article-active").attr("data-artid")
		var isnum = /^\d+$/.test(old);
		console.log(isnum)
		console.log(old)
		setCookie(old,UM.getEditor('myEditor').getContent())
		$(this).addClass("article-active").siblings().removeClass("article-active")
		changeTitle()
		UM.getEditor('myEditor').setContent(getCookie($(this).attr('data-artid')))
	})
}

function delArticle(){
	var current = $(".container-middle .article-list")
	current.on("click",".article .delete",function(){
		var sure = confirm("即将删除文章：" + $(this).siblings("span").text())
		if (sure) {
			var article_id = $(this).parent().attr("data-artid")
			console.log(article_id)
			if ($(this).parent(".article").hasClass("article-active")) {
				index = $(this).parent(".article").index()
				list = $(this).parent(".article").parent(".article-list")
				all = list.find("li").length
				$(this).parent(".article").remove()
				if (all == 1) {
					$(".container-right .title").val("")
				} else if (index +1 == all) {
					list.children().eq(index-1).addClass("article-active")
					console.log(list.children().eq(index-1).attr("data-artid"))
				} else {
					list.children().eq(index).addClass("article-active")
				}			
			} else {
				$(this).parent(".article").remove()
			}
			changeTitle()
			
		}
	})	
}

function changeTitle(){
	var title = $(".container-right .title")
	var article = $(".article-list .article")
	var list = $(".article-list")
	article.each(function(){
		if ($(this).hasClass("article-active")) {
			title.val($(this).find("span").text())
		} 
	})
	
	title.on("input propertychange",function(){
		list.find(".article-active .article-title").text(title.val())
	})
}

function alert_info(){
	all_width = $(document).width()
	all_height = $(document).height()
		
	left = (all_width - 200) / 2
	top = (all_height - 50) / 2
		
	info = $(".alert-info").text()
	if (!info) {
		console.log("error")
		return false;
	} else{
		console.log(info)
		$(".alert-info").css({
			"left":left,
			"top":top,
			"display":"block"
		}).fadeOut(2000)
	}
}


function save(){
	$(".save-article").on("click",function(){
		if ($(".article-list").children('li').length==0) {
			alert("没有内容可以保存")
			return false;
		} 
		article_id = $(".article-list").children(".article-active").attr("data-artid")
		article_name = $(".article-list").children(".article-active").children("span").text()
		
		article_body = UM.getEditor('myEditor').getContent()
		
		if (article_name.length == 0) {
			alert('文章标题不能为空')
			return false;
		}

		if (article_body.length==0) {
			alert('文章内容不能为空')
			return false;
		}
		
		if(!/^[0-9]+$/.test(article_id)){
			alert("helllo")
		}
		
		setCookie(article_id,article_body,1)
		
	})
}



//获取cookie，参数name指定要获取的cookie的名称
function getCookie(name) {
    var start = document.cookie.indexOf(name + "="); //得到cookie字符串中的名称
    var len = start + name.length + 1; //得到从起始位置到结束cookie位置的长度
    //如果起始没有值且name不存在于cookie字符串中，则返回null
    if ((!start) && (name != document.cookie.substring(0, name.length))) {
        return null;
    }
    if (start == -1) return null; //如果起始位置为-1也为null
    var end = document.cookie.indexOf(';', len); //获取cookie尾部位置
    if (end == -1) end = document.cookie.length; //计算cookie尾部长度
    return unescape(document.cookie.substring(len, end)); //获取cookie值
}
//设置cookie，name为名称，value为值，expires为过期日，path为路径，domain为域名，secure为加密
function setCookie(name, value, expires, path, domain, secure) {
    var today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24; //计算cookie的过期毫秒数
    }
    //计算cookie的过期日期
    var expires_date = new Date(today.getTime() + (expires));
    //构造并保存cookie字符串
    document.cookie = name + '=' + escape(value) +
        ((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()
        ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ((secure) ? ';secure' : '');
}
//删除cookie，必须先获取指定名称的cookie，然后让cookie过期
function Cookie(name, path, domain) {
    if (getCookie(name)) document.cookie = name + '=' +
        ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}



