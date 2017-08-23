cuerpo = document.getElementById("cuerpo");

var xhReq = new XMLHttpRequest();

var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
    	//Llamamos la función de FastClick para todos los elementos que esten en el body
    	FastClick.attach(document.body);
    	//Mostramos el contenido de la primera opcion del menu inferior
    	cuerpo.style.backgroundColor = "#2ed877";
    	xhReq.open("GET", "opciones/opcion1.html", false);
		xhReq.send(null);
		cuerpo.innerHTML=xhReq.responseText;
    },
 
};

function menu(opcion){
		//Cambiamos el fondo de la capa cuerpo según la opción seleccionada	
		if(opcion=="opcion1") cuerpo.style.backgroundColor = "#2ed877";
		if(opcion=="opcion2") cuerpo.style.backgroundColor = "#3398dc";
		if(opcion=="opcion3") cuerpo.style.backgroundColor = "#f4c601";
		if(opcion=="opcion4") cuerpo.style.backgroundColor = "#fa5039";
		//Mostramos el contenido de la opcion seleccionada del menu inferior
		xhReq.open("GET", "opciones/"+opcion+".html", false);
		xhReq.send(null);
		cuerpo.innerHTML=xhReq.responseText;
}