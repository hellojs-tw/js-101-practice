
function getmessage(height,weight){
    var bmi = getbmi(height,weight);
    console.log('您的bmi為： '+bmi);
   if(bmi<18.5){console.log('體重過輕');}
   if((bmi>=18.5)&&(bmi<24)){console.log('正常範圍');}
   if(bmi>24){console.log('體重過重');}
  
}
function getbmi (height,weight){
    var height ; 
    var weight ;
    var bmi = (weight/(height*height)) ;
    return (bmi) ;
}

getmessage(1.8,50);
