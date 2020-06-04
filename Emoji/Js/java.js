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
      document.getElementById("feito").innerHTML+="🐕"+" ";
    }

//Animals & Nature 
    else if(textolista[i] == "rato"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐭"+" ";
      
    }
    else if(textolista[i] == "hamster"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐹"+" ";
      
    }
    else if(textolista[i] == "coelho"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐰"+" ";
      
    }
    else if(textolista[i] == "raposa"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦊"+" ";
      
    }
    else if(textolista[i] == "texugo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦝"+" ";
      
    }else if(textolista[i] == "urso"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐻"+" ";
      
    }
    else if(textolista[i] == "panda"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐼"+" ";
      
    }
    else if(textolista[i] == "kanguru"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦘"+" ";
      
    }
    else if(textolista[i] == "doninha"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦡"+" ";
      
    }
    else if(textolista[i] == "koala"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐨"+" ";
      
    }
    else if(textolista[i] == "tigre"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐯"+" ";
      
    }
    else if(textolista[i] == "leão"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦁"+" ";
      
    }
    else if(textolista[i] == "touro"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐮"+" ";
      
    }
    else if(textolista[i] == "porco"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐷"+" ";
      
    }
    else if(textolista[i] == "sapo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐸"+" ";
      
    }

    else if(textolista[i]=="macaco"){
      if(textolista[i+1]=="mãos" && textolista[i+2]=="cara" ){
        document.getElementById("feito").innerHTML += "🙈"+" ";
        textolista.splice(i+1,i+2);
      }
      else if(textolista[i+1]=="mãos" && textolista[i+2]=="orelhas"){
        document.getElementById("feito").innerHTML += "🙉"+" ";
        textolista.splice(i+1,i+2);
      }
      else if(textolista[i+1]=="mãos" && textolista[i+2]=="boca"){
        document.getElementById("feito").innerHTML += "🙊"+" ";
        textolista.splice(i+1,i+2);
      }
      else if(textolista[i+1]=="corpo"){
        document.getElementById("feito").innerHTML += "🐒"+" ";
        textolista.splice(i+1);
      }
      else{
        document.getElementById("feito").innerHTML += "🐵"+" ";
      }
    }
    else if(textolista[i] == "galinha"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐔"+" ";
      
    }
    else if(textolista[i] == "pinguim"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐧"+" ";
      
    }
    else if(textolista[i] == "passaro"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐦"+" ";
      
    }
    else if(textolista[i] == "pintainho"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐣"+" ";
      
    }
    else if(textolista[i] == "pato"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦆"+" ";
      
    }
    else if(textolista[i] == "cisne"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦢"+" ";
      
    }
    else if(textolista[i] == "aguia"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦅"+" ";
      
    }
    else if(textolista[i] == "coruja"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦉"+" ";
      
    }
    else if(textolista[i] == "pavão"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦚"+" ";
      
    }
    else if(textolista[i] == "papgaio"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦜"+" ";
      
    }
    else if(textolista[i] == "morcego"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦇"+" ";
      
    }
    else if(textolista[i] == "lobo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐺"+" ";
      
    }
    else if(textolista[i] == "javali"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐗"+" ";
      
    }
    else if(textolista[i] == "cavalo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐴"+" ";
      
    }

    else if(textolista[i] == "unicornio"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦄"+" ";
      
    }
    else if(textolista[i] == "abelha"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐝"+" ";
      
    }
    else if(textolista[i] == "lagarta"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐛"+" ";
      
    }
    else if(textolista[i] == "dragão"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐉"+" ";
      
    }
    else if(textolista[i] == "borboleta"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦋"+" ";
      
    }
    else if(textolista[i] == "caracol"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐌"+" ";
      
    }
    else if(textolista[i] == "buzio"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐚"+" ";
      
    }
    else if(textolista[i] == "joaninha"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐞"+" ";
      
    }
    else if(textolista[i] == "formiga"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐜"+" ";
      
    }
    else if(textolista[i] == "gafanhoto"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦗"+" ";
      
    }else if(textolista[i] == "aranha"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🕷"+" ";
      
    }
    else if(textolista[i] == "teia"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🕸"+" ";
      
    }
    else if(textolista[i] == "escorpião"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦂"+" ";
      
    }
    else if(textolista[i] == "mosquito"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦟"+" ";
      
    }
    else if(textolista[i] == "bacteria"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦠"+" ";
      
    }
    else if(textolista[i] == "tartaruga"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐢"+" ";
      
    }
    else if(textolista[i] == "cobra"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐍"+" ";
      
    }
    else if(textolista[i] == "lagratixa"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦎"+" ";
      
    }
    else if(textolista[i] == "t-rex"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦖"+" ";
      
    }
    else if(textolista[i] == "braquiossauro"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦕"+" ";
      
    }
    else if(textolista[i] == "polvo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐙"+" ";
      
    }
    else if(textolista[i] == "lula"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦑"+" ";
      
    }
    else if(textolista[i] == "camarão"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦐"+" ";
      
    }
    else if(textolista[i] == "caranguejo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦀"+" ";
      
    }
    else if(textolista[i] == "peixe"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐠"+" ";
      
    }
    else if(textolista[i] == "golfinho"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐬"+" ";
      
    }
    else if(textolista[i] == "baleia"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐳"+" ";
      
    }
    else if(textolista[i] == "tubarão"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦈"+" ";
      
    }
    else if(textolista[i] == "crocodilo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐊"+" ";
      
    }
    else if(textolista[i] == "chita"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐆"+" ";
      
    }
    else if(textolista[i] == "zebra"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦓"+" ";
      
    }
    else if(textolista[i] == "gorila"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦍"+" ";
      
    }
    else if(textolista[i] == "elefante"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐘"+" ";
      
    }
    else if(textolista[i] == "rinoceronte"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦏"+" ";
      
    }
    else if(textolista[i] == "hipopotamo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦛"+" ";
      
    }
    else if(textolista[i] == "camelo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐫"+" ";
      
    }
    else if(textolista[i] == "lama"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦙"+" ";
      
    }
    else if(textolista[i] == "girafa"){
      // alert(textolista[i])
      document.getElementById("feito").innerHTML += "🦒"+" ";
      
    }
    else if(textolista[i] == "bufalo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐃"+" ";
      
    }
    else if(textolista[i] == "vaca"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐄"+" ";
      
    }
    else if(textolista[i] == "carneiro"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐏"+" ";
      
    }
    else if(textolista[i] == "ovelha"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐑"+" ";
      
    }
    else if(textolista[i] == "bode"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐐"+" ";
      
    }
    else if(textolista[i] == "veado"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦌"+" ";
      
    }
    else if(textolista[i] == "peru"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦃"+" ";
      
    }
    else if(textolista[i] == "pomba"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🕊"+" ";
      
    }
    else if(textolista[i] == "esquilo"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐿"+" ";
      
    }
    else if(textolista[i] == "porco-espinho" ){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🦔"+" ";
      
    }
    else if(textolista[i] == "patas"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐾"+" ";
      
    }

    else if(textolista[i] == "dragão"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🐉"+" ";
      
    }

    else if(textolista[i] == "chama"){
      // alert(textolista[i]);
      document.getElementById("feito").innerHTML += "🔥"+" ";
      
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
    else if(textolista[i] == "mulher"){
      // alert(textolista[i]);
      if(textolista[i+1]=="braço"){
        if(textolista[i+2]=="levantado"){
          document.getElementById("feito").innerHTML += "🙋‍♀️"+" ";
          textolista.splice(i+1,i+2);
        }
        else if(textolista[i+2]=="cruzado"){
          document.getElementById("feito").innerHTML += "🙅‍♀️"+" ";
          textolista.splice(i+1,i+2);
        }
      }
      else if(textolista[i+1]=="mão"){
        
        if(textolista[i+2]=="levantada"){
          document.getElementById("feito").innerHTML += "🤷‍♀️"+" ";
          textolista.splice(i+1,i+2);
        }
        else if(textolista[i+2]=="cara"){
          document.getElementById("feito").innerHTML += "🤦‍♀️"+" ";
          textolista.splice(i+1,i+2);
        }
      }
      else{
        document.getElementById("feito").innerHTML += "🙎‍♀️"+" ";
      }
    }
    else if(textolista[i]=="polegar" && textolista[i+1]=="cima"){
      document.getElementById("feito").innerHTML += "👍"+" ";
        textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="polegar" && textolista[i+1]=="baixo"){
      document.getElementById("feito").innerHTML += "👎"+" ";
        textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="soco" ){
      document.getElementById("feito").innerHTML += "👊"+" ";
    }
    else if(textolista[i]=="punho" && textolista[i+1]=="levantado"){
      document.getElementById("feito").innerHTML += "✊"+" ";
      textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="dedos" && textolista[i+1]=="cruzados"){
      document.getElementById("feito").innerHTML += "🤞"+" ";
      textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="mão" && textolista[i+1]=="v"){
      document.getElementById("feito").innerHTML += "✌️"+" ";
      textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="saudação" && textolista[i+1]=="rock"){
      document.getElementById("feito").innerHTML += "🤘"+" ";
      textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="mão" && textolista[i+1]=="ok"){
      document.getElementById("feito").innerHTML += "👌"+" ";
      textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="apontar" ){
      document.getElementById("feito").innerHTML += "👈"+" ";
    }

    else if(textolista[i]=="mão" && textolista[i+1]=="levantada"){
      document.getElementById("feito").innerHTML += "✋"+" ";
      textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="mão" && textolista[i+1]=="aberta"){
      document.getElementById("feito").innerHTML += "🖐"+" ";
      textolista.splice(i+1,i+1);
    }

    else if(textolista[i]=="saudação" && textolista[i+1]=="vulcana"){
      document.getElementById("feito").innerHTML += "🖖"+" ";
      textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="me" && textolista[i+1]=="liga"){
      document.getElementById("feito").innerHTML += "🤙"+" ";
      textolista.splice(i+1,i+1);
    }
    else if(textolista[i]=="biceps" ){
      document.getElementById("feito").innerHTML += "💪"+" ";
    }
    else if(textolista[i]=="pé" ){
      document.getElementById("feito").innerHTML += "🦶"+" ";
    }
    else if(textolista[i]=="dedo" && textolista[i+1]== "do"&& textolista[i+2]=="meio"){
      document.getElementById("feito").innerHTML += "🖕"+" ";
      textolista.splice(i+1,i+2);
    }
    else if(textolista[i]=="rezar" ){
      document.getElementById("feito").innerHTML += "🙏"+" ";
    }
    else if(textolista[i]=="anel" ){
      document.getElementById("feito").innerHTML += "💍"+" ";
    }
    else if(textolista[i]=="batom" ){
      document.getElementById("feito").innerHTML += "💄"+" ";
    }
    else if(textolista[i]=="labios" ){
      document.getElementById("feito").innerHTML += "💋"+" ";
    }
    else if(textolista[i]=="lingua" ){
      document.getElementById("feito").innerHTML += "👅"+" ";
    }
    else if(textolista[i]=="orelha" ){
      document.getElementById("feito").innerHTML += "👂"+" ";
    }
    else if(textolista[i]=="nariz" ){
      document.getElementById("feito").innerHTML += "👃"+" ";
    }
    else if(textolista[i]=="pés" ){
      document.getElementById("feito").innerHTML += "👣"+" ";
    }
    else if(textolista[i]=="olho" ){
      document.getElementById("feito").innerHTML += "👁"+" ";
    }
    else if(textolista[i]=="olhos" ){
      document.getElementById("feito").innerHTML += "👀"+" ";
    }
    else if(textolista[i]=="cerebro" ){
      document.getElementById("feito").innerHTML += "🧠"+" ";
    }
    else if(textolista[i]=="osso" ){
      document.getElementById("feito").innerHTML += "🦴"+" ";
    }
    else if(textolista[i]=="dente" ){
      document.getElementById("feito").innerHTML += "🦷"+" ";
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
  document.getElementById("errorbox-2").style.display = "block";
  document.getElementById("feito").innerHTML = '';
}

function navbar() {
  var x = document.getElementById("mynav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}