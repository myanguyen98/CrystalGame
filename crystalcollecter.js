var numCrystal=getRandomInt(1,13);
var numCrystal2=getRandomInt(1,13);
var numCrystal3=getRandomInt(1,13);
var numCrystal4=getRandomInt(1,13);
var totalScore=0;
var numtoGuess=randomNumber(1,121);
var wins=0;
var loss=0;
console.log(numCrystal+","+numCrystal2+","+numCrystal3+","+numCrystal4);

$(".randomNumber").html(numtoGuess);

$(".crystal1").on("click",function(){
	totalScore=parseInt(numCrystal)+parseInt(totalScore)
	;
	$(".totalScore").html(totalScore);
	checker();
});

$(".crystal2").on("click",function(){
	totalScore=parseInt(numCrystal2)+parseInt(totalScore);
	$(".totalScore").html(totalScore);
	checker();
});

$(".crystal3").on("click",function(){
	totalScore=parseInt(numCrystal3)+parseInt(totalScore)
	$(".totalScore").html(totalScore);
	checker();
});

$(".crystal4").on("click",function(){
	totalScore=parseInt(numCrystal4)+parseInt(totalScore)
	$(".totalScore").html(totalScore);
	checker();
});

	function getRandomInt(min, max) {
  	min = Math.ceil(1);
  	max = Math.floor(13);
  return Math.floor(Math.random() * (13 - 1)) + 1; 
	};


	function randomNumber(min, max) {
  	min = Math.ceil(19);
  	max = Math.floor(121);
  return Math.floor(Math.random() * (121 - 19)) + 19;
	};
function checker(){
	if (numtoGuess===totalScore) {
		wins++;
		$("#wins").html(wins);
		numtoGuess=Math.floor(Math.random() * (121 - 19)) + 19;
			$(".randomNumber").html(numtoGuess);
	totalScore=0;
        $(".totalScore").html("0");

	} 
	else if (totalScore>numtoGuess) {
		loss++;
		$("#losses").html(loss);
	
	numtoGuess=Math.floor(Math.random() * (121 - 19)) + 19;
		$(".randomNumber").html(numtoGuess);
	totalScore=0;
        $(".totalScore").html("0");
	};
}


