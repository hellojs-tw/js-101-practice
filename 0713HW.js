function getBMI (height, weight){
  return weight/(Math.pow(height/100,2));
}


function getMSG(height, weight){
    var BMI=getBMI(height, weight);
    return(BMI>=30? "fat":(BMI>=20? "a little fat" :"normal"))

}
console.log(getBMI('167', '60'));
console.log(getMSG('167', '60'));

console.log("down!");