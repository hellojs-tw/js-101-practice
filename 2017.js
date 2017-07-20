//賴彥嘉
//getBMI 
function getBMI(height, weight){
  return weight/(height*height);
}
console.log(getBMI(1.88, 74));
// getMessage
var message ; 
function getMessage(height, weight){
  return weight/(height*height);
}
var bmi= getMessage(1.7,74)
if(bmi<18.5){
   message = '過輕';}
	else if(bmi>24){
   			 message='過重' }
			else{
				message='正常'}
console.log(message); //
