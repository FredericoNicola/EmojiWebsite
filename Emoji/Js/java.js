//função do botao traduzir


function traduzir(){

  var texto1 = document.getElementById("textoint").value;
  var texto = texto1.toLocaleLowerCase();
  textolista=texto.split(" ");

  

  for(i=0; i<textolista.length; i++){

    if(textolista == " "){
      // alert("nada");
      document.getElementById("errorbox").style.display = "block";

    }
    //Smileys
    else if(textolista[i] == "sorridente"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😁"+" ";
    }
    else if(textolista[i] == "feliz"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😀"+" ";
      
    }
    else if(textolista[i] == "rir"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😂"+" ";
      
    }
    else if(textolista[i] == "gargalhada"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤣"+" ";  
    }
    else if(textolista[i] == "piscar"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😉"+" ";  
    }
    else if(textolista[i] == "estiloso"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😎"+" ";  
    }

    else if(textolista[i] == "amor"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😍"+" ";
      
    }
    else if(textolista[i] == "beijo"){
      //alert(textolista[i]);
      if(textolista[i+1]=="apaixonante"){
        textolista.splice(i+1,i+1);
        document.getElementById("feito").innerHTML += "😘"+" ";
        
      }
      else{
        document.getElementById("feito").innerHTML += "😗"+" ";
      }
    }
    else if(textolista[i] == "pensativo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤔"+" ";
      
    }
    else if(textolista[i] == "desconfiado"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤨"+" ";
      
    }
    else if(textolista[i] == "neutro"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😐"+" ";
      
    }
    else if(textolista[i] == "inexpressivo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😑"+" ";
      
    }

    else if(textolista[i] == "calado"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😶"+" ";
      
    }
    else if(textolista[i] == "revirar" && textolista[i+1]=="olhos"){
      // alert(textolista[i]);
      textolista.splice(i+1,i+1);
      document.getElementById("feito").innerHTML += "🙄"+" ";
    }
    else if(textolista[i] == "sorriso" && textolista[i+1]=="maroto"){
      // alert(textolista[i]);
      textolista.splice(i+1,i+1);
      document.getElementById("feito").innerHTML += "😏"+" ";
    }
    else if(textolista[i] == "perseverança"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😣"+" ";
    }
    else if(textolista[i] == "ufa"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😥"+" ";
    }
    else if(textolista[i] == "boca" && textolista[i+1]=="aberta"){
      // alert(textolista[i]);
      textolista.splice(i+1,i+1);
      document.getElementById("feito").innerHTML += "😮"+" ";
    }
    else if(textolista[i] == "surpreendido"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😯"+" ";
      
    }
    else if(textolista[i] == "sonolento"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😪"+" ";
      
    }
    else if(textolista[i] == "cansado"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😫"+" ";
      
    }
    else if(textolista[i] == "dormir"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😴"+" ";
    }
    else if(textolista[i] == "aliviado"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😌"+" ";
    }
    else if(textolista[i] == "mostrar" && textolista[i+1]=="lingua"){
      // alert(textolista[i]);
      textolista.splice(i+1,i+1);
      document.getElementById("feito").innerHTML += "😛"+" ";
    }
    else if(textolista[i] == "maluco"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😜"+" ";
    }

    else if(textolista[i] == "babar"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤤"+" ";
      
    }
    else if(textolista[i] == "triste"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😢"+" ";
      
    }
    else if(textolista[i] == "chorar"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😭"+" ";
      
    }
    else if(textolista[i] == "assustado"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😨"+" ";
      
    }
    else if(textolista[i] == "ups"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😬"+" ";
    }

    else if(textolista[i] == "medo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😱"+" ";
      
    }
    else if(textolista[i] == "superaquecido"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🥵"+" ";
      
    }
    else if(textolista[i] == "congelado"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🥶"+" ";
      
    }
    else if(textolista[i] == "tonto"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😵"+" ";
      
    }
    else if(textolista[i] == "furioso"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😡"+" ";
      
    }
    else if(textolista[i] == "zangado"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😠"+" ";
      
    }
    else if(textolista[i] == "insultar"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤬"+" ";
      
    }
    else if(textolista[i] == "doente"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤒"+" ";
      
    }
    else if(textolista[i] == "aleijado"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤕"+" ";
      
    }

    else if(textolista[i] == "enjoado"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤢"+" ";
    }
    else if(textolista[i] == "vomitar"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤮"+" ";
      
    }

    else if(textolista[i] == "espirro"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤧"+" ";
      
    }
    else if(textolista[i] == "anjo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "😇"+" ";
      
    }
    else if(textolista[i] == "cowboy"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤠"+" ";
      
    }

    else if(textolista[i] == "palhaço"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤡"+" ";
      
    }

    else if(textolista[i] == "implorar"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🥺"+" ";
    }
    else if(textolista[i] == "mentiroso"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤥"+" ";
    }
    else if(textolista[i] == "implorar"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤫"+" ";
    }

    else if(textolista[i] == "monoculo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🧐"+" ";
    }
    else if(textolista[i] == "nerd"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤓"+" ";
    }

    else if(textolista[i] == "caveira"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "💀"+" ";
      
    }

    else if(textolista[i] == "fantasma"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "👻"+" ";
      
    }
    else if(textolista[i] == "alien"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "👽"+" ";
      
    }
    else if(textolista[i] == "robô"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🤖"+" ";
      
    }

    else if(textolista[i] == "cocó"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "💩"+" ";
      
    }
    else if(textolista[i] == "gato"){
      if(textolista[i+1]=="sorridente"){
        document.getElementById("feito").innerHTML+="😺"+" ";
        textolista.splice(i+1,i+1);
      }
      else if(textolista[i+1]=="feliz"){
        document.getElementById("feito").innerHTML+="😸"+" ";
        textolista.splice(i+1,i+1);
      }
      else if(textolista[i+1]=="rir"){
        document.getElementById("feito").innerHTML+="😹"+" ";
        textolista.splice(i+1,i+1);
      }
      else if(textolista[i+1]=="apaixonado"){
        document.getElementById("feito").innerHTML+="😻"+" ";
        textolista.splice(i+1,i+1);
      }
      else if(textolista[i+1]=="irônico"){
        document.getElementById("feito").innerHTML+="😼"+" ";
        textolista.splice(i+1,i+1);
      }
      else if(textolista[i+1]=="beijo"){
        document.getElementById("feito").innerHTML+="😽"+" ";
        textolista.splice(i+1,i+1);
      }
      else if(textolista[i+1]=="surpreendido"){
        document.getElementById("feito").innerHTML+="🙀"+" ";
        textolista.splice(i+1,i+1);
      }
      else if(textolista[i+1]=="triste"){
        document.getElementById("feito").innerHTML+="😿"+" ";
        textolista.splice(i+1,i+1);
      }
      else if(textolista[i+1]=="zangado"){
        document.getElementById("feito").innerHTML+="😾"+" ";
        textolista.splice(i+1,i+1);
      }
      else if(textolista[i+1]=="cara"){
        document.getElementById("feito").innerHTML+="🐱"+" ";
        textolista.splice(i+1,i+1);
      }
      else{
        document.getElementById("feito").innerHTML+="🐈"+" "
      }
    }
    
    else if(textolista[i]=="cão" && textolista[i+1]=="cara"){
      document.getElementById("feito").innerHTML+="🐶"+" ";
      textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="cão" ){
      document.getElementById("feito").innerHTML+=" 🐕 "+" ";
    }



 //People and Fantasy
    else if(textolista[i] == "homem"){
      // alert(textolista[i]);
      if(textolista[i+1]=="braço"){
        if(textolista[i+2]=="levantado"){
          document.getElementById("feito").innerHTML += "🙋‍♂️"+" ";
          textolista.splice(i+1,i+2);
        }
        else if(textolista[i+2]=="cruzado"){
          document.getElementById("feito").innerHTML += "🙅‍♂️"+" ";
          textolista.splice(i+1,i+2);
        }
      }
      else if(textolista[i+1]=="mão"){
        
        if(textolista[i+2]=="levantada"){
          document.getElementById("feito").innerHTML += "🤷‍♂️"+" ";
          textolista.splice(i+1,i+2);
        }
        else if(textolista[i+2]=="cara"){
          document.getElementById("feito").innerHTML += "🤦‍♂️"+" ";
          textolista.splice(i+1,i+2);
        }
      }
      else{
        document.getElementById("feito").innerHTML += "🙎‍♂️"+" ";
      }
    }
    //Animals & Nature 
    else if(textolista[i] == "unicornio"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦄"+" ";
      
    }
    else if(textolista[i] == "dragão"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐉"+" ";
      
    }
    else if(textolista[i] == "chama"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🔥"+" ";
      
    }
    else{
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
