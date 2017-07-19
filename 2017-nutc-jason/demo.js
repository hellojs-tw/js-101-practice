//楊漢笙
function getBMI(weight,height){
    var bmi=weight/((height/100)*(height/100));
    return bmi;
}

function getMessage(weight,height){
    var bmi=getBMI(weight,height);
    console.log("bmi:"+bmi);
    if(bmi<18.5){
        console.log("過輕")
    }
    if(bmi>18.5&&bmi<24){
        console.log("正常")
    }
    if(bmi>24){
        console.log("過重")
    }
}

getMessage(60,184);