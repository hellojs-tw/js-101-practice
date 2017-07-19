//李侑乘
function getBMI(weight, height){
    var bmi = weight / (height * height);
    console.log(bmi);
    return bmi;
}



function getMessage(weight, height){
    var result = getBMI(weight, height);
    
    if(result < 18.5){
        console.log("BMI = " + result + ", 體重過輕");
    } else if(18.5 <= result && result < 24){
        console.log("BMI = " + result + ", 正常範圍");
    } else{
        if(24 <= result && result < 27){
            console.log("BMI = " + result + ", 過重");
        } else if(27 <= result && result < 30){

        } else if(30 <= result && result < 35){
            console.log("BMI = " + result + ", 中度肥胖");
        } else{
            console.log("BMI = " + result + ", 重度肥胖");
        }
    }
}

getMessage(100, 1.75);