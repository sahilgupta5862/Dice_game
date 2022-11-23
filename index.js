let randomNumber1=Math.floor(Math.random()*5)+1;
let randomNumber2=Math.floor(Math.random()*5)+1;

var randomDiceImage1="images/dice"+randomNumber1+".png"
var randomDiceImage2="images/dice"+randomNumber2+".png"

var image1=document.querySelector(".img1");
image1.setAttribute("src",randomDiceImage1);


var image2=document.querySelector(".img2");
image2.setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins"
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins"
}else{
        document.querySelector("h1").innerHTML="Draw"
}
