const height = 1.6;
const weight = 70;

// height = prompt();
// weight = prompt();
var bmi = function(h, w){
	return ( w / (h*h) );
}

var getMessage = function(res) {
	if(res < 18.5 )
		console.log("體重過輕");
	else if( 18.5<= res < 24)
		console.log("正常範圍");
	else if( 24 <= res < 27)
		console.log("過重");
	else if( 27<= res < 30)
		console.log("輕度肥胖");
	else if( 30<= res < 35)
		console.log("中度肥胖");
	else console.log("重度肥胖");


}

const result = bmi(height,weight);
getMessage(result);