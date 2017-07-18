//黃佳晨
var getBMI = function(weight, height){
   return weight/((height/100)*(height/100));

}  
getBMI(65,171);
var BMI = getBMI(65,171);
console.log('BMI: '+BMI);

var getMessage = function(weight,height)
{ 
  getBMI(weight,height);
  if(BMI<18.5) 
   console.log('體重過輕');
  else if(BMI<24&&BMI>=18.5)
   console.log('正常範圍');
  else if(BMI>=24&&BMI<30)
   console.log('過重');
}

getMessage(65,171);