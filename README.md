# <center>Scroll2Elem</center>
## 功能介紹
- 為同頁的連結提供「捲動效果」
- 提供to the top(返回最上)的功能

## 使用說明
### 1. 連結CDN
連結此CDN之前，需要先連結jQuery的函式庫。<br>
你可以將下列的link code置於結束標籤`</body>`之前。
```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://rediichen.github.io/WD_prac2102_ScrollToElem/main.js"></script>
```

### 2. 捲動前往功能
1. 將想要前往的目標元素取id名稱：（**不**接受class名稱）
```HTML
<div id="target-elem"></div>
```
2. 在連結的按鈕元素的html屬性中設定：
```HTML
<a data-s2-target="target-elem" data-s2-offset="-100"> ... </a>
```


效果名稱 | 屬性名稱 | 賦值內容/單位 | 必填/選填 | 預設值
:------:|:------:|:------------:|:---------:|:-:
指定連結的目標 | data-s2-target | 元素id(不用#) | 必填 | (無)
設定移動目標的位置修正 | data-s2-offset | px(向下為正) | 選填 | 0

### 3. 返回最上方功能
只需要將你的元素id設定為`tothetop`：
```HTML
<div id="tothetop"> ... </div>
```
箭頭按鈕的樣式你可以自行設計。<br>
tothetop的滾動前往功能預設是回到最上方，<br>
如果你希望調整offset，則請採用上方 2. 的步驟。
效果名稱 | 屬性名稱 | 如何給值 | 單位 | 必填/選填 | 預設值
:------:|:-------:|:------:|:----:|:---------:|:-:
離最上方多遠時<br>開始讓按鈕顯示 | data-s2-top | 整數 | px | 選填 | 500 (px)
顯示/消失的效果時間長 | data-s2-time | 整數 | 毫秒 | 選填 | 800 (ms)
