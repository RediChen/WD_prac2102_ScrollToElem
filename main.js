$("a").each(function (i, element) {
    //雖然 a 是內建的詞彙，但是仍要使用雙引號
    var target = $(this).attr("data-s2-target");
    var duration = $(this).attr("data-s2-duration");
    //this 是方便當下存取的代名詞，程式上的理事一個全域的變數。
    // 一旦存取了別的變數，this 就會變成代表別人了。

    //* 測試info是否取得成功
    console.log("編號：" + i);
    console.log("目標：" + target);
    console.log("時長：" + duration);

    var offset = $("#" + target).offset();
    var top = offset.top;

    //* 測試info是否取得成功
    console.log("top座標：" + top);

    $(this).click(function (e) {
        e.preventDefault();//關閉 a 原本的連結功能
        $("html").stop().animate({
            //stop() 是中斷當前所有未完成的動畫效果
            //也就是為了讓使用者可以臨時改變心意
            scrollTop : top
        }, parseInt(duration)) ;
        //因為輸入的是字串，所以需要轉換資料型態。
    });
});