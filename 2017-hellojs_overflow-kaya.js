var getBMI = function(weight, height){
	return weight / (height*2); 
}
getBMI(50, 1.66);

var bmi= getBMI(50,1.66);
var getMessage = function(getBMI){
if (bmi < 18.5){
	return('體重過輕');
}
else if (bmi >= 18.5 && bmi <24){
	return('體重適中');
}	
else if(bmi >= 24){
	return('體重過重');
}
}

console.log('BMI：', getBMI(50, 1.66), '健康狀況：', getMessage());
