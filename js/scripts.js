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
    console.log(userName, interest, langType, animal, celeb, favColor)

    if (langType === "functional") {
      if (interest === "data" || interest === "vidG") {
        if (celeb === "issa") {
          $("#hidden").show();
        } else if (celeb === "costas") {
          $("#hidden").show();
        }
      } else if (interest === "design" || interest === "other") {
        if (animal === "bird") {
          $("#hidden").show();
        } else if (animal === "cat") {
          $("#hidden").show();
        }
      }  
    } else if (langType === "imperative") {
      if (interest === "data" || interest === "vidG") {
        if (celeb === "issa") {
          $("#hidden").show();
        } else if (celeb === "costas") {
          $("#hidden").show();
        }
      } else if (interest === "design" || interest === "other") {
        if (animal === "bird") {
          $("#hidden").show();
        } else if (animal === "cat") {
          $("#hidden").show();
        }
      }
    }
  
  });
});

$("#hidden").show();
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