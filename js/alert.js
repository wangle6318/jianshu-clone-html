$(function(){
	window.alert=alert;
	
	function alert(data) {
	    var a = document.createElement("div"),
	        p = document.createElement("p"),
	        btn = document.createElement("button"),
	        textNode = document.createTextNode(data ? data : ""),
	        btnText = document.createTextNode("确定");
	    // 控制样式
	    
	    css(a, {
	    	"position" : "fixed",
	        "left" : "0",
	        "right" : "0",
	        "top" : "20%",
	        "width" : "200px",
	        "margin" : "0 auto",
	        "height":"125px",
	        "width":"300px",
	        "background":"linear-gradient(-45deg, rgba(255, 200, 255, .5) 0, rgba(255, 200, 255, .5) 25%, transparent 25%, transparent 50%, rgba(255, 200, 255, .5) 50%, rgba(255, 200, 255, .5) 75%, transparent 75%, transparent)",
	        "background-size":"4px 4px",
	        "border-radius":"10px",
	        "z-index":"99999"
	    });
	    css(p, {
	    	"font-weight":"bold",
	    	"text-align":"center",
	    	"height":"80px",
	    	"line-height":"80px"
	    });
	    css(btn, {
	        "position": "relative",
			"width": "60px",
			"height": "25px",
			"border": "none",
			"border-radius": "5px",
			"background-color": "#ec7259",
			"color": "white",
			"left": "120px",
			"bottom": "10px",
			"outline":"none",
			"cursor":"pointer"
	    });    
	
	    // 内部结构套入
	    p.appendChild(textNode);
	    btn.appendChild(btnText);
	    a.appendChild(p);
	    a.appendChild(btn);
	    // 整体显示到页面内
	    document.getElementsByTagName("body")[0].appendChild(a);
	 
	            // 确定绑定点击事件删除标签
	    btn.onclick = function() {
	        a.parentNode.removeChild(a);
	    }
	    
	    document.getElementsByTagName("div").showModal()
	}
	
	function css(targetObj, cssObj) {
	    var str = targetObj.getAttribute("style") ? targetObj.getAttribute("style") : "";
	    for(var i in cssObj) {
	        str += i + ":" + cssObj[i] + ";";
	    }
	    targetObj.style.cssText = str;
	}
	
	
	
})