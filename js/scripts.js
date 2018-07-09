$(document).ready(function(){
$("#blanks form").submit (function(event){
	event.preventDefault();
  var number1Input=$("input#number1").val();
  var number2Input=$("input#number2").val();
  var number3Input=$("input#number3").val();

  console.log(number1Input)

  $(".number1").text(number1Input);
  $(".number2").text(number2Input);
  $(".number3").text(number3Input);



}) ;

})
