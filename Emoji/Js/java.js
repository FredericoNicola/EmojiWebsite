//função do botao traduzir

// function traduzir() {
//   var texto1 = document.getElementById("textoint").value;
//   var texto = texto1.toLocaleLowerCase();

//   warning message
//   if (texto == "") {
//     document.getElementById("errorbox").style.display = "block";
//   } else if (texto == "rir") {
//     document.getElementById("feito").innerHTML = "😁";
//   } else if (texto == "chorar") {
//     document.getElementById("feito").innerHTML = "😭";
//   } else {
//     document.getElementById("errorbox-3").style.display = "block";
//   }
// }

function traduzir() {
  var texto1 = document.getElementById("textoint").value;
  var texto = texto1.toLocaleLowerCase();
  textolista = texto.split(" ");

  for (i = 0; i < textolista.length; i++) {
    if (textolista[i] == "") {
      // alert("nada");
      document.getElementById("errorbox").style.display = "block";
    } else if (textolista[i] == "rir") {
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😁" + " ";
    } else if (textolista[i] == "chorar") {
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😭" + " ";
    } else {
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += textolista[i] + " ";
      document.getElementById("errorbox-3").style.display = "block";
    }
  }
}

function fechar() {
  document.getElementById("errorbox").style.display = "none";
  document.getElementById("errorbox-2").style.display = "none";
  document.getElementById("errorbox-3").style.display = "none";
}

//funçao do botao apagar
function apagar() {
  document.getElementById("textoint").value = "";
  document.getElementById("feito").value = "";
  document.getElementById("errorbox-2").style.display = "block";
}

function navbar() {
  var x = document.getElementById("mynav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
