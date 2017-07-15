/*張家盈*/ 
function getMessage(weight,height){
    var bmi = weight/(Math.pow(height/100,2));
    if (bmi<18.5){
        return "bmi:"+bmi+" 建議:體重過輕";
    }
    else if(18.5<=bmi && bmi<24){
        return "bmi:"+bmi+" 建議:正常範圍";
    }
    else if(24<=bmi && bmi<27){
        return "bmi:"+bmi+" 建議:過重";
    }
    else if(27<=bmi && bmi<30){
        return "bmi:"+bmi+" 建議:輕度肥胖";
    }
    else if(30<=bmi && bmi<35){
        return "bmi:"+bmi+" 建議:中度肥胖";
    }
    else return "bmi:"+bmi+" 建議:重度肥胖";
}


console.log(getMessage(30,150));