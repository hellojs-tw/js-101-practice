function getbmi(height,weight){
height = height / 100;
 var bmi = weight / (height * height);
 return bmi;
}


function getMessage (bmi) {

    if(bmi <18.5){
     
console.log("體重過輕");

}else if(bmi >= 18.5 && bmi <24){
      
console.log("正常範圍");

}else if(bmi >=24 && bmi < 27){
     
console.log("過重");
 
}else if(bmi >=27 && bmi < 30){
      
console.log("輕度肥胖");

}else if(bmi >=30 && bmi < 35){
      
console.log("中度肥胖");

}else{
   
console.log("重度肥胖");

}

 
}

    

console.log(getbmi(175,60));
var bmiresult =(getbmi(175,60));
getMessage(bmiresult);
