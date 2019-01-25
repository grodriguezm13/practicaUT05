//Funcion que inicializa todos los objetos y la relacion entre ellos
function initPopulate(){
	
	/* INICIO DE LA CREACION DE OBJETOS */ 
	//Se crean los objetos person
	try {
		var persona = new Person("Guillermo","Rodriguez",new Date(1993,09,25),"Moraga");
		var persona1 = new Person("Barry","Allen",new Date(1993,05,15));
		var persona2 = new Person("Marco","Mendez",new Date(1993,10,25),"Moraga","c://imagenes/usuario213123.jpg");
		var persona3 = new Person("Ramon","Diaz",new Date(1945,01,25));
		var persona4 = new Person("Manolo","Leon",new Date(1997,01,25));
	} catch (error) {
		console.log("" + error);
	}
    //Se crean los objetos category
	try {
		var category = new Category("Comedia","Los JAJAS");
		var category1 = new Category("Romance","Las pasteladas");
		var category2 = new Category("Terror", "Sustos y mas sustos");
		var category3 = new Category("Accion","Explosiones y tios duros");
	} catch (error) {
		console.log("" + error);
	}
    //Se crean objetos resource
	try {
		var resource = new Resource(180,"http://www.guiromo.es/resource",["Español","Ingles"],["Chino","Japones"]);
		var resource1 = new Resource(120,"http://www.guiromo.es/resource1");
		var resource2 = new Resource(23,"http://www.guiromo.es/resource2",["Español","Ingles"],["Ruso","Ingles"]);
	} catch (error) {
		console.log("" + error);
	}
    //Se crea un objeto Coordinate
	try {
		var coor = new Coordinate(123,124);
	} catch (error) {
		console.log("" + error);
	}
    //Se crean objetos Movie
    try {
		var movie = new Movie("Vengadores",new Date(2012,05,05),"Americana","Superheroes y explosiones",null,resource,coor);
		var movie1 = new Movie("Aterriza como puedas",new Date(1980,05,05),"Americana","Se complica la cosa cuando van en avion",null,resource1,coor);
		var movie2 = new Movie("Las aventuras de Rita",new Date(1999,12,05),"Rusa","La vida no siempre puede ir bien",null,resource2);
    } catch (error) {
        console.log("" + error);
	}
	//Se crean objetos User
	try {
		var user = new User("pepe","pepe@yo.com","pepe");
		var user1 = new User("ramon","ramon@yo.com","milady");
		var user2 = new User("guillermo","guillermo@yo.com","guillermo");
	} catch (error) {
		console.log("" + error);
	}
	//Se crean los objetos Season
	try {
		var season = new Season("Temporada 1",["Episodio 1","Episodio 2"]);
		var season1 = new Season("Temporada 2",["Episodio 1","Episodio 2"]);
		var season2 = new Season("Temporada 3",["Episodio 1","Episodio 2"]);
	} catch (error) {
		console.log("" + error);
	}
	//Se crean los objetos Serie
	try {
		var serie = new Serie("El Mago Invisible visible","Francesa",new Date(2010,05,05),"Un mago se cree invisible pero no lo es","http://www.guiromo.es/resource6",[season,season1]);
		var serie1 = new Serie("Juego de Gnomos","Americana",new Date(2016,05,05),"Movidas raras","http://www.guiromo.es/resource21",[season,season1,season2]);
	} catch (error) {
		console.log("" + error);
	}

	/* FIN DE LA CREACION DE OBJETOS */
	/* INICIO DE LAS RELACIONES MEDIANTE LAS FUNCIONES DE VIDEOSYSTEM */

	//Se crea el objeto VideoSystem y se le añade el nombre 
	try {
		var video = VideoSystem.getInstance();
		video.name = "GUIROMO CHANNEL";
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos las categorias 
	try {
		video.addCategory(category);
		video.addCategory(category1);
		video.addCategory(category2);
		video.addCategory(category3);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos los usuarios
	try {
		video.addUser(user);
		video.addUser(user1);
		video.addUser(user2);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos las producciones
	try {
		video.addProduction(movie);
		video.addProduction(movie1);
		video.addProduction(movie2);
		video.addProduction(serie);
		video.addProduction(serie1);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos los actores
	try {
		video.addActor(persona);
		video.addActor(persona1);
		video.addActor(persona4);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos un director
	try {
		video.addDirector(persona2);
		video.addDirector(persona3);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a una categoria
	try {
		video.assignCategory(category3,movie);
		video.assignCategory(category2,movie);
		video.assignCategory(category,movie1);
		video.assignCategory(category,movie2);
		video.assignCategory(category2,serie);
		video.assignCategory(category2,serie1);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a un director
	try {	
		video.assignDirector(persona3,movie1);
		video.assignDirector(persona3,movie);
		video.assignDirector(persona3,movie2);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a un actorr
	try {	
		video.assignActor(persona,movie1,"Ciudadano",false);
		video.assignActor(persona,movie,"Hulk",true);
		video.assignActor(persona,movie2,"Nemesio",true);
		video.assignActor(persona4,movie,"Extra",false);	
	} catch (error) {
		console.log("" + error);
	}

}//Fin de initPopulate

//Carga las tarjetas de la pagina de inicio con las categorias
function showHomePage(){
	//Selecciona el titulo central y le cambia el nombre
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.innerHTML = "Categorias del sistema";
	//Selecciona la zona central donde van las tarjetas de las categorias
	var tarjetas = document.getElementById("tarjetasZona");
	//Con un iterador recorremos todas las categorias del sistema
	//Y creamos el menu lateral mientras haya categorias
	//Al ser singleton e llama al mismo objeto
	video = VideoSystem.getInstance();
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		//Crea las card de la zona central
		var tarjeta = document.createElement("div");
		tarjeta.setAttribute("class","col-lg-4 col-md-6 mb-4");
		var borde = document.createElement("div");
		borde.setAttribute("class","card h-100");
		var cuerpo = document.createElement("div");
		cuerpo.setAttribute("class","card-body");
		var imagen = document.createElement("img");
		imagen.setAttribute("class","card-img-top");
		imagen.setAttribute("value",categoria.value.name);
		/* ESTA LINEA CAMBIA EL ENLACE DE LA FOTO DE LAS TARJETAS*/ 
		imagen.setAttribute("src","img/"+categoria.value.name+".jpg");
		imagen.setAttribute("alt",categoria.value.name);
		var buttonTitle = document.createElement("button");
		//id que sirve para recoger la categoria pulsada en el evento
		buttonTitle.setAttribute("id","botonCategoria");
		buttonTitle.setAttribute("type","button");
		buttonTitle.setAttribute("value",categoria.value.name);
		buttonTitle.setAttribute("class","btn btn-link");
		buttonTitle.appendChild(document.createTextNode(categoria.value.name));	
		var descripCategory = document.createElement("p");
		descripCategory.setAttribute("class","card-text");
		/* ESTA LINEA CAMBIA LA DESCRIPCION DE LAS TARJETAS */ 
		descripCategory.appendChild(document.createTextNode(categoria.value.description));
		var valoracion = document.createElement("div");
		valoracion.setAttribute("class","card-footer");
		var estrellas = document.createElement("small");
		estrellas.setAttribute("class","text-muted");
		/* ESTA LINEA CAMBIA LAS ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS (PROXIMA VERSION)?*/ 
		estrellas.appendChild(document.createTextNode('Valoracion'));
		
		//Se crea la estructura de las tarjetas con appendChild
		tarjetas.appendChild(tarjeta);
		tarjeta.appendChild(borde);
		borde.appendChild(cuerpo);
		cuerpo.appendChild(imagen);
		cuerpo.appendChild(buttonTitle);
		cuerpo.appendChild(descripCategory);
		cuerpo.appendChild(valoracion);
		valoracion.appendChild(estrellas);
	
		//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
		buttonTitle.addEventListener("click", showProductions);
		imagen.addEventListener("click", showProductions);
		imagen.style.cursor = "pointer";

        //Pasa a la siguiente categoria
		categoria = categorias.next();
	}//FIn del while iterador

}//Fin de categoriesMenuPopulate

//Carga el menu lateral con las categorias
function categoriesMenuPopulate(){
	//Selecciona el menu lateral donde van a ir las categorias del sistema
	var menu = document.getElementById("columnaCategorias").getElementsByClassName("list-group")[0];

	//Con un iterador recorremos todas las categorias del sistema
	//Y creamos el menu lateral mientras haya categorias
	//Al ser singleton e llama al mismo objeto
	video = VideoSystem.getInstance();
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		//Crea las opciones del menu lateral
		var enlace = document.createElement("button");
		enlace.setAttribute("class","list-group-item btn btn-link");
		enlace.setAttribute("value",categoria.value.name);
		enlace.appendChild(document.createTextNode(categoria.value.name));
		enlace.addEventListener("click", showProductions);
		menu.appendChild(enlace);
		
        //Pasa a la siguiente categoria
		categoria = categorias.next();
	}//FIn del while iterador

}//Fin de showHomePage

//Muestra un listado con los actores del sistema.
function showActors(){

}

//Muestra un listado con los actores del sistema.
function showDirectors(){

} 

//Dado un actor muestra toda su información relacionada, incluida sus producciones.
function showActor(){

} 

//Dado un director, muestra toda su información relacionada, incluida sus producciones
function showDirector(){

} 

//Dado una categoría, director o actor, muestra el listado de sus producciones.
function showProductions(){
	//Cambia el titulo de la pagina principal
	var tituloContenido = document.getElementById("tituloZona");
	//El valor this.value lo recoge del valor del boton que hayamos pulsado
	tituloContenido.innerHTML = this.value;
	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER LAS PRODUCCIONES DE UNA CATEGORIA
	var encontrado = false;
	video = VideoSystem.getInstance();
	var categorias = video.categories;
	var categoria = categorias.next();
	while ((categoria.done !== true) && (!encontrado)){
		if (categoria.value.name == this.value) {
			//Si coincide nombre de la categoria con el valor del boton
			//Comienza el iterador de las producciones de esa categoria
			var productions = video.getProductionsCategory(categoria.value);
			var production = productions.next();
			while (production.done !== true){

				//Crea las tarjetas de las producciones en la zona central
				var tarjeta = document.createElement("div");
				tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
				var borde = document.createElement("div");
				borde.setAttribute("class","card h-100");
				var cuerpo = document.createElement("div");
				cuerpo.setAttribute("class","card-body");
				var imagen = document.createElement("img");
				imagen.setAttribute("class","card-img");
				var tipo = document.createElement("span");
				tipo.setAttribute("class","card-text");
				if(production.value instanceof Movie){
					tipo.appendChild(document.createTextNode("Pelicula"));
				}else{
					tipo.appendChild(document.createTextNode("Serie"));
				}
				imagen.setAttribute("width","750");
				imagen.setAttribute("heigh","200");
				imagen.setAttribute("value",production.value.title);
				/* ESTA LINEA CAMBIA EL ENLACE DE LA FOTO DE LAS TARJETAS*/ 
				//imagen.setAttribute("src","img/"+production.value.title+".jpg");
				imagen.setAttribute("src","img/Portada.jpg");
				imagen.setAttribute("alt",production.value.title);
				var buttonTitle = document.createElement("button");
				//id que sirve para recoger la produccion pulsada en el evento
				buttonTitle.setAttribute("id","botonProduccion");
				buttonTitle.setAttribute("type","button");
				buttonTitle.setAttribute("value",production.value.title);
				buttonTitle.setAttribute("class","btn btn-link btn-lg btn-block");
				buttonTitle.appendChild(document.createTextNode(production.value.title));	
				var descripProduction = document.createElement("p");
				descripProduction.setAttribute("class","card-text");
				/* ESTA LINEA CAMBIA LA DESCRIPCION DE LAS TARJETAS */ 
				descripProduction.appendChild(document.createTextNode(production.value.synopsis));
				var valoracion = document.createElement("div");
				valoracion.setAttribute("class","card-footer");
				var estrellas = document.createElement("small");
				estrellas.setAttribute("class","text-muted");
				/* ESTA LINEA CAMBIA LAS ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS (PROXIMA VERSION)?*/ 
				estrellas.appendChild(document.createTextNode('Valoracion'));
				
				//Se crea la estructura de las tarjetas con appendChild
				contenido.appendChild(tarjeta);
				tarjeta.appendChild(borde);
				borde.appendChild(cuerpo);
				cuerpo.appendChild(imagen);
				cuerpo.appendChild(tipo);
				cuerpo.appendChild(buttonTitle);
				cuerpo.appendChild(descripProduction);
				cuerpo.appendChild(valoracion);
				valoracion.appendChild(estrellas);
			
				//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
				buttonTitle.addEventListener("click", showProductions);
				imagen.addEventListener("click", showProductions);
				imagen.style.cursor = "pointer";	

				production = productions.next();
			}//fin del while iterador
			//Variable para salir del bucle principal si encuentra la categoria
			encontrado = true;
		}//Fni del if que compara el nombre de la categoria con el valor del boton
        //Pasa a la siguiente categoria
		categoria = categorias.next();
	}//FIn del while iterador

	


}//Fin de showProductions

//Muestra la información de una producción, incluida su director y sus actores participantes.
function showProduction(){

}

//Muestra los recursos relacionados con una producción.
function showResource(){

} 

//Funcion que llama a todas las funciones que necesita el sistema
function init(){
	initPopulate();
	showHomePage();
	categoriesMenuPopulate();
}

window.onload = init;