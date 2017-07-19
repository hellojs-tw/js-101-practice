//吳思嬋

var height=163;
var weight=56;

function getBMI(hei,wei){
	return wei/((hei*hei)/10000);
}

function getMessage(hei,wei){
	var a=getBMI(hei,wei);
	if(a<18.5)console.log("過輕");
	else if(a<=24)console.log("正常");
	else if(a<=30) console.log("輕度胖");
	else if(a<=35)console.log("中度胖");
	else console.log("重度胖");

}
getMessage(height,weight);
