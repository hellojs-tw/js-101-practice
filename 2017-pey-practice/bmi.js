/*張家盈*/ 

function getBMI(weight,height){
    var bmi = weight/(Math.pow(height/100,2));
    return bmi;
}

console.log(getBMI(36,150));