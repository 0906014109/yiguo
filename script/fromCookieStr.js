/*购物车*/
$("button:contains('加入购物车')").each(function(index,item){
	$(item).on("click",function(){
		if($(item).html()=="暂时无货"){
			return false;
		}
		var goodsId=seafoodJson[index].id;
		// console.log(seafoodJson[index].id);
		var goodsPrice=seafoodJson[index].price;
		if(!getCookie("carlist")){//第一次创建时
			var goodsObj=[{
				"id":goodsId,
				"num":1,
				"price":goodsPrice
			}];
			var goodString = JSON.stringify(goodsObj);
			// setCookie("carlist",goodString,{"path":""});//存入cookie中时,数组转换为字符串;从cookie中提取使用时，字符串转换为数组
		}else{
			var goodString=getCookie("carlist");
			var goodsArray=JSON.parse(goodString);
			var hasId=false;
			for(var i=0;i<goodsArray.length;i++){
				if(goodsArray[i].id==goodsId){
					goodsArray[i].num++;
					goodsArray[i].price+=goodsPrice;
					hasId=true;//hasId为一个flag变量
					break;
				}
			}
			//如果id不存在
			if(!hasId){
				goodsArray.push({
					"id":goodsId,
					"num":1,
					"price":goodsPrice
				});
			};
			//把操作好的数据放入cookie中
			goodString=JSON.stringify(goodsArray);
			// setCookie("carlist",goodString);
		}
		setCookie("carlist",goodString,{"path":"/yiguo/"});
		/*利用cookie数据渲染购物车页面及当前页面数据*/
		var count=0,price=0;
		var getCookieStr=getCookie("carlist");
		var getCookieArray=JSON.parse(getCookieStr);
		for(var i=0;i<getCookieArray.length;i++){
			count+=getCookieArray[i].num;
			price+=getCookieArray[i].price;
		}
		// var reg=/\d+\.(\d)(\d)\d+/;
		// price+="";
		// price.replace(reg,/\d+\.(\d)/);
		// price-=0;
		price=parseInt(price*10)/10;
		console.log(price);
		$(".buycar_bg b").html(count);
		$(".buycar span:nth-child(2)").html("￥"+price);
	})
});
//计算cookie中商品数量;
var count=0,price=0;
var getCookieStr=getCookie("carlist");
// console.log(getCookieStr);
var getCookieArray=JSON.parse(getCookieStr);
// console.log(getCookieArray);
for(var i=0;i<getCookieArray.length;i++){
	count+=getCookieArray[i].num;
	price+=getCookieArray[i].price;
}
// var reg=/\d+\.(\d)(\d)\d+/;
// price+="";
// price.replace(reg,/\d+\.(\d)/);
// price-=0;
price=parseInt(price*10)/10;
// console.log(price);
$(".buycar_bg b").html(count);
$(".buycar span:nth-child(2)").html("￥"+price);