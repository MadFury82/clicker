var score = 0;
var numberOfScale = 0;
var greater = 0;
var scale = 1;
var click = 1;
var knopTimer = 0;
var timeClick = 1;
var timeScale = 1;


////////////////////////////////////////////main function//////////////////////////
$(".cookie").on("click", function(){
  scoreIncreasing();
  $(".scores").html("your score is " + score);
  if(score <5000 && knopTimer<1){
    $(".kno").html( score + " /5000");
  }else if(score >5000 && knopTimer<1){
    $(".kno").html( "you achieved this");
    $(".knop").css("visibility","visible");
    knopTimer++;
  }
});

/////////////////////////////////////хз чо эта/////////////////////////////////////////
$(".kn").on("click", function(){
  if(score >= 1000) {
    score -= 1000;
    var myVar = setInterval(scoreIncreasingByTime, 3000);
  }
});

function scoreIncreasingByTime(){
  score += timeClick*scale;
}
function scoreIncreasing(){
  score += click*scale;
}
$(".ckbt").on("click",function(){
  if(numberOfScale < 5 && score >= 100){
    score -= 100;
    numberOfScale++;
    scale++;
  }else{
    alert("You reached maximum or your score under 100");
  }
});




$(".knopka").on("click",function(){
  if(greater < 5 && score >= 1000){
    score -= 1000;
    greater++;
    scale +=5;
  }else{
    alert("You reached maximum or your score under 1000");
  }
});



if(greater = 1){
$(".knopka").css("visibility","visible");
}else{$(".knopka").css("visibility","hidden");}

$(".knop").on("click",function(){
  alert("you didn't get exhausted?:D)");
  $(".knop").css("visibility","hidden");
});
