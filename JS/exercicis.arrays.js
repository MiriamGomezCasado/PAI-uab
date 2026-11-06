// 21.1.- Fes un programa que faci el següent:
// ● Defineix una variable de tipus taula, buida.
// ● Afegeixi el valor “Hola” a la posició 0.
// ● Afegeixi el valor “Adeu” a la posició 1.
// ● Escrigui a la consola el contingut de la taula.

// let taula = [];
// taula[0] = "Hola";
// taula[1] = "Adeu";
// console.log(taula);

// 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
// per a fer el següent:
// ● Afegeixi el valor “Nom” a la posició 2 de la taula.
// ● Escrigui a la consola el contingut de la taula.
// ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
// ● Escrigui a la consola el contingut de la taula.

// let taula = [];
// taula[0] = "Hola";
// taula[1] = "Adeu";
// console.log(taula);

// taula[2] = "Nom";
// console.log(taula);

// taula[1] = ", ";
// console.log(taula);

// 21.3.- Fes un programa que faci el següent:
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
// ● Guardi a la posició 6 de la taula la suma dels elements
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?

// let taula = [23, 45, 98, 73];
// let suma = taula[0] + taula[2];
// console.log(suma);

//taula[6] = suma;
//console.log(taula);
//es queden buides les posicions 4 i 5, ja que no s'han assignat valors a aquestes posicions. Per tant, quan es mostra la taula a la consola, les posicions 4 i 5 apareixen com a "undefined".

// 21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
// prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
// taula a la consola.

// let numero = Number(prompt("Introdueix un número:"));
// let taula = [numero * 2, numero * 3];
// console.log(taula);