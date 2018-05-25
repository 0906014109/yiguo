//搜索栏吸顶效果、购物车弹出效果
$(".buycar").on("click",function(){
    // $(this).css("cursor","hand");
    location.href="../yiguo/html/buycar.html";
});
var $aDivCar=$("<div></div>");
$aDivCar.css({
        "width":"400px",
        "height":"150px",
        "position":"absolute",
        "right":"-1px",
        "background":"#fff",
        "border":"1px solid rgb(0,151,87)",
        "z-index":"300",
        "font-size":"12px",
        "line-height":"150px",
        "text-align":"center"
    });
var $aDiv = $(".fixtop");
var oLogin=document.querySelector('.login');
var oHeader=document.querySelector('.header');
var oHeight=oLogin.offsetHeight + oHeader.offsetHeight;
$(document).on("scroll",function(){
    var oTop=document.body.scrollTop || document.documentElement.scrollTop;
    if(oTop >= oHeight){
        $aDiv.css({
            "position":"fixed",
            "top":0
        }).show();
        $("#buycar2").append($aDivCar);
        $aDivCar.css("top","34px");
        $("#buycar2").on("mouseover",function(){
            $aDivCar.show()
            .text("购物车中还没有商品，赶紧选购吧！");
        })
    }else{
        $aDiv.hide();
        $("#buycar1").append($aDivCar);
        $aDivCar.css("top","42px");
        $("#buycar1").on("mouseover",function(){
            $aDivCar.show()
            .text("购物车中还没有商品，赶紧选购吧！");
        })
    }
    /*侧边导航栏*/
    if(oTop < 800 && oTop >= 0 || oTop >= 5000){
        $(".mao").css("display","none");
    }else{
        $(".mao").css("display","block");
    }
})
$(document).on("mouseout",function(){
    $aDivCar.hide();
})

//搜索框的聚焦和失焦事件
var $input=$("input");
// console.log($input);
$input.on("focus",function(){
    $(this).css({
        "background":"#fff"
    }).html("");
})
$input.on("blur",function(){
    $(this).css({
        "background":"rgb(224,224,224)"
    }).html("输入商品名/编号/拼音");
})



//轮播图
var $banner_a=$(".banner p").children("a");
var $banner_img=$(".banner img")
$banner_a.each(function(index,item){
    $(item).on("mouseover",function(){ 
        //参数里的变量要想用jQuery方法，也必须转成jQuery对象
        for(var i = 0; i < $banner_a.length; i++){
            $banner_a.eq(i).css("background","#fff");//jQuery没有$a[i]这样的写法
            $banner_img.eq(i).hide();
        }
        $banner_a.eq(index).css("background","rgb(0,136,66)");
        $banner_img.eq(index).show();
    })
});
var $imgTimer=null;
$(".banner").on("mouseout",function(){
    var $show,$index=0;
    $imgTimer=setInterval(function(){
                if($index==$banner_a.length-1){
                    $index=0;
                    $show=$index;
                }else{
                    $index++;
                    $show=$index;
                }
                for(var i = 0; i < $banner_a.length; i++){
                    $banner_a.eq(i).css("background","#fff");//jQuery没有$a[i]这样的写法
                    $banner_img.eq(i).hide();
                }
                $banner_a.eq($show).css("background","rgb(0,136,66)");
                $banner_img.eq($show).show();
            },1000)
    $("#prev").hide();
    $("#next").hide();
})
$(".banner").on("mouseover",function(){
    clearInterval($imgTimer);
    $("#prev").show();
    $("#next").show();
})
//按钮效果
$("#prev").on("mouseover",function(){
    $(this).css({
        "opacity":"1",
        "filter":"alpha(opacity=100)"
    });
    var $show,$index=0;
    $("#prev").on("click",function(){
        if($index==0){
            $index=$banner_a.length-1;
            $show=$index;
        }else{
            $index--;
            $show=$index;
        }
        for(var i = 0; i < $banner_a.length; i++){
            $banner_a.eq(i).css("background","#fff");//jQuery没有$a[i]这样的写法
            $banner_img.eq(i).hide();
        }
        console.log($show);
        $banner_a.eq($show).css("background","rgb(0,136,66)");
        $banner_img.eq($show).show();
    });
});
$("#prev").on("mouseout",function(){
    $(this).css({
        "opacity":"0.5",
        "filter":"alpha(opacity=50)"
    });
});
$("#next").on("mouseover",function(){
    $(this).css({
        "opacity":"1",
        "filter":"alpha(opacity=100)"
    });
        var $show,$index=0;

    $("#next").on("click",function(){
        if($index==$banner_a.length-1){
            $index=0;
            $show=$index;
        }else{
            $index++;
            $show=$index;
        }
        for(var i = 0; i < $banner_a.length; i++){
            $banner_a.eq(i).css("background","#fff");//jQuery没有$a[i]这样的写法
            $banner_img.eq(i).hide();
        }
        $banner_a.eq($show).css("background","rgb(0,136,66)");
        $banner_img.eq($show).show();
    });
});
$("#next").on("mouseout",function(){
    $(this).css({
        "opacity":"0.5",
        "filter":"alpha(opacity=50)"
    });
});


//二级导航效果
var aLi=document.querySelectorAll("li");
aLi=[].slice.call(false,aLi);
var secHtml="";
var aSpan=$(".banner ul li span:odd");//所有奇数个元素，第一项从0开始计数
var aLi=$(".banner ul li");
aLi.each(function(index,item){
    $(item).on("mouseover",function(){
        // for(var i=0;i<$(aSpan).length;i++){
            var aText=$(aSpan).eq(index).text();
            var secHtml=`<p><a href="">${aText}</a></p><p>`;
            var oName=$(aSpan).eq(index).attr("name-id");
            var oList=json[oName].list;
            var oImg=json[oName].listImg;
            for(var j=0;j<oList.length;j++){
                secHtml+=`<a href="#">${oList[j]}</a>`;
            }
            secHtml+=`</p><img src=${oImg}>`; 
            $(".banner .secnav").show().html(secHtml);
            $(".banner .secnav img").css({
                "width":"280px",
                "height":"220px",
                "margin-left":"30px",
                "margin-top":"225px"
            })
            $(".banner .secnav p:nth-child(1)").css({
                "margin-bottom":"20px"
            })
            $(".banner .secnav p:nth-child(1)").children().css({
                "color":"#008842",
                "font-size":"18px"
            });
            $(".banner .secnav p:nth-child(2)").children().css({
                "margin-right":"20px",
                "color":"#000",
                "font-size":"13px",
                "line-height":"30px"
            });
    });
})
/*二级导航移入移出效果*/

var timer = null;
var secFlag = false;
$(".banner ul").on("mouseleave",function(){
    $(".banner .secnav").on("mouseenter",function(){
        $(".banner .secnav").show();
    })
    $(".banner .secnav").on("mouseleave",function(){
        $(".banner .secnav").hide();
    })
    $(".banner .secnav").hide();
    // console.log(1);
    // clearTimeout(timer);
    // setTimeout(function(){
    //     if(!secFlag){
    //         $(".secnav").hide();
    //     }
    // },500)
    
});

// $(".secnav").on("mouseenter",function(){
//    secFlag = true;
// })

// $(".secnav").on("mouseleave",function(){
//    secFlag = false;
//    $(".secnav").hide();
// })
/*banner部分导航栏的隐藏显示*/
$(".select").on("click",function(){
    $(".select + ul").stop().toggle();
    $(".banner .secnav").hide();
})





            
            
