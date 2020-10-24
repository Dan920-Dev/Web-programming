// OBJETOS

/*
donde obj es el nombre del nuevo objeto, cada property_i es un identificador 
(ya sea un nombre, un número o una cadena literal), 
y cada value_i es una expresión cuyo valor se asigna a la property_i. 
El obj y la asignación es opcional; si no necesitas hacer referencia a este objeto desde otro lugar, 
no necesitas asignarlo a una variable.
*/
var obj = {
  property_1: value_1, // property_# puede ser un identificador...
  2: value_2, // o un número...
  "property n": value_n // o una cadena
}; 

/*
El siguiente ejemplo crea myHonda con tres propiedades. 
Observa que la propiedad engine también es un objeto con sus propias propiedades.
*/
var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};

/*
Eliminar Propiedades
Puedes eliminar una propiedad no heredada mediante el operador delete. 
El siguiente código muestra cómo eliminar una propiedad.
*/
//Crea un nuevo objeto, myobj, con dos propiedades, a y b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;
// Elimina la propiedad a, dejando a myobj solo con la propiedad b.
delete myobj.a;
console.log ('a' in myobj); // muestra: "false"

/*
Como sabemos los objetos son de tipo referencia en JavaScript. 
Dos distintos objetos nunca son iguales, incluso aunque tengan las mismas propiedades. 
Solo comparar la misma referencia de objeto consigo misma arroja verdadero.
*/

// Dos variables, dos distintos objetos con las mismas propiedades
var fruit = { name: 'apple' };
var fruitbear = { name: 'apple' };
fruit == fruitbear; // devuelve false
fruit === fruitbear; // devuelve false

// Dos variables, un solo objeto
var fruit = { name: 'apple' };
var fruitbear = fruit; // Asigna la referencia del objeto fruit a fruitbear
// Aquí fruit y fruitbear apuntan al mismo objeto
fruit == fruitbear; // devuelve true
fruit === fruitbear; // devuelve true
fruit.name = 'grape';
console.log(fruitbear); // Produce: { name: "grape" }, en lugar de { name: "apple" }

