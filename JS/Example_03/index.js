// ARREGLOS PROPIEDADES Y METODOS
/*
Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos 
para efectuar operaciones de recorrido y de mutación. 
Tanto la longitud como el tipo de los elementos de un array son variables. 
Dado que la longitud de un array puede cambiar en cualquier momento, 
y los datos se pueden almacenar en ubicaciones no contiguas, 
no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos.
*/
let frutas = ["Manzana", "Banana"] //Crear Arreglo
console.log(frutas.length) //Tamaño del Arreglo

// Acceder a un elemento de Array mediante su índice
let primero = frutas[0] // Manzana
let ultimo = frutas[frutas.length - 1] // Banana

let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
let ultimo = frutas.pop() // Elimina "Naranja" del final
let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio
let primero = frutas.shift() // Elimina "Fresa" del inicio

/*
Eliminar varios elementos a partir de una posición
Con .splice() no solo se puede eliminar elementos del array, 
si no que también podemos extraerlos guardándolo en un nuevo array. 
¡Ojo! que al hacer esto estaríamos modificando el array de origen.
*/
let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
console.log(vegetales)
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]
let pos = 1, numElementos = 2
let elementosEliminados = vegetales.splice(pos, numElementos)
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"
console.log(vegetales)
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales" 

// Copiar arreglos
let copiaArray = vegetales.slice();// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

/*
METODOS DE INSTANCIA

Array.prototype.concat()
Devuelve un nuevo array que es la concatenación de aquél sobre el que se invoca, 
seguido de otros array(s) o valor(es).

Array.prototype.copyWithin()
Copia una secuencia de elementos de un array dentro del propio array.

Array.prototype.entries()
Devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice del array.

Array.prototype.every()
Devuelve true si todos los elementos del array cumplen el predicado que recibe como parámetro.

Array.prototype.fill()
Asigna un valor estático a todos los elementos del array entre las posiciones inicio y fin.

Array.prototype.filter()
Devuelve un nuevo array que contiene todos los elementos de aquél para el cual se llama 
que cumplan el predicado que se le pasa como parámetro.

Array.prototype.find()
Devuelve el primer elemento del array que cumpla el predicado que se pasa como parámetro, 
o undefined si ninguno lo cumple.

Array.prototype.findIndex()
Devuelve el índice del primer elemento del array que cumpla el predicado que se pasa como parámetro, 
o -1 si nunguno lo cumple.

Array.prototype.forEach()
Llama a la función pasada como parámetro para todos los elementos del array.

Array.prototype.includes()
Determina si el array contiene el valorBuscado y devuelve true o false según sea el caso.

Array.prototype.indexOf()
Devuelve el índice del primer elemento del array que sea igual a elementoBuscado, o -1 si no existe.

Array.prototype.join()
Concatena en un string todos los elementos de un array.

Array.prototype.keys()
Devuelve un nuevo Array Iterator que contiene las claves de cada índice del array.

Array.prototype.lastIndexOf()
Devuelve el índice del último elemento del array que sea igual a elementoBuscado, o -1 si no existe.

Array.prototype.map()
Devuelve un nuevo array que contiene el resultado de llamar a la función pasada como parámetro 
a todos los elementos del array sobre el que se invoca.

Array.prototype.pop()
Elimina el último elemento de un array, y devuelve dicho elemento.

Array.prototype.push()
Añade uno o más elementos al final de un array y devuelve el nuevo valor de su propiedad length.

Array.prototype.reduce()
Aplica la función pasada como parámetro a un acumulador y a cada valor del array, 
que se recorre de izquierda a derecha, para reducirlo a un único valor.

Array.prototype.reduceRight()
Aplica la función pasada como parámetro a un acumulador y a cada valor del array, 
que se recorre de derecha a izquierda, para reducirlo a un único valor.

Array.prototype.reverse()
Invierte el orden de los elementos de un array (el primero pasa a ser el último y 
    el último a ser el primero) en el propio array. Este método modifica el array.

Array.prototype.shift()
Elimina el primer elemento de un array, y devuelve dicho elemento.

Array.prototype.slice()
Extrae una porción del array sobre el que se llama y devuelve un nuevo array.

Array.prototype.some()
Devuelve true si al menos un elemento del array cumple con el predicado que se pasa como parámetro.

Array.prototype.sort()
Ordena los elementos de un array, modificando éste, y devuelve el array ordenado.

Array.prototype.splice()
Añade, borra o modifica elementos de un array.

Array.prototype.toLocaleString()
Devuelve un string adaptado a la configuración regional que representa el array y sus elementos. 
Redefine el método Object.prototype.toLocaleString().

Array.prototype.toString()
Devuelve un string que representa el array y sus elementos. Redefine el método Object.prototype.toString().

Array.prototype.unshift()
Añada uno o más elementos al inicio de un array y devuelve el nuevo valor de length para el array resultante.

Array.prototype.values()
Devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.

Array.prototype[@@iterator]()
Devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.
*/
