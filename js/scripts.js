function colorFunction(favColor) {
  document.body.style.backgroundColor = favColor;
}
function randomInt(min, max) {
  let min1 = Math.ceil(min);
  let max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1) + min1);
}


$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    let uName = $("#validationDefault01").val();
    let interest = $("#interest").val();
    let langType = $("#langType").val();
    let animal = $("#animal").val();
    let celeb = $("#celebrity").val();
    let favColor = $("#color").val();
    colorFunction(favColor);

    if (langType === "functional") {
      if (interest === "data" || interest === "vidG") {
        if (celeb === "issa") {
          $("#hidden").fadeIn(2000);
          $("#show").slideUp(1500)
          $("#codeLanguage").text("Elixir");
          $("#hiddenImg").attr("src", "img/elixir.jpeg");
        } else (celeb === "costas") {
          $("#hidden").fadeIn(2000);
          $("#show").slideUp(1500)
          $("#codeLanguage").text("C++");
          $("#hiddenImg").attr("src", "img/cplusplus.png");
        }
      } else if (interest === "design" || interest === "other") {
        if (animal === "bird") {
          $("#hidden").fadeIn(2000);
          $("#show").slideUp(1500)
          $("#codeLanguage").text("Python");
          $("#hiddenImg").attr("src", "img/python.jpeg");
        } else (animal === "cat") {
          $("#hidden").fadeIn(2000);
          $("#show").slideUp(1500)
          $("#codeLanguage").text("Ruby");
          $("#hiddenImg").attr("src", "img/ruby.png");
        }
      }  
    } else if (langType === "imperative") {
      if (interest === "data" || interest === "vidG") {
        if (celeb === "issa") {
          $("#hidden").fadeIn(2000);
          $("#show").slideUp(1500)
          $("#codeLanguage").text("COBOL");
          $("#hiddenImg").attr("src", "img/cobol.jpeg");
        } else (celeb === "costas") {
          $("#hidden").fadeIn(2000);
          $("#show").slideUp(1500)
          $("#codeLanguage").text("Rust");
          $("#hiddenImg").attr("src", "img/rust.png");
        }
      } else (interest === "design" || interest === "other") {
        if (animal === "bird") {
          $("#hidden").fadeIn(2000);
          $("#show").slideUp(1500)
          $("#codeLanguage").text("C# (C sharp)");
          $("#hiddenImg").attr("src", "img/csharp.jpeg");
        } else (animal === "cat") {
          $("#hidden").fadeIn(2000);
          $("#show").slideUp(1500)
          $("#codeLanguage").text("Java");
          $("#hiddenImg").attr("src", "img/java.jpeg");
        }
      }
    }
    $(".userGreet").text(uName);
  });

  $("button#crazy").click(function(event){
    event.preventDefault();
    let ranNum = randomInt(1, 8);
    console.log(ranNum);

    if (ranNum === 1) {
      $("#codeLanguage").text("Elixir");
      $("#hiddenImg").attr("src", "img/elixir.jpeg");
    } else if (ranNum === 2) {
      $("#codeLanguage").text("C++");
      $("#hiddenImg").attr("src", "img/cplusplus.png");
    } else if (ranNum === 3) {
      $("#codeLanguage").text("Python");
      $("#hiddenImg").attr("src", "img/python.jpeg");
    } else if (ranNum === 4) {
      $("#codeLanguage").text("Ruby");
      $("#hiddenImg").attr("src", "img/ruby.png");
    } else if (ranNum === 5) {
      $("#codeLanguage").text("COBOL");
      $("#hiddenImg").attr("src", "img/cobol.jpeg");
    } else if (ranNum === 6) {
      $("#codeLanguage").text("Rust");
      $("#hiddenImg").attr("src", "img/rust.png");
    } else if (ranNum === 7) {
      $("#codeLanguage").text("C# (C sharp)");
      $("#hiddenImg").attr("src", "img/csharp.jpeg");
    } else (ranNum === 8) {
      $("#codeLanguage").text("Java");
      $("#hiddenImg").attr("src", "img/java.jpeg");
    }
  });

  $("button#reset").click(function(event){
    event.preventDefault();
    $("#show").toggle(2000);
    $("#hidden").toggle(1500)
    $("#formOne").find("input").val("");
    let favColor = "rgb(218, 165, 32)"
    colorFunction(favColor);
  });
});
