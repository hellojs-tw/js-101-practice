function getBMI(W,H){
    return W/(Math.pow(H/100,2));
}

function getMessage (W,H){
    var a = getBMI(W,H);
    
    if (a<=18.5){
        return "吃多點,你過輕!";
    }
    else if (a>18.5&&a<25)
    {
        return"維持現狀,健康喔~";
    }
    else if(a>=25&&a<30){
        return"少吃點,你過重!";
    }
    else
    return"不多說了,你自己知道你很胖";
}
console.log('你的BMI:',getBMI('60', '170'),'\n',getMessage('60', '170'));
