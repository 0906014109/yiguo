//搜索栏吸顶效果
var $aDiv = $(".fixtop");
// console.log(1);
// console.log($aDiv);
if(document.scrollTop >= 108){
    $aDiv.css({
        "position":"fixed",
        "display":"block",
        "top":0
    }).show();
}else{
    $aDiv.hide();
}

//首页购物车详情
var $aDiv=$("<div></div>");
$(".header").append($aDiv);
$aDiv.css({
        "width":"400px",
        "height":"150px",
        "position":"absolute",
        "top":"59px",
        "right":"87px",
        "background":"#fff",
        "border":"1px solid rgb(0,151,87)",
        "z-index":"3",
        "font-size":"12px",
        "line-height":"150px",
        "text-align":"center"
    });
$(".buycar").on("mouseover",function(){
    $aDiv.show().text("购物车中还没有商品，赶紧选购吧！");
})
$(document).on("mouseout",function(){
    $aDiv.hide();
})

//轮播图
var $banner_a=$(".banner p").children("a");
var $banner_img=$(".banner img")
$banner_a.each(function(index,item){
    $(item).on("mouseover",function(){ 
        //参数里的变量要想用jQuery方法，也必须转成jQuery对象
        for(var i = 0; i < $banner_a.length; i++){
            $banner_a.eq(i).attr("background","#fff");//jQuery没有$a[i]这样的写法
            $banner_img.eq(i).hide();
        }
        $banner_a.eq(index).attr("background","rgb(90,170,22)");
        $banner_img.eq(index).show();
    })
});

var $show,$index=0;
var $imgTimer=setInterval(function(){
                if($index==$banner_a.length-1){
                    $index=0;
                    $show=$index;
                }else{
                    $index++;
                    $show=$index;
                }
                $banner_img.eq($show).show();
            },500)


            
//内容索引部分 
var $ul=$(".content_index ul");
var $li=$(".content_index ul li");
var $index_img=$(".content_index ul li img");
var $p=$(".content_index ul li p");
var $index_h2=$(".content_index ul li p h2");
var $index_h6=$(".content_index ul li p h6");
$li.eq(3).css({
    "margin-right":"0",
});           
            
            
