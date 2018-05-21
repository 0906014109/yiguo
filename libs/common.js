var arr1=[json["foreign_fruit"],json["inland_fruit"],json["seafood"]];
console.log(arr1[0]);
console.log(arr1[0].img);
var oDiv=$(".foreign_fruit,.inland_fruit,.seafood")
oDiv.each(function(index,item){
    var oHtml=`<div class="wrap">
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
        "margin-top":"70px"
    })
    .html(oHtml);
})
                  