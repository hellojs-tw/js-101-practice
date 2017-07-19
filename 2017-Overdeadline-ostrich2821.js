function getBMI(height,weight){
    var myBMI =  weight / (height * height);
    
    return myBMI;
}

getBMI(1.5, 50);

var BMI = getBMI(1.5, 50);

function getMessage(){
    if ( BMI < 18.5 ){
        console.log('體重過輕');
    }else if(18.5 <= BMI && 24 > BMI){
        console.log('正常範圍');
    }else{
        console.log('異常範圍');
    }
}

getMessage();