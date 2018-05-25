$(".header img").on("click",function(){
    location.href="../index.html";
})


/*分页效果*/
var page=0;
var showCount=16;
var maxNum=Math.ceil(seafoodJson.length/showCount);
/*计算最大页数并渲染*/ 
for(var j=0;j<maxNum;j++){
	$("#pagination").append(`<li>${j+1}</li>`);
}
var oUl=$("#list");
render(oUl,0,showCount);/*页面默认渲染第1页*/
var oP=$(".listyle p");
var oSpan=$(".listyle span");
var oBtn=$(".listyle button");
substr(oP,0);
isSale(oSpan,0);
isExist(oBtn,0);

/*点击显示相应页内容*/
$("#pagination li").on("click",function(){
	page=$(this).html();
	var beginItem=(page-1)*showCount;
	var endItem=page*showCount;
	if(page==maxNum){
		endItem=seafoodJson.length;
	};
	render(oUl,beginItem,endItem);
	var oP=$(".listyle p");
	var oSpan=$(".listyle span");
	var oBtn=$(".listyle button");
	substr(oP,beginItem);
	isSale(oSpan,beginItem);
	isExist(oBtn,beginItem);
});


function render(ele,beginItem,endItem){
	var seaHtml="";
	for(var i=beginItem;i<endItem;i++){
		seaHtml+=`<li class="listyle">
					<img src="${seafoodJson[i].img}">
					<button>加入购物车</button>
					<p>${seafoodJson[i].title}</p>
					<b class="b">${"￥"+seafoodJson[i].price}</b>
					<span><b>促</b>多份优惠</span>
				  </li>`;		 		
	}
	ele.html(seaHtml);
}

/*商品名称字数限制*/
function substr(ele,begin){
	ele.each(function(i,item){
		var index=i+begin;
		// console.log(index)
		if(seafoodJson[index].title.length>22){
			$(item).html(seafoodJson[index].title.substr(0,22)+"…");
		}
	})
}
/*根据json数据判断是否在促销范围，以决定其隐藏显示*/
function isSale(ele,begin){
	ele.each(function(i,item){
		var index=i+begin;
		if(seafoodJson[index].sale==true){
			$(item).css("display","inline-bolock");
		}else{
			$(item).css("display","none");
		}
	});
}
/*判定有无库存：显示暂时无货/加入购物车*/
function isExist(ele,begin){
	ele.each(function(i,item){
		var index=i+begin;
		if(seafoodJson[index].num>0){
			$(item).html("加入购物车");
		}else{
			$(item).html("暂时无货");
		}
	});
}


/*渲染商品列表区*/
// function List(ele,maxNum){
// 	this.ele=$(ele);
// 	this.op=$(".listyle p");
// 	this.oSpan=$(".listyle span");
// 	this.oBtn=$(".listyle button");
//  this.init();
// }
// List.prototype={
// 	constructor:List,
// 	init(){
// 		render();
// 		substr(oP,0);
// 		isSale(oSpan,0);
// 		isExist(oBtn,0);
// 	},
// 	render(ele,beginItem,endItem){
// 		var seaHtml="";
// 		for(var i=beginItem;i<endItem;i++){
// 			seaHtml+=`<li class="listyle">
// 						<img src="${seafoodJson[i].img}">
// 						<button>加入购物车</button>
// 						<p>${seafoodJson[i].title}</p>
// 						<b class="b">${"￥"+seafoodJson[i].price}</b>
// 						<span><b>促</b>多份优惠</span>
// 					  </li>`;		 		
// 		}
// 		ele.html(seaHtml);
// 	},
// 	substr(ele,begin){
// 		ele.each(function(i,item){
// 			var index=i+begin;
// 			// console.log(index)
// 			if(seafoodJson[index].title.length>22){
// 				$(item).html(seafoodJson[index].title.substr(0,22)+"…");
// 			}
// 		})
// 	},
// 	isSale(ele,begin){
// 		ele.each(function(i,item){
// 			var index=i+begin;
// 			if(seafoodJson[index].sale==true){
// 				$(item).css("display","inline-bolock");
// 			}else{
// 				$(item).css("display","none");
// 			}
// 		});
// 	},
// 	isExist(ele,begin){
// 		ele.each(function(i,item){
// 			var index=i+begin;
// 			if(seafoodJson[index].num>0){
// 				$(item).html("加入购物车");
// 			}else{
// 				$(item).html("暂时无货");
// 			}
// 		});
// 	}
// }
// var list1=new List(.listyle,1);
// var list2=new List(.listyle,maxNum);



