var div = document.getElementById("ejercicios");
recorrer(document);

function recorrer(nodo){ 
    var nodos = nodo.childNodes; 
    for (var i = 0; i < nodos.length; i++){
        if(!nodos[i]){ 
            continue; 
        } 
        if(nodos[i].childNodes.length > 0){ 
            div.innerHTML += nodos[i].nodeName + "<br>";
            recorrer(nodos[i]); 
        } 
    }
}   