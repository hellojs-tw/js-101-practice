function getBMI(height,weight){
return weight/(Math.pow(height,2))*10000
}
function getMessage(height,weight){
    var out=getBMI(height,weight)
if(out>=35){
    return ("重大肥胖")
}else if(out>=30){
      return ("中度肥胖")
    
}else if(out>=27){
      return ("輕度肥胖")
    
}else if(out>=24){
      return ("過重")
}else if(out>=18,5){
    
      return ("正常範圍")
}else{
      return ("體重過輕")
}

return (out>=35?"重大肥胖":(out>=30)?"中度肥胖":(out>=27)?"輕度肥胖":(out>=24)?"過重":(out>=18.5)?"正常範圍":"體重過輕")
}
console.log(getBMI(175,72))

console.log(getMessage(175,60))

