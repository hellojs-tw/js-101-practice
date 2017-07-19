function getBMI(height,weight) {
	return weight/Math.pow(height,2);
}
function getMessage(height, weight){
	var bmi = getBMI(height, weight);
	console.log("bmi = " + bmi);
	if(bmi < 18.5) {
		console.log('體重過輕');
	}
	else if(18.5 <= bmi && bmi < 24) {
		console.log('正常範圍');
	}
	else if(24<= bmi && bmi < 27) {
		console.log('過重');
	}
	else if(27<= bmi && bmi < 30) {
		console.log('輕度肥胖');
	}
	else if(30<= bmi && bmi < 35) {
		console.log('中度肥胖');
	}
	else if(35<= bmi) {
		console.log('重度肥胖');
	}
}
//getBMI(1.55,52);
getMessage(1.55,52);