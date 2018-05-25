var usrMsgJson = {
			code:{
				// el:$("code"),
				reg:/^(2983)$/,
				hasVaild:false
			},
			phone:{
				// el:$("code"),
				reg:/^1\d{10}$/,
				hasVaild:false
			},
			phonecode:{
				// el:$("phonecode"),
				reg:/^\d{6}$/,
				hasVaild:false
			},
			setpwd:{
				// el:$("pw"),
				reg:/^[0-9a-z\_]{4,20}$/i,
				hasVaild:false
			},
			truepwd:{
				// el:$("pw"),
				hasVaild:false
			},
			invitecode:{
				reg:/^[0-9]{6}$/,
				hasVaild:false
			}
		}
/*验证码*/
var codeReg=usrMsgJson.code.reg;
// console.log(codeReg);
$("#code").on("blur",function(){
	var codeVal=$("#code").val();
	if(codeReg.test(codeVal)){
		$(".success1").css({"display":"inline-block"});
		$(".warn1").css({"display":"none"});
	}else{
		$(".warn1").css({"display":"inline-block"});
		$(".success1").css({"display":"none"});
	}
});

/*手机号*/
var phoneReg=usrMsgJson.phone.reg;
$("#phone").on("blur",function(){
	var phoneVal=$("#phone").val();
	if(phoneReg.test(phoneVal)){
		$(".success2").css({"display":"inline-block"});
		$(".warn2").css({"display":"none"});
	}else{
		$(".warn2").css({"display":"inline-block"});
		$(".success2").css({"display":"none"});
	}
});


/*手机验证码*/
var phonecodeReg=usrMsgJson.phonecode.reg;
$("#phonecode").on("blur",function(){
	var phonecodeVal=$("#phonecode").val();
	if(phonecodeReg.test(phonecodeVal)){
		$(".success3").css({"display":"inline-block"});
		$(".warn3").css({"display":"none"});
	}else{
		$(".warn3").css({"display":"inline-block"});
		$(".success3").css({"display":"none"});
	}
});
/*设置密码*/
var setpwdReg=usrMsgJson.setpwd.reg;
$("#setpwd").on("blur",function(){
	var setpwdVal=$("#setpwd").val();
	if(setpwdReg.test(setpwdVal)){
		$(".success4").css({"display":"inline-block"});
		$(".warn4").css({"display":"none"});
	}else{
		$(".warn4").css({"display":"inline-block"});
		$(".success4").css({"display":"none"});
	}
});


/*确认密码*/
$("#truepwd").on("blur",function(){
	var truepwdVal=$("#truepwd").val();
	if(truepwdVal==$("#setpwd").val()){
		$(".success5").css({"display":"inline-block"});
		$(".warn5").css({"display":"none"});
	}else{
		$(".warn5").css({"display":"inline-block"});
		$(".success5").css({"display":"none"});
	}
});


/*邀请码*/
var invitecodeReg=usrMsgJson.invitecode.reg;
$("#invitecode").on("blur",function(){
	var invitecodeVal=$("#invitecode").val();
	if(invitecodeReg.test(invitecodeVal)){
		$(".success6").css({"display":"inline-block"});
		$(".warn6").css({"display":"none"});
	}else{
		$(".warn6").css({"display":"inline-block"});
		$(".success6").css({"display":"none"});
	}
});

/*阻止浏览器的默认事件*/
$("#btn")
.on("click",function(e){
	var evt=e || window.e;
	for(var attr in usrMsgJson){
		if(usrMsgJson[attr].reg.test($(`#${attr}`).value)){
			evt.preventDefault();
			break;
		}
	}
	
});

