/*图片展示部分轮播效果*/
var oBigImg=$(".lob_up img");
var oSmallImg=$(".lob_down img");
console.log(oSmallImg);
oSmallImg.each(function(index,item){
	$(item).on("mouseenter",function(){
		for(var i=0;i<oSmallImg.length;i++){
			oBigImg.eq(i).fadeOut();
		}
		oBigImg.eq(index).fadeIn();
	})
})

/*猜你喜欢部分的渲染*/
var lobserHtml="";
for(var i=0;i<lobsterJson.length;i++){
	lobserHtml+=`<li>
					<div class="div">
						<img src="${lobsterJson[i].img}">
						<div>
							<span>${lobsterJson[i].title}</span><br>
							<b>${"￥"+lobsterJson[i].price}</b>
							<button>加入购物车</button>
						</div>
					</div>
				 </li>`;
}
$(".possiblelike ul").html(lobserHtml);

var oLi=$(".possiblelike ul li");
var oBtn=$(".possiblelike ul li button");
oLi.each(function(index,item){
	$(item).on("mouseenter",function(){
		oBtn.eq(index).stop().show();
	});
	$(item).on("mouseleave",function(){
		oBtn.eq(index).stop().hide();
	})
})

/*热卖部分的渲染*/
var hotHtml="";
for(var i=0;i<hotJson.length;i++){
	console.log(1);
	hotHtml+=`<li>
				<img src="${hotJson[i].img}">
				<span>${hotJson[i].title}</span><br>
				<b>${"￥"+hotJson[i].price}&nbsp;&nbsp;&nbsp;<i>${"￥"+hotJson[i].prePrice}</i></b>
			  </li>`;
}
$(".hot ul").html(hotHtml);


/*放大镜*/
function Magnifier(options){
		this.small_ele = $(options.small_ele);
		this.focus_ele = $(options.focus_ele);
		this.big_ele = $(options.big_ele);
		if(this.small_ele.length == 0 || this.focus_ele.length == 0 || this.big_ele.length == 0) return;
		this.init();
	}
	Magnifier.prototype = {
		constructor:Magnifier,
		init(){
			//绑定鼠标移入事件;
			this.scale = this.big_ele.width() / this.focus_ele.width();
			this.ratio();
			this.small_ele.on("mouseenter",{hidden:false},$.proxy(this.toggleFocus,this));
			this.small_ele.on("mouseleave",{hidden:true},$.proxy(this.toggleFocus,this));
			this.small_ele.on("mousemove.smallMove",$.proxy(this.smallMove,this));
			this.small_ele.on("mousemove.bigMove",$.proxy(this.bigMove,this));
			// this.small_ele.on("mousewheel",$.proxy(this.ratio,this));

			this.small_ele[0].onmousewheel = function(event){
				//谷歌;
				var evt = event || window.event;
				// console.log(evt.wheelDelta);
				//传参调用 ratio => 传入 谷歌 | 当前实现对象里的事件信息;
				this.ratio("ch",evt.wheelDelta);
			}.bind(this);
			this.small_ele[0].addEventListener("DOMMouseScroll",function(event){
				// console.log(event.detail);
				this.ratio("ff",event.detail);
			}.bind(this));
			
		},
		toggleFocus(event){
			var opacity_img = this.small_ele.find(".opacity-img");
			// console.log(opacity_img);
			if(event.data.hidden){
				this.focus_ele.stop().fadeOut(200);
				this.big_ele.stop().fadeOut(200);
				opacity_img.stop().fadeTo("fast",1);
			}else{
				this.focus_ele.stop().fadeIn(200);
				this.big_ele.stop().fadeIn(200);
				opacity_img.stop().fadeTo("fast",0.3);
			}
		},
		smallMove(event){
			var eleX = event.offsetX-this.focus_ele.width()/2;
			var eleY = event.offsetY-this.focus_ele.height()/2;
			// console.log(eleX,eleY);
			// 边界检测;
			var maxWidth = this.small_ele.width() - this.focus_ele.width();
			var maxHeight = this.small_ele.height() - this.focus_ele.height();

			eleX = eleX <= 0 ? 0 : eleX;
			eleX = eleX >= maxWidth ?  maxWidth : eleX;
			
			eleY = eleY <= 0 ? 0 : eleY;
			eleY = eleY >= maxHeight ?  maxHeight : eleY;

			this.focus_ele.css({
				left:eleX,
				top:eleY,
				backgroundPosition:`${-eleX}px ${-eleY}px`
			})

			var fullLongX = this.small_ele.width() - this.focus_ele.width();
			var fullLongY = this.small_ele.height() - this.focus_ele.height();
			this.propX = Math.round(eleX / fullLongX * 100);
			this.propY = Math.round(eleY / fullLongY * 100);
		},
		bigMove(){
			var bigImg = this.big_ele.find("img")
			var fullLongX = bigImg.width() - this.big_ele.width();
			var fullLongY = bigImg.height() - this.big_ele.height() ;
			
			var eleX = -Math.round(fullLongX * this.propX / 100);
			var eleY = -Math.round(fullLongY * this.propY / 100);
			
			bigImg.css({
				left:eleX,
				top:eleY
			})
			// console.log(eleX);
		},
		ratio(browser_type,data){
			// 初始化逻辑;
			// 不传参数为缩放大图功能;
			if(!browser_type || !data){
				//1.按比例缩放大图;
				var bigImg = this.big_ele.find("img");
				bigImg.css({
					width:Math.round(this.small_ele.width() * this.scale),
					height:Math.round(this.small_ele.height() * this.scale)
				});
				// 如果我做了这件事，那么其余的事我就不做了;
				return 0;
			}

			//传递参数为鼠标滚轮 事件 处理函数 ;
			//滚轮逻辑;
			//向下滚是变小的;
			//向上滚是变大的;
			var turn;
			if(browser_type == "ch"){
				data > 0 ? turn = "top" : turn = "bottom";
			}else if(browser_type == "ff"){
				data > 0 ? turn = "bottom" : turn = "top";
			}
			// console.log(turn);
			//让小框宽高动起来;
			
			var focus_ele_width = this.focus_ele.width() ;
			var focus_ele_height = this.focus_ele.height() ;

			if(turn == "top"){
				if(this.focus_ele.width() <= this.small_ele.width() * 0.8){
					this.focus_ele
					.css({
						width:"+=2",
						height:"+=2",
						top:"-=1",
						backgroundPosition:`${-this.focus_ele.position().left+1}px ${-this.focus_ele.position().top+1}px`
					})

					var left = this.focus_ele.position().left;
					left = left <= 0 ? 0 : left - 1;
					this.focus_ele.css({
						left:left
					})
				}
				//重新计算 比例值;
			}else if(turn == "bottom"){
				if(this.focus_ele.width() >= this.small_ele.width() * 0.1){
					this.focus_ele
					.css({
						width:"-=2",
						height:"-=2",
						left:"+=1",
						top:"+=1",
						backgroundPosition:`${-this.focus_ele.position().left-1}px ${-this.focus_ele.position().top-1}px`
					})
				}
			}

			this.scale = this.big_ele.width() / this.focus_ele.width();
			this.ratio();
			this.bigMove();
		}	
	}
	// smallMove;
	new Magnifier({
		small_ele:".lob_up",
		focus_ele:".grayBox",
		big_ele:".big"
	})
