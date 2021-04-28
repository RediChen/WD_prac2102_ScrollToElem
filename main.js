$("a").each(function () {
    //* Stage I : 收集參數
    var target = $(this).attr("data-s2-target");
    if (!target) return true;// 沒有設定此參數的就直接換下一位

    var position = $("#" + target).offset();
    // (1) offset 元素在網頁上的座標

    var posAdj = parseInt($(this).attr("data-s2-offset"));
    // (2) posAdj = position adjust 微調目標的座標
    //TODO 希望可以自動算效果的時間

    //* Stage II : 參數操作
    var posY = position.top;
    if (posAdj) posY += posAdj; // 有要求才改，以免undefined礙事
    //! 內捲動空間，會跟著算入

    //* Stage III : 前往至目的地
    //(1) UX : 插入stop() 讓點選其他按鈕可以中止機制
    //(2) html, body 是為了跨平台的以防萬一
    $(this).click(function (e) {
        e.preventDefault();//關閉 a 原本的連結功能
        $("html, body").stop().animate({
            scrollTop: posY
        }, 800);
    });
    //(3) UX : 讓滾輪可以中止機制
    $("html, body").on("mousewheel", function () {
        $("html, body").stop();
    });
});
//接下來是tothetop按鈕的顯示/消失設定
var tothetop = $("#tothetop");

$(window).scroll(function () {
    var windowPos = $(this).scrollTop();
    // console.log("此時上方座標：" + windowPos) ;
    //此log能幫助收集估查位置的座標
    var borderLine = tothetop.attr("data-s2-top") || 500;
    //顯示邊界的預設值：500px
    var time = parseInt(tothetop.attr("data-s2-time")) || 800;
    //顯示效果時長的預設值：800ms
    // console.log("界線座標：" + top) ;
    // console.log("設定時間：" + time) ;

    if (windowPos >= borderLine) tothetop.stop().fadeIn(time);
    else tothetop.stop().fadeOut(time);
    //UX ：以防使用者白目上上下下玩特效，讓每次動作前的動作都取消。

    //設定預設值
    var target = $(this).attr("data-s2-target");
    if(target) return 0;
    //有採用target功能則不執行以下指令
    $(this).click(function (e) {
        e.preventDefault();
        $("html, body").stop().animate({
            scrollTop: 0
        }, 800);
    });
    $("html, body").on("mousewheel", function () {
        $("html, body").stop();
    });
});
    //最後的註解：console.log應在開發完畢後刪除
    //以免造成使用時浪費瀏覽器的資源。