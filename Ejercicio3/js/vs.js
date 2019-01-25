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
		var persona5 = new Person("Robert","Downey",new Date(1964,09,25),"Jr.");
		var persona6 = new Person("Mark","Rufallo",new Date(1993,09,25));
		var persona7 = new Person("Emma","Frost",new Date(1963,09,25));
		var persona8 = new Person("Jonah","Jameson",new Date(1943,09,25),"J");
	} catch (error) {
		console.log("" + error);
	}
    //Se crean los objetos category
	try {
		var category = new Category("Comedia" , "Películas realizadas con la intención de provocar humor, entretenimiento y/o risa en el espectador.");
		var category1 = new Category("Romance" , "Un desarrollo romántico o amoroso entre dos personas.");
		var category2 = new Category("Terror" , "Realizadas con la intención de provocar tensión, miedo y/o el sobresalto en la audiencia.");
		var category3 = new Category("Acción" , "El argumento implica una interacción moral entre el «bien» y el «mal» llevada a su fin por la violencia o la fuerza física");
		var category4 = new Category("Ciencia Ficción","Se basa en un futuro cercano o muy lejano, donde se logra ver el avance de la tecnología y como ejecuta este en la historia");
		var category5 = new Category("Drama", "Se centran principalmente en el desarrollo de un conflicto entre los protagonistas, o del protagonista con su entorno o consigo mismo");
		var category6 = new Category("Fantasía" , "La inexistencia de la tecnología nos da a entender que sucede en un tiempo pasado. La magia y animales mitológicos o sucesos sin una explicación lógica forman parte de este mundo");
		var category7 = new Category("Musical" , "Contienen interrupciones en su desarrollo, para dar un breve receso por medio de un fragmento musical cantado o acompañados de una coreografía.");
		var category8 = new Category("Serie B" , "Así era llamado el cine de baja de la producción realizada entre los años 1930 y 1960, cuando el público podía ver dos o tres películas por un mismo boleto");
		var category9 = new Category("Animacion" , "Se caracteriza por no recurrir a la técnica del rodaje de imágenes reales sino a una o más técnicas de animación");
	} catch (error) {
		console.log("" + error);
	}
    //Se crean objetos resource
	try {
		var resource = new Resource(180,"http://www.guiromo.es/resource",["Español","Ingles"],["Chino","Japones"]);
		var resource1 = new Resource(120,"http://www.guiromo.es/resource1");
		var resource2 = new Resource(25,"http://www.guiromo.es/resource2",["Español","Ingles"],["Ruso","Ingles"]);
		var resource3 = new Resource(50,"http://www.guiromo.es/resource3",["Español","Ingles"],["Aleman","Ingles"]);
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
		var movie3 = new Movie("Los cazafantasmas",new Date(1999,12,05),"Americana","Unos cazafantasmas están en su mero apogeo, al tratar de evitar que un demonio haga contacto con la Tierra.",null,resource2);
		var movie4 = new Movie("Mental",new Date(2016,12,05),"Española","El Doctor Ruiz tendrá que averiguar quien ha sido el asesino del crimen cometido en el psiquiátrico",null,resource2);
		var movie5 = new Movie("Sharknado",new Date(2004,12,05),"Americana","Un huracan de tiburones acecha a la tierra",null,resource2);
		var movie6 = new Movie("LaLaLand",new Date(2017,12,05),"Americana","Sebastian, un pianista de jazz, y Mia, una aspirante a actriz, se enamoran locamente; pero la ambición desmedida que tienen por triunfar en sus respectivas carreras, en una ciudad como Los Ángeles, repleta de competencia y carente de piedad, pone en peligro su amor.",null,resource3);
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
		var serie2 = new Serie("The Flash","Americana",new Date(2014,05,05),"Barry Allen obtiene supervelocidad en una accidente, pero no es el unico","http://www.guiromo.es/resource21",[season,season1,season2]);
		var serie3 = new Serie("El bisonte","Rusa",new Date(2010,05,05),"Un bisonte con un don para el canto","http://www.guiromo.es/resource21",[season,season1,season2]);
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
		video.addCategory(category4);
		video.addCategory(category5);
		video.addCategory(category6);
		video.addCategory(category7);
		video.addCategory(category8);
		video.addCategory(category9);
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
		video.addProduction(movie3);
		video.addProduction(movie4);
		video.addProduction(movie5);
		video.addProduction(movie6);
		video.addProduction(serie);
		video.addProduction(serie1);
		video.addProduction(serie2);
		video.addProduction(serie3);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos los actores
	try {
		video.addActor(persona);
		video.addActor(persona1);
		video.addActor(persona4);
		video.addActor(persona5);
		video.addActor(persona7);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos un director
	try {
		video.addDirector(persona2);
		video.addDirector(persona3);
		video.addDirector(persona6);
		video.addDirector(persona8);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a una categoria
	try {
		video.assignCategory(category,movie);
		video.assignCategory(category,movie1);
		video.assignCategory(category,movie3);
		video.assignCategory(category1,movie6);
		video.assignCategory(category1,movie2);
		video.assignCategory(category1,serie1);
		video.assignCategory(category2,movie2);
		video.assignCategory(category2,movie4);
		video.assignCategory(category2,movie5);
		video.assignCategory(category3,movie);
		video.assignCategory(category3,movie3);
		video.assignCategory(category3,movie5);
		video.assignCategory(category4,serie1);
		video.assignCategory(category4,serie2);
		video.assignCategory(category4,movie5);
		video.assignCategory(category5,movie6);
		video.assignCategory(category5,movie4);
		video.assignCategory(category5,movie2);
		video.assignCategory(category6,serie1);
		video.assignCategory(category6,serie3);
		video.assignCategory(category7,movie6);
		video.assignCategory(category7,serie3);
		video.assignCategory(category8,movie5);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a un director
	try {
		video.assignDirector(persona2,movie);
		video.assignDirector(persona2,movie1);
		video.assignDirector(persona3,movie2);
		video.assignDirector(persona6,movie3);
		video.assignDirector(persona6,movie4);
		video.assignDirector(persona8,movie5);
		video.assignDirector(persona8,movie6);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a un actorr
	try {	
		video.assignActor(persona,movie,"Hulk",true);
		video.assignActor(persona,movie1,"Ciudadano",false);
		video.assignActor(persona,movie2,"Nemesio",true);
		video.assignActor(persona4,movie,"Extra",false);
		video.assignActor(persona4,movie3,"Ciudadano",false);
		video.assignActor(persona5,movie4,"Ciudadano",false);
		video.assignActor(persona5,movie5,"Ciudadano",false);
		video.assignActor(persona5,movie6,"Ciudadano",false);
		video.assignActor(persona7,movie5,"Ciudadano",false);
		video.assignActor(persona7,movie6,"Ciudadano",false);	
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

//Muestra un listado con los directores del sistema.
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
				buttonTitle.addEventListener("click", showProduction);
				imagen.addEventListener("click", showProduction);	

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
	//Cambia el titulo de la zona
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.remove(this);

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER LA PRODUCCION SELECCIONADA
	var encontrado = false;
	var producciones = video.productions;
	var produccion = producciones.next();
	while ((produccion.done !== true) && (!encontrado)){
		if (produccion.value.title == this.value) {
			//Si coincide nombre de la produccion con el valor del boton muestra la informacion
			//Crea las tarjetas de las producciones en la zona central
			var tarjeta = document.createElement("div");
			tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
			var borde = document.createElement("div");
			borde.setAttribute("class","card h-100");
			var cuerpo = document.createElement("div");
			cuerpo.setAttribute("class","card-body");
			var titulo = document.createElement("h5");
			titulo.setAttribute("class","card-title");
			titulo.appendChild(document.createTextNode(produccion.value.title));
			var imagen = document.createElement("img");
			imagen.setAttribute("class","card-img");
			imagen.setAttribute("width","750");
			imagen.setAttribute("heigh","200");
			/* ESTA LINEA CAMBIA EL ENLACE DE LA FOTO DE LAS TARJETAS*/ 
			//imagen.setAttribute("src","img/"+production.value.title+".jpg");
			imagen.setAttribute("src","img/Portada.jpg");
			imagen.setAttribute("alt",produccion.value.title);
			var nationality = document.createElement("p");
			nationality.setAttribute("class","card-text");
			/* ESTA LINEA CAMBIA LA NACIONALIDAD DE LA PRODUCCIO */ 
			nationality.appendChild(document.createTextNode("Nacionalidad: " + produccion.value.nationality));
			var publication = document.createElement("p");
			publication.setAttribute("class","card-text");
			/* ESTA LINEA CAMBIA LA FECHA DE LA PRODUCCIO */ 
			publication.appendChild(document.createTextNode("Fecha de publicacion: " + produccion.value.publication));
			var synopsis = document.createElement("p");
			synopsis.setAttribute("class","card-text");
			/* ESTA LINEA CAMBIA LA SIPNOSIS DE LA PRODUCCIO */ 
			synopsis.appendChild(document.createTextNode("Sipnosis: " + produccion.value.synopsis));
			//Si la produccion es una movie tendra unos parametros distintos a las series
			if(produccion.value instanceof Movie){
				//Si es distinto de null pone el recurso de la produccion
				if(produccion.value.resource != null){
					var resource = document.createElement("p");
					resource.setAttribute("class","card-text");
					/* ESTA LINEA CAMBIA LA SIPNOSIS DE LA PRODUCCIO */ 
					resource.appendChild(document.createTextNode("Recurso: " + produccion.value.resource));
				}
				//Si es distinto de null pone la localizacion de la produccion
				if(produccion.value.locations != null){
					var locations = document.createElement("p");
					locations.setAttribute("class","card-text");
					/* ESTA LINEA CAMBIA LA SIPNOSIS DE LA PRODUCCIO */ 
					locations.appendChild(document.createTextNode("Localizacion: " + produccion.value.locations));
				}
			}else{
				//Si es una serie y tiene temporadas las muestra
				if(produccion.value.seasons != null){
					var season = document.createElement("p");
					season.setAttribute("class","card-text");
					/* ESTA LINEA CAMBIA LA SIPNOSIS DE LA PRODUCCIO */ 
					season.appendChild(document.createTextNode("Temporadas: " + produccion.value.seasons));
				}
			}//Fin del if del instanceof
			
			//Se crea la estructura de las tarjetas con appendChild
			contenido.appendChild(tarjeta);
			tarjeta.appendChild(borde);
			borde.appendChild(cuerpo);
			cuerpo.appendChild(imagen);
			cuerpo.appendChild(titulo);		
			cuerpo.appendChild(nationality);
			cuerpo.appendChild(publication);
			cuerpo.appendChild(synopsis);
			if(produccion.value.resource != null){
				cuerpo.appendChild(resource);
			}
			if(produccion.value.locations != null){
				cuerpo.appendChild(locations);
			}
			//Para mostrar los actores de la produccion necesitamos otro iterador
			var elenco = video.getCast(produccion.value);
			var actor = elenco.next();
			while (actor.done !== true){
				var act = document.createElement("p");
				act.setAttribute("class","card-text");
				act.appendChild(document.createTextNode("Actor: " + actor.value.name + ". Papel: "+ actor.papel + ". Principal: " + actor.principal));
				cuerpo.appendChild(act);		
				actor = elenco.next();
			}
			
			encontrado = true;
		}//Fin del if
		//Pasa a la siguiente produccion
		produccion = producciones.next();
	}//Fin del while iterador

	
}//Fin de showProduction

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