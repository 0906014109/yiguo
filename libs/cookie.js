function setCookie(name,value,options){
	if(!name || !value){
		return 0; //必选参数为空,没法继续设置cookie;
	}
	var cookieString ; //最终拼接的字符串;
	cookieString = name+"="+value;
	if(!(options instanceof Object)){//如果options设置不合规定，利用现有字符串设置cookie即可。
		document.cookie = cookieString;
		return 0;
	}
	if(typeof options.expires == "number"){
		var d = new Date();
		d.setDate(d.getDate() + options.expires);
		cookieString += ";expires="+d;
	}
	if(typeof options.path == "string"){
		cookieString += ";path="+options.path;
	}
	document.cookie = cookieString;
}
function removeCookie(name,options){
	var obj = {
		expires:-1
	}
	options.path ? obj.path = options.path : "";
	setCookie(name," ",obj)
}
function getCookie(name){
	var cookieString = document.cookie;
	var cookieArray = cookieString.split("; ");//返回结果为字符串数组
	for(var i = 0 ; i < cookieArray.length ; i++){
		var item = cookieArray[i].split("=");
		if(item[0] == name){
			return item[1];
		}
	}
}