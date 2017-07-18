function getBMI(){
    var bmi = weight/(height/100*height/100);
    return bmi;
    
}

function getMessage(){
    var bmi = weight/(height/100*height/100);
    var string;
    if(bmi < 18.5){
       string = "That you are too thin.";
    }else if(bmi > 18.5 && bmi < 25){
	   string = "That you are healthy.";
    }else{
       string = "That you have overweight.";
    }
    return string;
    
}

var weight = 54;
var height = 164;
console.log("your BMI : ", getBMI());
console.log(getMessage());