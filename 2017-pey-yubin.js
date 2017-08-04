/* 2017 pey 許郁彬 */

function getBMI(height, weight) {
    return weight / (height / 100.0) ** 2
}

function getMessage(height, weight) {
    var bmi = getBMI(height, weight);
    if (bmi < 18.5)
        return "體重過輕";
    else if (bmi >= 18.5 && bmi < 24)
        return "正常範圍";
    else if (bmi >= 24 && bmi < 27)
        return "過重";
    else if (bmi >= 27 && bmi < 30)
        return "輕度肥胖";
    else if (bmi >= 30 && bmi < 35)
        return "中度肥胖";
    else
        return "重度肥胖";
}
getMessage(177, 62);