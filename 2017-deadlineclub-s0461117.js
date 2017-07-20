function getBMI(height,weight){
   var result=weight/(height*height);
   return result;
};

function getMessage(height,weight){
    var result=weight/(height*height);
    if (result>24) {
        var answer='BMI過高   體重正常範圍為  BMI=18.5～24 ';
    return answer;
    }
    if(result>18.5){
    var answer='BMI過低   體重正常範圍為  BMI=18.5～24 ';
    return answer;
    }
    else{
        var answer='體重位於正常範圍  體重正常範圍為  BMI=18.5～24 ';
        return answer;
    }
};

console.log(getBMI(1, 52));
console.log(getMessage(1, 52));
