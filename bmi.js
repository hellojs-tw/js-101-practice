/*姓名:林沛萱*/

function getBMI(height, weight){
  var bmi = weight/(Math.pow((height/100),2));
  return "你的bmi為 : "+bmi;
}

console.log(getBMI(174,65));

function getMessage(height, weight){
 
  var bmi = weight/(Math.pow((height/100),2));
  if (bmi < 18.5){
      return  "建議 : "+"體重過輕";
  }
  else if(18.5<=bmi && bmi<24){
      return "建議 : "+"正常範圍";
  }
  else if(24<=bmi && bmi<27){
      return "建議 : "+"過重";
  }
  else if(27<=bmi && bmi<30){
      return "建議 : "+"輕度肥胖";
  }
  else if(30<=bmi && bmi<35){
      return "建議 : "+"中度肥胖";
  }
  else return "建議 : "+"重度肥胖";
}
console.log(getMessage(174,65));