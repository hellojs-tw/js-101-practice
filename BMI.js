/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-13 16:33:47
 * @version $Id$
 */

function getBMI(hei, wei) {
	var bmi = wei / hei / hei * 10000;
	return bmi;
}
var hei = prompt("請輸入你的身高", "");
var wei = prompt("請輸入你的體重", "");
var ans = getBMI(hei, wei);
console.log(ans);
if (ans > 24) {
	console.log('您的BIM大於24過胖了');
} else if (ans < 18.5) {
	console.log('您的BIM小於18.5過清了');
} else {
	console.log('您的BIM正常');
}