// >= Preguntamos que seguto quiere cotizar
let pregunta = prompt("¡Hola! ¿te gustaria cotizar un seguro de Celular?");

if (pregunta = si) {
    console.log("Tenemos un seguro de $10.000 que sale $800 mensuales ¿te interesa?")
} else if (pregunta = si){
    console.log("Perfecto, ya tienes tu seguro!")
}

//Creacion de un objeto

// let celular = "Modelo del celular"
// let valorCelular = "valor del celular"

let producto = {
	modelo: "Samsung J7",
	valorCelular: 27500,

	mostrarInfo: function () {
		// console.log(this)
		console.log(`Este producto es: ${this.modelo} y tiene un precio de $${this.valorCelular}`);
	}
}