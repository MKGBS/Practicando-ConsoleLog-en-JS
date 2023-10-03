/*0*/console.log("Probando JS"); 
//1 Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
//Comenta el código que muestra el cuadro de diálogo
alert('JavaScript funcionando correctamente');
//2 Crear variable tipo let de nombre variableSinValor y declarala sin asignarle ningún valor
let variableSinValor = "undefine";

//3 Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let boolean1 = "true";
let boolean2 = "false";

//4 Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14;

//5 Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = PI*2;
console.log(TAU);

//6 Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = "MKGBS";
console.log(miNombre);
// Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFav = "75"
console.log( miNumeroFav);
console.log(`Mí nombre es ${miNombre} y mí número favorito es el ${miNumeroFav}`);
// Crea una variable de tipo booleano
let bolean3 = "true";
console.log (bolean3);

//8 Muestra por consola la longitud de la variable miNombre
//  Muestra por consola el tipo de dato de la variable miNumeroFav

console.log(miNombre.length);
console.log(typeof miNumeroFav);

//9 Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
const miNombr = "Euralio";
const miNumerFav = "7";
console.log (`Mí nombre es ${miNombr} y mí número favorito es el ${miNumerFav}`);

//10 Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
const string1 = `Seré un crack en JavaScript al terminar el bootcamp`;
const mayusculas = string1.toLocaleUpperCase();
console.log(mayusculas);

//11 Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
let hi = 'Hola soy un crack';
console.log(hi.substring(0, 5));

//12 Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
let miStringFav = miNumeroFav.toString();
console.log(typeof miStringFav);

//13 Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado, guarda el template literal en otra variable y sacala por consola.
const telefon = 960000000;
const string2= `Mí número de teléfono es ${telefon}`;
console.log(string2);

//14 Muestra por consola la variable PI hasta los 2 primeros decimales
console.log(PI.toFixed(2));

// 2.Arrays
//15 Crear variable de nombre arrayVacio cuyo valor sea un array vacío
const arrayVacio = [];
console.log(arrayVacio);

//16 Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumeros);

//17 Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arrayNumeros2);

//18 Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0, 2, 4, 6, 8];
console.log(arrayNumerosPares);

//19 Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
console.log(arrayNumerosNeg);

//20 Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = ['Hola', 'Mundo'];
console.log(holaMundo);

//21 Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
console.log(loGuardoTodo);

//22 Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [[756, 'nombre'],[225, 'apellido'],[298, 'direccion'],];
console.log(arrayDeArrays);

//23 Muestra por consola la longitud del array “loGuardoTodo”
console.log(loGuardoTodo.length);

//24 Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola
loGuardoTodo.push('3D');
console.log(loGuardoTodo);

//25 Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo
console.log(loGuardoTodo[1]);

//26 Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola
loGuardoTodo.push('Euralio');
console.log(loGuardoTodo);

// 3.Objetos
//27 Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
const Coche = {marca: 'Seat', modelo: 'Leon', matrícula: '7171FR'};
console.log(Coche);

//28 Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores
const Casa = {codPostal: 46018, calle: 'Churat', portal: 2, piso: 0};
console.log(Casa);

//29 Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)
const FullStackDeveloper = {lenguajes: ['javascript', 'php'], proyectos: ['mi pagina personal', 'proyecto con React']};
console.log(FullStackDeveloper);

//30 Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores
const Perro = {nombre: 'Sira', raza: 'Chiguagua', color: 'beige', edad: 7};
console.log(Perro);

//31 Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores
const Noticia = {titular: 'La impresión 3D revoluciona las reformas', cuerpo: 'Con una prevía instalación de la maquinaria en el lugar, se puede construir una vivienda en 3D'};
console.log(Noticia);

//32 Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores
const Persona = {nombre: 'MKGBS', apellidos: ['Maker', '3D'], edad: 41};
console.log(Persona);

//33 Muestra por consola el nombre de la variable Persona
console.log(Persona.nombre);

//34 Muestra por consola el lenguaje javascript de la variable FullStackDeveloper
console.log(FullStackDeveloper.lenguajes[0]);



//35 Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola
const Portatil = {marca: 'HP'};
console.log(Portatil.marca);

//36 Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola
console.log(Portatil['marca']);

//37 Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola
const Concierto = {grupos: ['Linkin Park', 'Offspring', 'Libizkit']};
console.log(Concierto.grupos);

//38 Crea un objeto de nombre Led, con las propiedades: lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola.
//   La array por consola debería mostrarse así [‘rojo’,’verde’,’azul’]
const Led = {rojo: 'red', verde: 'green', azul: 'blue'};
console.log(Led);
const RGB = [Led.rojo, Led.verde, Led.azul];
console.log(RGB);

//39 Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola
const O_Error = {codigo: 404};
console.log("Error:", O_Error.codigo);

//40 Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes
const Grupo = {integrantes: ['Ger', 'Luis', 'Andrés']};
const integrantes = Grupo.integrantes;
console.log(integrantes[4]);

//41 Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola
const Impresora = {tinta: {rojo: 'red', verde: 'green', azul: 'blue'}};
const nivelesTinta = [Impresora.tinta.rojo, Impresora.tinta.verde, Impresora.tinta.azul];
console.log(nivelesTinta);

//42 Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola
const Movil = {especificaciones: ['capacidad almacenamiento', 'procesador']};
console.log(Movil);

//43 Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
Portatil.marca = 'MSI';
console.log(Portatil);

//44 Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado
Concierto.grupos.push("Guns N'Roses");
console.log(Concierto);

//45 Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy, investiga que es new Date y como usarlo), consolea el resultado
Concierto.fecha = '22/06/1987';
console.log(Concierto.fecha);
Concierto.fecha = new Date();
console.log(Concierto.fecha);

//46 Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)
console.log(Grupo.integrantes.length);

// Entregables "OK"
// Subir el ejercicio a un repositorio en github "OK"
// Dejar el enlace del repositorio adjuntado en Classroom "OK"