//趙子權
function getBMI(height,weight){
    var BMI = weight/(height*height);
    return BMI;
};

console.log(getBMI(1.7,65));

function getMessage(height,weight){
    var BMI = weight/(height*height);
    if(BMI<18.5){console.log('體重過輕');}
    if(BMI>=18.5 & BMI<24){console.log('BMI為正常範圍');}
    if(BMI>=24 & BMI<27){console.log('過重');}
    if(BMI>=27 & BMI<30){console.log('輕度肥胖');}
    if(BMI>=30 & BMI<35){console.log('中度肥胖');}
    if(BMI>=35){console.log('重度肥胖');}
}

console.log(getMessage(1.7,65));
