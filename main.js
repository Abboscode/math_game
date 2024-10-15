
let correctAnswers =0
const operand =['+','×','-','÷']


const randomGenerator =()=>{


    return Math.floor(Math.random()*20)
}

let a=randomGenerator()+1
let b=randomGenerator()+1
const doOperation =(a,b,op)=>{
 

switch (op)
{

    case'+':return a+b
    break;
    case'×':return a*b
    break;
    case '-':return a-b
    break;
    case '÷':
        return a/b;
    default:
        console.log("eror in oeprands")

}}
;


const changeValues=()=>{
 a=randomGenerator()+1
 b=randomGenerator()+1
document.getElementById("op").innerHTML=operand[Math.floor(Math.random()*4)]

//special check here a always bigger itegers so we will avoid negative values  
document.getElementById("a").innerHTML= a>b?a:b   //return a if a is bigger ,else b
document.getElementById("b").innerHTML=a<b?a:b
}
changeValues()

const checkValues=()=>{
    const answer = document.getElementById("answer")
if(doOperation(a,b,document.getElementById("op").innerHTML)==answer.value){

    document.getElementById("flag").innerHTML="Correct"
    correctAnswers++
    
    changeValues()
    document.getElementById("correctAnswers").innerHTML="Correct Answers: "+correctAnswers
}else{

document.getElementById("flag").innerHTML="Incorrect"
changeValues()
}


}

let counter =10



 const changeTimer=()=>{
    if(counter==0){
        document.getElementById("timer").innerHTML="DONE"
        counter=10
        document.getElementById("equationContainer").innerHTML="DONE"
        stopTimer()
    }else{
    document.getElementById("timer").innerHTML=counter--
    console.log(counter)
    }}
       
   const valueInterval= setInterval(changeTimer,1000)

   const stopTimer=()=>{
    
        clearInterval(valueInterval)
        
        
    

    


   }
