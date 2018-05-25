/*获取购物车内容*/
var count,price;
var getCookieStr=getCookie("carlist");
var getCookieArray=JSON.parse(getCookieStr);
var goodArr=[];
var sum=0;
for(var i=0;i<getCookieArray.length;i++){
	var obj={};
	obj.goodId=getCookieArray[i].id;
	obj.goodNum=getCookieArray[i].num;
	obj.goodPrice=parseInt(getCookieArray[i].price*10)/10;
	var goods=selectJson(obj.goodId,seafoodJson);
	obj.img=goods.img;
	obj.name=goods.title;
	obj.price=goods.price;
	// console.log(obj);
	sum+=obj.goodPrice;
	sum=parseInt(sum*10)/10;
	goodArr.push(obj);
	// console.log(goodArr);
}
function selectJson(id,json){
	for(var i=0;i<json.length;i++){
		if(id==json[i].id){
			return json[i];
		}
	}
}

/*渲染购物车页面*/
var buyCarHtml=`<tr class="th">
                    <th class="th1"><input type="checkbox" name="check" class="all" checked>全选</th>
                    <th class="th2">商品信息</th>
                    <th class="th3">悠币</th>
                    <th class="th4">单价</th>
                    <th class="th5">购买数量</th>
                    <th class="th6">合计</th>
                    <th class="th7">操作</th>
               </tr>`;
for(var i=0;i<goodArr.length;i++){
	buyCarHtml+=`<tr class="foot" border="1px">
				<td><input type="checkbox" name="check"  data-id="${getCookieArray[i].id}" class="item"></td>
				<td><img src="${goodArr[i].img}"><b>${goodArr[i].name}</b></td>
                <td></td>
                <td>${goodArr[i].price}</td>
                <td class="change"><button class="reduce" data-id="${getCookieArray[i].id}">-</button><input type="text" value="${goodArr[i].goodNum}" data-id="${getCookieArray[i].id}"><button class="add" data-id="${getCookieArray[i].id}">+</button></td>
                <td>${goodArr[i].goodPrice}</td>
                <td><button data-id="${getCookieArray[i].id}" >删除</button></td>
				</tr>
				<tr class="null">&nbsp;</tr>`;
}
buyCarHtml+=`<tr>
                 <th class="th1"><input type="checkbox" name="check" class="all" checked>全选</th>
                 // <th class="th2" align="left" id="delete"><b>删除选中的商品</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>清空购物车</b></th>
                 <th colspan="3" class="sum"><span>总&nbsp;价:</span><b>&nbsp;&nbsp;${sum}</b></th>
                 <th colspan="2" class="checkout"><button>去结算</button></th>
             </tr>`;
$(".hasgoods table").html(buyCarHtml);
$(".hasgoods table img").css({
	"float":"left",
	"margin-left":"30px",
	"margin-top":"11px"
});
$(".hasgoods table img+b").css({
	"float":"left",
	"margin-left":"30px"
});
$(".sum b").css({
	"color":"#ff5317",
	"font-size":"20px"
});
$(".null").css({
	"height":"16px"
});


/*购物车页删除效果*/
// console.log($("button:contains('删除')"))
$("button:contains('删除')").on("click",function(){
	// console.log(1);
	goodsId=$(this).attr("data-id");
	for(var i=0;i<getCookieArray.length;i++){
		if(getCookieArray[i].id==goodsId){
			getCookieArray.splice(i,1);
			break;
		}
	}
	getCookieStr=JSON.stringify(getCookieArray);
	setCookie("carlist",getCookieStr,{"path":"/yiguo/"});
	location.reload();

});
/*删除选中的商品*/
// console.log($(".item"))
// $("b:contains('删除选中的商品')").on("click",function(){
// 	console.log($(".item").attr("checked"));
// 	$(".item").each(function(index,item){

// 		goodsId=$(item).attr("data-id");
// 		for(var i=0;i<getCookieArray.length;i++){
// 			if(getCookieArray[i].id==goodsId){
// 				getCookieArray.splice(i,i);
// 			}
// 		}
// 	})
// 	getCookieStr=JSON.stringify(getCookieArray);
// 	setCookie("carlist",getCookieStr,{"path":"/yiguo/"});
// 	location.reload();

// });
/*清空购物车*/
// $("b:contains('清空购物车')").on("click",function(){
// 	// console.log(cookie("carlist"));
// 	removeCookie("carlist");
// 	location.reload();
	
// });
/*全选*/
// $("input:contains('全选')").on("click",function(){
// 	if($("input.all").checked){
// 		$("input").css("checked","checked");
// 	}

// });
/*购物车页商品数量加减效果*/
$(".change input").on("change",function(e){
	var val=$(".change input").val();
	var evt=e || window.e;
	var item=evt.target;
	goodsId=$(item).attr("data-id");
	for(var i=0;i<getCookieArray.length;i++){
		if(getCookieArray[i].id==goodsId){
			getCookieArray[i].num=val;
		}
	}
	getCookieStr=JSON.stringify(getCookieArray);
	setCookie("carlist",getCookieStr,{"path":"/yiguo/"});
	location.reload();
})
$(".reduce").on("click",function(){
	goodsId=$(this).attr("data-id");
	var val=$(".change input").val();
	if(val<=1){
		return false;
	}
	for(var i=0;i<getCookieArray.length;i++){
		if(getCookieArray[i].id==goodsId){
			getCookieArray[i].num--;
			getCookieArray[i].price-=goodArr[i].price;
			console.log(getCookieArray[i].price);
			break;
		}
	}
	getCookieStr=JSON.stringify(getCookieArray);
	setCookie("carlist",getCookieStr,{"path":"/yiguo/"});
	location.reload();
})
$(".add").on("click",function(){
	goodsId=$(this).attr("data-id");
	for(var i=0;i<getCookieArray.length;i++){
		if(getCookieArray[i].id==goodsId){
			getCookieArray[i].num++;
			getCookieArray[i].price+=goodArr[i].price;
			console.log(getCookieArray[i].price);
			break;
		}
	}
	getCookieStr=JSON.stringify(getCookieArray);
	setCookie("carlist",getCookieStr,{"path":"/yiguo/"});
	location.reload();
})