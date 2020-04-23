
//função do botao traduzir
function traduzir(){
    var texto = document.getElementById("textoint").value;
    
    //warning 
    if(texto == ""){
        alert("Introduza pelo menos uma palavra")
    }
    else if(texto == "rir"){
        document.getElementById("feito").innerHTML = "😁";
    }

    else if(texto =="chorar"){
        document.getElementById("feito").innerHTML = "😭";
    }
    else{
        alert("Palavra Indisponivel para tradução");
    }

}

//funçao do botao apagar
function apagar(){
    document.getElementById("textoint").value="";
    document.getElementById("feito").value="";

}