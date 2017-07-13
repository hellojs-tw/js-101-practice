//廖育醇

function getBMI(height, weight){
    var result = weight / ((height / 100) * (height / 100));
    return result;
}

function getMessage(height, weight){
    var result = weight / ((height / 100) * (height / 100));
    var text = "正常範圍";
    if (result < 18.5) {
        text = "體重過輕";
    }
    else if(result >= 18.5 && result <24){
        text = "正常範圍";
    }
    else if(result >= 24 && result <27){
        text = "過重";
    }
    else if(result >= 27 && result <30){
        text = "輕度肥胖";
    }
    else if(result >= 30 && result <35){
        text = "中度肥胖";
    }
    else{
        text = "重度肥胖";
    }
    return text;
}

var h = 175;
var w = 60;

console.log(getBMI(h, w) + "\n" + getMessage(h, w));