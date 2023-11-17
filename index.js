var randomNumber1=Math.floor(Math.random()*6)+1;
var random_dice_image1="dice"+randomNumber1+".png";
var randomImageSource1="Images/"+random_dice_image1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

// for the second image 
var randomNumber2=Math.floor(Math.random()*6)+1;
var random_dice_image2="dice"+randomNumber2+".png";
var randomImageSource2="Images/"+random_dice_image2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

// Changing the content of h1 based on the condition
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="<i class='fa-solid fa-hand-peace'></i> Player 1 Won ";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Won <i class='fa-solid fa-hand-peace'></i>";
}else {
    document.querySelector("h1").innerHTML="Player 1 <i class='fa-solid fa-handshake'></i> Player 2";
}