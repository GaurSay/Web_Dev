var p1 = Math.floor(Math.random()*6)+1;
var p2 = Math.floor(Math.random()*6)+1;
if (p1 > p2) {
  document.querySelector("h1").textContent = "🚩Player1 wins!";

} else if (p1 === p2) {
  document.querySelector("h1").textContent = "Draw !";
} else {
  document.querySelector("h1").textContent="Player2 wins!🚩";
}
var srcImage1="images/dice"+p1+".png";
var srcImage2="images/dice"+p2+".png";
document.querySelectorAll("img")[0].setAttribute("src",srcImage1);
document.querySelectorAll("img")[1].setAttribute("src",srcImage2);
