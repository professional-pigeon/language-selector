function colorFunction(favColor) {
  document.body.style.backgroundColor = favColor;
}


$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    let userName = $("#userName").val();
    let interest = $("#interest").val();
    let langType = $("#langType").val();
    let animal = $("#animal").val();
    let celeb = $("#celebrity").val();
    let favColor = $("#color").val()
    colorFunction(favColor)
    console.log(typeof(userName), typeof(interest), typeof(langType), typeof(animal), typeof(celeb), typeof(favColor))

  
  });





});