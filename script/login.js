$(".header img").on("click",function(){
    location.href="../index.html";
})
$('span:contains("换一张")').css("font","10px '微软雅黑'");

var userReg=/^1\d{10}$/;
var pwdReg=/^[0-9a-z\_]{4,20}$/i;
var codeReg=/^2983$/;

//验证用户名、密码输入是否符合规定，减轻服务器负担
$("#btn")
.on("click",function(){
	var username=$("#usr").val();
	var password=$("#pwd").val();
	var code=$("#code").val();
	if(!userReg.test(username)){
		$(".usrerror span").html("用户名不合规定").css("color","red");
		$("#usr").css("borderColor","red");
	}else{
		$(".usrerror span").html("");
	}

	if(!pwdReg.test(password)){
		$(".pwderror span").html("密码输入不合规定").css("color","red");
		$("#pwd").css("border-color","red");
	}else{
		$(".pwderror span").html("");
	}

	if(!codeReg.test(code)){
		console.log(code);
		$(".codeerror span").html("请输入正确的验证码").css("color","red");
		$("#code").css("border-color","red");
	}else{
		$(".codeerror span").html("");
	}
	// var evt=e || window.e;
	console.log(!userReg.test(username),!pwdReg.test(password),!codeReg.test(code));
	// if(!userReg.test(username) || !pwdReg.test(password) ||  !codeReg.test(code) || username=="" || password==""){
	// 	return false;
	// }

	console.log(1);
	// var opt={
 //        	url:"http://localhost/yiguo/php/user.php",
 //            type:"POST",
 //            data:{username:$("#usr").val(),password:$("#pwd").val(),type:"login"}
 //          }
	// $.ajax(opt)
	// .then(function(res){
	// 	console.log(res);
	// 	// var user = JSON.parse(res);
	//     if(res == "true"){
	//         location.href="http://localhost/yiguo/index.html";
	//     }else{
	//         $(".codeerror span").html("用户名密码不匹配").css("color","red");
	//     }
	// })        

});






