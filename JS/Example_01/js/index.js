// HOLA SOY UN COMENTARIO
/* HOLA SOY UN COMENTARIO */
/*-----------------------------------------------------------------------------------------------------------------*/
// Variables  y formas correctas de ser delcaradas 
var a = 1; var $b = 5; var b = 5; var _c; 
let d; const e = 0;
// var 1a; esta mal declarado ya qu empieza por un numero

/*-----------------------------------------------------*/

// Tipos de variables
var iva = 16;        // variable tipo entero
var total = 234.65;  // variable tipo decimal

/*-----------------------------------------------------*/

var mensaje = "Bienvenido a nuestro sitio web"; // cadena de texto
var nombreProducto = 'Producto ABC'; // cadena de texto
var letraSeleccionada = 'c'; // cadena de texto

/* El contenido de texto1 tiene comillas simples, por lo que
se encierra con comillas dobles */
var texto1 = "Una frase con 'comillas simples' dentro";

/* El contenido de texto2 tiene comillas dobles, por lo que
se encierra con comillas simples */
var texto2 = 'Una frase con "comillas dobles" dentro';

/*-----------------------------------------------------*/

// Booleanos
/* Una variable de tipo boolean almacena un tipo especial de valor 
que solamente puede tomar dos valores: true (verdadero) o false (falso). */
var clienteRegistrado = false;
var ivaIncluido = true;

/*-----------------------------------------------------*/

// Arrays
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; // Arreglo
var diaSeleccionado = dias[0];    // diaSeleccionado = "Lunes"
var otroDia = dias[5];            // otroDia = "Sábado"

/*-----------------------------------------------------------------------------------------------------------------*/

// Estructuras de control de flujo
// IF
if (a < b) {
    console.log(a + ' es menor que ' + b)
  } else {
    console.log(a + ' es mayor que ' + b)
  }

/*-----------------------------------------------------*/

// IF encadenados
var edad = 17;
if(edad < 12) {
    alert("Todavía eres muy pequeño");
  }
  else if(edad < 19) {
    alert("Eres un adolescente");
  }
  else if(edad < 35) {
    alert("Aun sigues siendo joven");
  }
  else {
    alert("Piensa en cuidarte un poco más");
  }

/*-----------------------------------------------------*/

// Operador Ternario
// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);
/*-----------------------------------------------------*/

// Switch

var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");
switch (nota) {
  case 10:
    calificacion = "Insuficiente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacion = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacion);

/*-----------------------------------------------------*/

// FOR
/* La idea del funcionamiento de un bucle for es la siguiente: "mientras la condición indicada se siga cumpliendo,
 repite la ejecución de las instrucciones definidas dentro del for.
*/
var mensaje = "Hola, estoy dentro de un bucle";

for(var i = 0; i < 5; i++) {
  alert(mensaje);
}

/*-----------------------------------------------------------------------------------------------------------------*/



