function getBMI(W,H) {
    var BMI = W/((H/100)*(H/100));
    return BMI;
}

getBMI(59,180);
console.log("BMI: "+getBMI(59,180));

function getMESSAGE(W,H) {
    var bmi = W/((H/100)*(H/100));
    if (bmi < 18.5) {
        console.log("體重過輕")
    }
    else if (18.5 <= bmi <= 24){
        console.log("正常範圍")
    }
    else if (24 <= bmi <= 27){
        console.log("過重")
    }
    else if (27 <= bmi <= 30){
        console.log("輕度肥胖")
    }
    else if (30 <= bmi < 35){
        console.log("中度肥胖")
    }
    else if (35 <= bmi ){
        console.log("重度肥胖")
    }
}
getMESSAGE(59,180);