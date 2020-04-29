//função do botao traduzir
function traduzir() {
  var texto1 = document.getElementById("textoint").value;
  var texto = texto1.toLocaleLowerCase();

  //warning message
  if (texto == "") {
    alert("Introduza pelo menos uma palavra");
  } else if (texto == "rir") {
    document.getElementById("feito").innerHTML = "😁";
  } else if (texto == "chorar") {
    document.getElementById("feito").innerHTML = "😭";
  } else {
    document.getElementById("errorbox").style.display = "block";
    c = 1;
  }
}

function fechar() {
  if (c == 1) {
    document.getElementById("errorbox").style.display = "none";
    c = 1;
  }
}

//funçao do botao apagar
function apagar() {
  document.getElementById("textoint").value = "";
  document.getElementById("feito").value = "";
}
