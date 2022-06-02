var first=Math.floor((Math.random()*6)+1);
var second=Math.floor((Math.random()*6)+1);



document.querySelector("img.img1").setAttribute("src","images/dice"+first+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+second+".png");
if(first>second){
  document.querySelector("h1").innerHTML="🚩 Player1 Wins";
}else if(first<second){
  document.querySelector("h1").innerHTML="Player2 Wins 🚩";
}else{
  document.querySelector("h1").innerHTML="DRAW";
}
