/*进口水果、国产水果、海鲜水产*/
var arr1=[json["foreign_fruit"],json["inland_fruit"],json["seafood"]];
var oDiv1=$(".foreign_fruit,.inland_fruit,.seafood")
oDiv1.each(function(index,item){
    var oHtml1=`<div class="wrap">
                    <p>
                        <span id="title_icon"><i>${arr1[index].num}</i></span><a href="#" id="foreign">${arr1[index].title}</a>
                        <span id="right_list">
                            <a href="#">${arr1[index].a[0]}</a>
                            <a href="#">${arr1[index].a[1]}</a>
                            <a href="#">${arr1[index].a[2]}</a>
                        </span>
                    </p>
                    <div class="left">
                        <img src="${arr1[index].img[0]}">
                    </div>
                    <div class="right">
                        <div class="upfruit">
                            <img src="${arr1[index].img[1]}"><img src="${arr1[index].img[2]}"><img src="${arr1[index].img[3]}">
                        </div>
                        <div class="down">
                              <img src="${arr1[index].img[4]}"><img src="${arr1[index].img[5]}"><img src="${arr1[index].img[6]}">
                        </div>
                    </div>
                </div>`;
    $(item)
    .css({
        "width": "100%",
        "height": "463px",
        "margin-top":"50px"
    })
    .html(oHtml1);
})
                  
/*精选肉类、禽类蛋品、乳品糕点、方便速食*/
var arr2=[json["meat"],json["eggs"],json["cake"],json["fastfood"]];
var oDiv2=$(".meat,.eggs,.cake,.fastfood")
oDiv2.each(function(index,item){
    var oHtml2=`<div class="wrap">
                    <p>
                        <span id="title_icon"><i>${arr2[index].num}</i></span><a href="#" id="foreign">${arr2[index].title}</a>
                        <span id="right_list">
                            <a href="#">${arr2[index].a[0]}</a>
                            <a href="#">${arr2[index].a[1]}</a>
                            <a href="#">${arr2[index].a[2]}</a>
                        </span>
                    </p>
                    <div class="left">
                        <img src="${arr2[index].img[0]}">
                    </div>
                    <div class="middle">
                        <div class="t">
                            <div class="l">
                                <img src="${arr2[index].img[1]}">
                            </div>
                            <div class="r">
                                <img src="${arr2[index].img[2]}"><img src="${arr2[index].img[3]}"><img src="${arr2[index].img[4]}"><img src="${arr2[index].img[5]}">
                            </div>
                        </div>
                        <div class="d">
                            <img src="${arr2[index].logo[0]}"><img src="${arr2[index].logo[1]}"><img src="${arr2[index].logo[2]}"><img src="${arr2[index].logo[3]}">
                        </div>
                    </div>
                    <div class="right">
                        <img src="${arr2[index].img[6]}">
                    </div>
                </div>`;
    $(item)
    .css({
        "width": "100%",
        "height": "463px",
        "margin-top":"50px"
    })
    .html(oHtml2);
})

/*粮油杂货、饮料酒水*/
var arr3=[json["mix"],json["water"]];
var oDiv3=$(".mix,.water")
oDiv3.each(function(index,item){
    var oHtml3=`<div class="wrap">
                    <p>
                        <span id="title_icon"><i>${arr3[index].num}</i></span><a href="#" id="foreign">${arr3[index].title}</a>
                        <span id="right_list">
                            <a href="#">${arr3[index].a[0]}</a>
                            <a href="#">${arr3[index].a[1]}</a>
                            <a href="#">${arr3[index].a[2]}</a>
                        </span>
                    </p>
                    <div class="left">
                        <img src="${arr3[index].img[0]}">
                    </div>
                    <div class="middle">
                        <div class="t">
                            <div class="l">
                                <img src="${arr3[index].img[1]}">
                            </div>
                            <div class="rr">
                                <img src="${arr3[index].img[2]}"><img src="${arr3[index].img[3]}">
                            </div>
                        </div>
                        <div class="d">
                            <img src="${arr3[index].logo[0]}"><img src="${arr3[index].logo[1]}"><img src="${arr3[index].logo[2]}"><img src="${arr3[index].logo[3]}">
                        </div>
                    </div>
                    <div class="right">
                        <img src="${arr3[index].img[4]}">
                    </div>
                </div>`;
    $(item)
    .css({
        "width": "100%",
        "height": "463px",
        "margin-top":"50px"
    })
    .html(oHtml3);
})
