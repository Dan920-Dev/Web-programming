/* FUNCIONES */

/* 
Una definición de función (también denominada declaración de función o expresión de función) 
consta de la palabra clave function, seguida de:
1. El nombre de la función.
2. Una lista de parámetros de la función, entre paréntesis y separados por comas.
3. Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }. 
*/
function square(number) {
  return number * number;
}

/*
Esta función puede ser anónima; no tiene por qué tener un nombre. Por ejemplo,
la función square se podría haber definido como
*/
const square = function(number) { return number * number }

/*
Sin embargo, puedes proporcionar un nombre con una expresión function. 
Proporcionar un nombre permite que la función se refiera a sí misma y también facilita la identificación 
de la función en el seguimiento de la pila de un depurador
*/
const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
console.log(factorial(3))
/*
 FUNCIONES ANIDADAS
Solo se puede acceder a la función interna desde declaraciones en la función externa.
La función interna forma un cierre: la función interna puede usar los argumentos y 
variables de la función externa, mientras que la función externa no puede usar los argumentos y 
variables de la función interna.
*/
function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }