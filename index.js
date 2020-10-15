var score = 0;
var numberOfScale = 0;
var greaterNumberOfScale = 0;
var scale = 1;
var click = 1;
$(".cookie").on("click", function(){
  scoreIncreasing();
  $(".scores").html("your score is " + score);
});
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
$(".ckbtt").on("click",function(){
  if(greaterNumberOfScale < 5 && score >= 10){
    score -= 10;
    greaterNumberOfScale++;
    scale +=5;
    if(greaterNumberOfScale = 1){
    $(".ckbttt").css("visibility","visible");
    }else{$(".ckbttt").css("visibility","hidden");}
  }else{
    alert("You reached maximum or your score under 1000");
  }
});

$(".ckbttt").on("click",function(){
  alert("you didn't get exhausted?:D)");
  $(".ckbttt").css("visibility","hidden");
});
