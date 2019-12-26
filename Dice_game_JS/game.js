



var turn=true;
var p1_curr=0;
var p2_curr=0;
var p1_total=0;
var p2_total=0;
document.querySelector('#player1-total').textContent=0;
document.querySelector('#player2-total').textContent=0;
document.querySelector('#p2_chance').hidden = true;

//NEW GAME
document.querySelector('#btnNewgame').onclick=function()
{
  var turn=true;
  var p1_curr=0;
  var p2_curr=0;
  var p1_total=0;
  var p2_total=0;
  document.querySelector('#p1_score').textContent=0;
  document.querySelector('#p2_score').textContent=0;
  document.querySelector('#player1-total').textContent=0;
  document.querySelector('#player2-total').textContent=0;
};

//DICE ROLL

document.querySelector('#btn-rollDice').onclick=function(){
  var random_num = Math.floor(Math.random()*6)+1;
  var srcImage1="images/dice"+random_num+".png";
  document.querySelector("#dice").setAttribute("src",srcImage1);
  if(turn)
  {
    if(random_num==1)
    {
      document.querySelector('#p1_chance').hidden = true;
      document.querySelector('#p2_chance').hidden = false;
      p1_curr=0;
      turn=false;
      document.querySelector('#p1_score').textContent=0;
    }
    else{
      p1_curr+=random_num;
      document.querySelector('#p1_score').textContent=p1_curr;
    }
  }
  else{
    if(random_num==1)
    {
      document.querySelector('#p1_chance').hidden = false;
      document.querySelector('#p2_chance').hidden = true;
      p2_curr=0;
      turn=true;
      document.querySelector('#p2_score').textContent=0;
    }
    else{
      p2_curr+=random_num;
      document.querySelector('#p2_score').textContent=p2_curr;
    }
  }
  var x=p1_curr;
};
console.log(p1_curr);
document.querySelector('#btn-hold').onclick=function(){
  if(turn)
  {

    let y=document.querySelector('#p1_score').textContent;
    document.querySelector('#p1_score').textContent=0;
    var total=document.querySelector('#player1-total').textContent;
    p1_total=total+y;
    document.querySelector('#player1-total').html(p1_total);
    var p1_curr=0;
    turn=false;
  }
  else{
    let t2=document.querySelector('#p2_score').textContent;
    document.querySelector('#p2_score').textContent=0;
    var total=document.querySelector('#player2-total').textContent;
    p2_total=total+t2;
    document.querySelector('#player2-total').html(p2_total);
    var p2_curr=0;
    turn=true;
  }

}



// if (p1 > p2) {
//   document.querySelector("h1").textContent = "🚩Player1 wins!";
//
// } else if (p1 === p2) {
//   document.querySelector("h1").textContent = "Draw !";
// } else {
//   document.querySelector("h1").textContent="Player2 wins!🚩";
// }
