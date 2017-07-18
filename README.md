# js-101-practice

[BMI 計算機](http://depart.femh.org.tw/dietary/3OPD/BMI.htm)

1. 新增一個 getBMI 函式，函式可以傳入 height 與 weight，函式可以將計算完的 bmi 結果回傳。
function getBMI(){
    var bmi;
    var weight = 53;
    var height = 164;
    bmi = weight/(height/100*height/100);
    console.log("your weight: ", weight );
    console.log("your height: ", height);
    console.log("your BMI: ", bmi);
    
}
console.log(getBMI());

2. 新增一個 getMessage 函式，函式可以傳入 height 與 weight，並回傳建議訊息。
function getMessage(){
    var bmi;
    var weight = 53;
    var height = 164;
    bmi = weight/(height/100*height/100);
    if(bmi < 18.5){
       console.log("That you are too thin.");
    }else if(bmi > 18.5 && bmi < 25){
	   console.log("That you are healthy.");
    }else{
       console.log("That you have overweight.");
    }
}

console.log(getMessage());


## 作業要求

1. 這次為個人作業，請每個人都要繳交，請將您的大名以註解的方式，填寫於你要上傳的檔案最上方。
2. 完成後將你的資料 PR 回這個 repo。
3. 檔名命名為 `{年度}-{組別名稱}-{slackId}`
4. 例如：`2017-dateline-xxxx`
