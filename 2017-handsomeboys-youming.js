/* 陳祐明 hw2 */
console.log(getBMI(1.7,50));

function getMessage(height,weight)
{
   if(18<(weight/(height*height))&&(weight/(height*height))<23)
   console.log("Health");
   else 
   console.log("Not health");
}
console.log("getMessage");
getMessage(1.7,50);