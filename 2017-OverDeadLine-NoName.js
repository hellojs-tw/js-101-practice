function getBMI(height,weight) {
    return weight/(Math.pow(height/100,2))
    
}
function getMessage(height,weight) {
    var a = getBMI(height,weight);
    //var a = 36;
    if (a >=  35) 
    {   return '重胖';
        
    }
    else if (a > 30)    {
        return '中胖';
        
    }
    else if (a > 27) {
        return '輕胖';
        
    }
    else if (a > 24){
        return '過胖';
        
    }
    else if (a >= 18.5){
        return '中等';  
        
    }
    else if (a < 18.5){
        return '風吹就飛走';  
        
    }      
    else{
        return '計算錯誤';
    }
}
function getMessage2(height,weight) {
    var a = getBMI(height,weight);
    //var a = 36;
    switch(true){
        case a >= 35 :
            return '重胖'
        case a > 30 :
            return '中胖'
        case a > 27 :
            return '輕胖'
        case a > 24 :
            return '過重'
        case a > 18.5 :
            return '中等'
        case a <18.5 :
            return '風吹就飛走'
        default:
            return 'ERR'
    }
}
console.log(getBMI(180,100));
console.log(getMessage2(180,100));