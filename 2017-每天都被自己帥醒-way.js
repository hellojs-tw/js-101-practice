function getBMI(height, weight) {
  var bmi = weight/(height*height);
  console.log(bmi);
  return bmi;
}

function getMessage(height, weight) {
  var bmi = getBMI(height, weight);
  var message;
  if(bmi < 17.5) {
    message = "過輕";
  } else if (bmi >= 18.5 && bmi < 24) {
    message = "正常範圍";
  } else if (bmi >= 24 && bmi < 27) {
    message = "過重";
  } else if (bmi >= 27 && bmi < 30) {
    message = "輕度肥胖";
  } else if (bmi >= 30 && bmi < 35) {
    message = "中度肥胖";
  } else if (bmi >= 35) {
    message = "重度肥胖";
  }

  return message;
}

console.log(getMessage(1.75,80));
