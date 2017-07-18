function getBMI(height,weight)
{
    return weight/((height*height)/10000);
}



function getMessage(height,weight)
{
    var result=getBMI(height,weight);
    if(result<18.5)
    {
        console.log("過輕");
    }else if(result<24)
    {
        console.log("正常");
    }else if(result<27)
    {
        console.log("昱彥");
    }else if(result<30)
    {
        console.log("輕度昱彥");
    }else if(result<35)
    {
        console.log("中度昱彥");
    }else if(result<30)
    {
        console.log("重度昱彥");
    }
}

var h=176;
var w=90;
getMessage(h,w);
