


$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    let userName = $("#userName").val();
    let interest = $("#interest").val();
    let langType = $("#langType").val();
    let animal = $("#animal").val();
    let celeb = $("#celebrity").val();
    let favColor = $("#color").val()
    console.log(userName, interest, langType, animal, celeb, favColor)

  
  });





});