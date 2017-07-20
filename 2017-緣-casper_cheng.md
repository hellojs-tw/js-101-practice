

function getBMI(height,weight){
    
       console.log("height:"+height);       
    
       console.log("weight:"+weight);       
    
       console.log("BMI:"+weight/((height/100)*(height/100)));
    

}



getBMI(172,64);


function getMessage(height,weight)
{
    
var bmi = weight/((height/100)*(height/100));
       
console.log("height:"+height);       
    
       
console.log("weight:"+weight);  

if (bmi > 25){console.log("fat");
   } 

if (bmi > 18 && bmi <25){console.log("good");
   }
 
if (bmi > 10 && bmi  <18){ console.log("slim");
   }
 
}





getMessage(172,80);