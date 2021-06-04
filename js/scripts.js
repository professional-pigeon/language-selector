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
    let uName = $("#userName").val();
    let interest = $("#interest").val();
    let langType = $("#langType").val();
    let animal = $("#animal").val();
    let celeb = $("#celebrity").val();
    let favColor = $("#color").val()
    colorFunction(favColor)
    console.log(userName, interest, langType, animal, celeb, favColor)

    if (langType === "functional") {
      if (interest === "data" || interest === "vidG") {
        if (celeb === "issa") {
          $("#hidden").show();
          $("#codeLanguage").text("Elixir")
          $("#hiddenImg").attr("src", "img/elixir.jpeg")
        } else if (celeb === "costas") {
          $("#hidden").show();
          $("#codeLanguage").text("C++")
          $("#hiddenImg").attr("src", "img/cplusplus.jpeg")
        }
      } else if (interest === "design" || interest === "other") {
        if (animal === "bird") {
          $("#hidden").show();
          $("#codeLanguage").text("Python")
          $("#hiddenImg").attr("src", "img/python.jpeg")
        } else if (animal === "cat") {
          $("#hidden").show();
          $("#codeLanguage").text("Ruby")
          $("#hiddenImg").attr("src", "img/ruby.png")
        }
      }  
    } else if (langType === "imperative") {
      if (interest === "data" || interest === "vidG") {
        if (celeb === "issa") {
          $("#hidden").show();
          $("#codeLanguage").text("COBOL")
          $("#hiddenImg").attr("src", "img/cobol.jpeg")
        } else if (celeb === "costas") {
          $("#hidden").show();
          $("#codeLanguage").text("Rust")
          $("#hiddenImg").attr("src", "img/rust.png")
        }
      } else if (interest === "design" || interest === "other") {
        if (animal === "bird") {
          $("#hidden").show();
          $("#codeLanguage").text("C# (C sharp)")
          $("#hiddenImg").attr("src", "img/csharp.jpeg")
        } else if (animal === "cat") {
          $("#hidden").show();
          $("#codeLanguage").text("Java")
          $("#hiddenImg").attr("src", "img/java.jpeg")
        }
      }
    }
    $("#userGreet").text(uName)
  });
});
/* okay what possible options exist

1. design, data, vidG, other
2. function, imperative
3. cat, bird
4. issa, costas,


Tree design

Function - data, vidG - issa (then language1)
Function - data, vidG - costas(then language2)

Function - design, other - cat (then language3)
Function - design, other - bird (then language4)

imperative - data, vidG - issa (language5)
imperative - data, vidG - costas (language6)

imperative - design, other - bird (language7)
imperative - design, other - cat (language8) */