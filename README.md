# URL Shortener 短網址產生器

運用 Node.js + Express 製作的簡易網站。


![image](https://)


## 特色功能

1. 可將長網址轉換成短網址
2. 經轉換後的網址可直接點擊以另開視窗的方式連結到轉換前的網址


## 開發工具

* Node.js @v18.15.0
* Express @4.18.2
* express-handlebars @3.0.0
* Bootstrap @5.0.2
* mongoose @6.0.5
* dotenv@16.0.3


## 安裝與使用

1. 請先確認有安裝 Node.js 、 npm

2. 將專案 clone 至本機:

3. 透過終端機進入資料夾，輸入：
```
npm install
```

4. 設定 MongoDB 連線：
```
MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
```

5. 完成連線後輸入：
```
npm run start
```

6. 若看見此行訊息則代表伺服器已啟動
```
Express is listening on http://localost:3000
```

7. 打開瀏覽器進入到以下網址
```
http://localhost:3000
```

其他備註：
如有安裝 nodemon 也能透過
```
npm run dev
```
執行本專案