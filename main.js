$("a").each(function (i, element) {
    //雖然 a 是內建的詞彙，但是仍要使用雙引號
    //用attr讀取在html中設定的屬性值
    //再用變數存放
    var target = $(this).attr("data-s2-target");
    var duration = $(this).attr("data-s2-duration");
    var offsetTop = $(this).attr("data-s2-offset");
    //this 是方便當下存取的代名詞，程式裡是一個全域的變數。
    // 一旦存取了別的變數，this 就會變成代表別人了。

    //* 測試info是否取得成功
    // console.log("");
    //為了讓訊息呈現有分段效果
    // console.log("編號：" + i);
    // console.log("目標：" + target);
    // console.log("時長：" + duration);
    // console.log("座標修正：" + offsetTop);

    var offset = $("#" + target).offset();
    var top = offset.top;
    //用if篩選，offsetTop存在才執行
    if (offsetTop) top -= offsetTop ;

    //* 測試info是否取得成功
    // console.log("目標top座標：" + top);

    //UX實務：為了讓使用者可以臨時改變心意
    //1. 點錯，臨時改點另一個目標
    $(this).click(function (e) {
        e.preventDefault();//關閉 a 原本的連結功能
        $("html").stop().animate({
            //stop() 是中斷當前所有未完成的動畫效果
            scrollTop : top
        }, parseInt(duration)) ;
        //因為輸入的是字串，所以需要轉換資料型態。
    });
    //2. 點錯，臨時用滾輪掙扎
    $("html").on("mousewheel", function () {
        $("html").stop() ;
    });

    //最後的註解：console.log應在開發完畢後刪除
    //以免造成使用時浪費瀏覽器的資源。
});
//接下來是arrow按鈕的顯示/消失設定
var arrow = $("#arrow") ;

$(window).scroll(function () { 
    var windowTop = $(this).scrollTop();
    // console.log("此時上方座標：" + windowTop) ;
    //this log幫助收集估查位置的座標
    var top = arrow.attr("data-ar-top");
    var time = parseInt(arrow.attr("data-ar-time"));
    // console.log("界線座標：" + top) ;
    // console.log("設定時間：" + time) ;
    
    if (windowTop >= top) arrow.stop().fadeIn() ;
    else arrow.stop().fadeOut() ;
    //UX實務：以防使用者白目上上下下玩特效，讓每次動作前的動作都取消。
});

//目標座標450