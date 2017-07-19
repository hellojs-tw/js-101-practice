// 蔡東霖

function getBMI(data){
    var weight=Number(data[1]);
    var height=(Number(data[0]));

    // console.log((weight / Math.pow(height/100,2)).toFixed(2));

    return ((weight / Math.pow(height/100,2)).toFixed(1));
}



function getMessage(bmi){
    if(bmi < 18.5)
        return '體重過輕';
    else if(18.5 <= bmi && bmi < 24 )
        return '正常範圍';
    else
        if (24 <= bmi && bmi < 27 )
            return '過重';
        else if(27<= bmi && bmi < 30)
            return '輕度肥胖';
        else if(30 <=bmi && bmi< 35)
            return '中度肥胖';
        else if(bmi>=35)
            return '重度肥胖';
}


var scanf = require('scanf');
//need npm i scanf

var input = 'y';
var data;
do{
    if (input =='y' || input == 'Y') {

        console.log('請輸入身高、體重（空白隔開）');
        data = scanf('%s %s'); //object
        // data = scanf('%s');

        if (!/^\d+[.]?\d*$/.test(data[0]) && !/^\d+[.]?\d*$/.test(data[1]))
        // if (!/^\d+$/.test(data[0]))
        {
            console.log('請輸正確格式');
            // console.log(/^\d+/.exec(data[0]));
        }else{


            console.log('BMI=' + getBMI(data));
            console.log('Message：' + getMessage(getBMI(data)));
            console.log('繼續請輸入y/Y,離開請輸入n/N');
            input = scanf('%s');
        }
    }else if(input =='n' || input=='N') {
        break;
    }else {
        console.log('輸入錯誤!!請輸入n/y!!');
        input = scanf('%s');
    }


}while(1)

console.log('歡迎再次光臨使用');


/**
 * Created by angus on 2017/7/19.
 */





