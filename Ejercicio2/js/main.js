function Ejercicio2(){
    var menu = document.getElementById("menu");
    
    //Se crea el elemento ul y se añade como hijo a menu que es el nav
    var ul = document.createElement("ul");
    menu.appendChild(ul);
    //Se crea el elemento li, se le añade como hijo al ul creado anteriormente
    var opcion1 = document.createElement("li");
    ul.appendChild(opcion1);
    //Se crea el elemento a de la primera opcion
    var enlace1 = document.createElement("a");
    enlace1.setAttribute("href","#");
    enlace1.appendChild(document.createTextNode("Home"));
    opcion1.appendChild(enlace1);

    //Se crea el elemento li, se le añade como hijo al ul creado anteriormente
    var opcion2 = document.createElement("li");
    opcion2.setAttribute("class","dropdown");
    ul.appendChild(opcion2);
    //Se crea el elemento a de la segunda opcion
    var enlace2 = document.createElement("a");
    enlace2.setAttribute("class","dropbtn");
    enlace2.setAttribute("href","#");
    enlace2.appendChild(document.createTextNode("Menus +"));
    opcion2.appendChild(enlace2);
    //Se crea un div para el submenu y se le pone de hijo de la opcion2
    var submenu = document.createElement("div");
    submenu.setAttribute("class","dropdown-content");
    opcion2.appendChild(submenu);
    var subEnlace1 = document.createElement("a");
    subEnlace1.setAttribute("href","#");
    subEnlace1.appendChild(document.createTextNode("Menu 1"));
    submenu.appendChild(subEnlace1);
    var subEnlace2 = document.createElement("a");
    subEnlace2.setAttribute("href","#");
    subEnlace2.appendChild(document.createTextNode("Menu 2"));
    submenu.appendChild(subEnlace2);

    //Se crea el elemento li, se le añade como hijo al ul creado anteriormente
    var opcion3 = document.createElement("li");
    ul.appendChild(opcion3);
    //Se crea el elemento a de la tercera opcion
    var enlace3 = document.createElement("a");
    enlace3.setAttribute("href","#");
    enlace3.appendChild(document.createTextNode("Settings"));
    opcion3.appendChild(enlace3);

    //Se crea el elemento li, se le añade como hijo al ul creado anteriormente
    var opcion4 = document.createElement("li");
    ul.appendChild(opcion4);
    //Se crea el elemento a de la cuarta opcion
    var enlace4 = document.createElement("a");
    enlace4.setAttribute("href","#");
    enlace4.appendChild(document.createTextNode("Contact"));
    opcion4.appendChild(enlace4);
    
}//Fin de la funcion

window.onload = Ejercicio2;