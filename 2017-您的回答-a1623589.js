/*劉祐辰*/
/*新增一個 getBMI 函式，函式可以傳入 height 與 weight，函式可以將計算完的 bmi 結果回傳。
新增一個 getMessage 函式，函式可以傳入 height 與 weight，並回傳建議訊息。*/
const getBMI=function(h,w){return w/h/h*10000;};
function getMessage(h,w){console.log("your BMI("+getBMI(h,w)+") is higher than coach...")}
getMessage(150,80);