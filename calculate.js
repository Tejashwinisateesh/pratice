const express=require("express")
const bodyparser=require("body-parser")
const app=express()
 
 app.use(bodyparser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post('/',(req,res)=>{
    console.log();
var num1=(req.body.n1);
var num2=(req.body.n2);
var sum=num1+num2;
res.send("the result is "  +  sum);
})


app.get('/bmicalculator',(req,res)=>{
    res.sendFile(__dirname + "/bmicalculator.html");
})

app.post('/bmicalculator',(req,res)=>{
    var weight1=parseInt(req.body.weight);
    var height1=parseInt(req.body.height);
    var result=weight1/(height1*height1)

    res.send("the bmi calculator "+  result) ;
})

function bmicalculator(weight,height){
    var bmi=weight/Math.pow(height,2);
    console.log(bmi);
    return Math.round(bmi);
    
}
bmicalculator(75,1.5);



let bmi=bmicalculator(75,160);
if(bmi<18.5){
    console.log("your bmi is "+bmi+" so you are underweight")
}else if(18.5>bmi<24.9){
    console.log("your bmi is "+bmi+" so you have a normal weight")
}else if(bmi>24.9){
    console.log("your bmi is "+bmi+" so you are overweight")
}else{
    console.log("not found")
}
var n=Math.random();
n=n*6;
n=Math.floor(n)+1;
console.log(n); 



var names=["jack","elu","heroes","tireg","ythgo"]
var myname=["jack"]
if(names.includes(myname)){
    console.log("welcome");
}else{
    console.log("please next time")
}

function whosPaying(names) {
    var numberOfPeople=names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson=names[randomPersonPosition]
  return randomPerson+"  is going to buy lunch today"   
}
function lifeInWeeks(age) {
        
        var yearRemaining=90-age;
        var days=yearRemaining * 365;
        var weeks=yearRemaining * 52;
        var months=yearRemaining * 12 ;
        
        console.log("you have "+ days +" days,"+ weeks + " weeks, and"  + months +"months left");
    }
    lifeInWeeks(23)


    if(n=1){
console.log("the given number is equal to one")
    }else{
console.log("the given number is not equal to one")
    }



app.listen('3300',(req,res)=>{
    console.log("server is running on port 3300")
})  

