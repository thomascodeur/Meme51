var bouton1 = document.getElementById("texte1");
var bouton2 = document.getElementById("options1");

var bouton3 = document.getElementById("texte2");
var bouton4 = document.getElementById("options2");

function preview(input) {
  if (input.files && input.files[0]) {
      var freader = new FileReader();

      freader.onload = function (e) {
          $('#preview').attr('src', e.target.result);
      }
      freader.readAsDataURL(input.files[0]);
  }
}

$("#meme").change(function(){
  preview(this);
});


bouton1.addEventListener("click",function(e){
  document.getElementById('texte').style.display = 'flex';
  document.getElementById('options').style.display = 'none';
  });

bouton2.addEventListener("click",function(e){
  document.getElementById('texte').style.display = 'none';
  document.getElementById('options').style.display = 'flex';
  });

bouton3.addEventListener("click",function(e){
  document.getElementById('texte').style.display = 'flex';
  document.getElementById('options').style.display = 'none';
  });
    
bouton4.addEventListener("click",function(e){
  document.getElementById('texte').style.display = 'none';
  document.getElementById('options').style.display = 'flex';
  });

/*  $(document).ready(function(){
    var codeTest = '';

    $(document).on('keydown', function(e){
        if (e.keyCode == 77 && (codeTest == "")) {
            codeTest += 'm';
        } else if (e.keyCode == 86 && codeTest == "m") {
            codeTest += 'v';
            document.getElementById('Mv').style.display = "flex";
            setTimeout(function(){
            document.getElementById('Mv').style.display = "none";
            },1000);
        } else {
            codeTest = "";
            document.getElementById('Mv').style.display = "none";
        }
        console.log(codeTest);
    });

});

$(document).ready(function(){
  var codeTest = '';

  $(document).on('keydown', function(e){
      if (e.keyCode == 66 && (codeTest == "")) {
        codeTest += 'b';
    } else if (e.keyCode == 79 && codeTest == "b") {
        codeTest += 'o';
    } else if (e.keyCode == 66 && codeTest == "bo") {
        codeTest += 'b';
          document.getElementById('Bob').style.display = "flex";
          setTimeout(function(){
          document.getElementById('Bob').style.display = "none";
          },1000);
      } else {
          codeTest = "";
          document.getElementById('Bob').style.display = "none";
      }
      console.log(codeTest);
  });

});*/

