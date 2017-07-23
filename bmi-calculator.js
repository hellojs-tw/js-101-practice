var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your height: ', function (height) {
    rl.question('Enter your weight: ', function (weight) {
        console.log("Your BMI=",getBMI(height, weight));
        console.log(getMessage(height, weight));
        rl.close();
    });
});

function getBMI(height, weight) {
    var bmi = weight/Math.pow(height/100, 2);
    return bmi;
}

function getMessage(height, weight) {
    var bmi = weight/Math.pow(height/100, 2);
    if(bmi >= 24 ){
        return "Your weight is too heavy.";
    }
    else if(bmi >= 18.5 && bmi < 24){
        return "Your weight is normal.";
    }
    else if(bmi < 18.5){
        return "Your weight is too light.";
    }
}
