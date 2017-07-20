// 陳景斌

function getBMI(height, weight) {
    var bmi =  weight / (height*height);
    return bmi;
}

function getMessage(height, weight) {
    var bmi =  getBMI(height, weight);
    if ( bmi < 18) {
        return '過輕：BMI＜18'
    }
    
    if (bmi >= 18 || bmi < 24) {
        return '正常：18.5≦BMI＜24'
    }
    
    if (bmi >= 24 || bmi < 27) {
        return '過重：24≦BMI＜27'
    }

    if (bmi >= 27 || bmi < 30) {
        return '輕度肥胖：27≦BMI＜30'
    }
    
    if (bmi >= 30 || bmi < 35) {
        return '中度肥胖：30≦BMI＜35'
    }
    
    if (bmi >= 35 ) {
        return '重度肥胖：BMI≧35'
    }
}

getMessage(1.7,60);




