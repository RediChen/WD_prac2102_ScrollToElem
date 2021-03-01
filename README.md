# WD_prac2102_Scroll2Elem
捲動功能的實現

# 功能介紹
- 實現一頁式連結的滾動效果
- 返回最上的箭頭按鈕

# 使用說明。
## 連結CDN
連結此CDN之前，請確認已經連結jQuery的函式庫。
接著即可將下列的link code置於body結束標籤之前。
```
    <script src="https://rediichen.github.io/WD_prac2102_ScrollToElem/main.js"></script>
```

## 滾動前往功能
效果名稱 | 屬性名稱 | 賦值內容/單位
--------|---------|-----------------------
指定連結的目標 | data-s2-target | 元素id(不用#)
設定效果的時間長 | data-s2-duration | 毫秒
設定移動目標的位置修正 | data-s2-offset | px

## 返回最上方功能
你可以自行設計箭頭按鈕的樣式，
但請務必將其id設定為```arrow```。
效果名稱 | 屬性名稱 | 賦值內容/資料型態/單位
--------|---------|-----------------------
要離最上方多遠才顯示出按鈕 | data-s2-top | px
顯示/消失的效果時間長 | data-s2-time | 毫秒
