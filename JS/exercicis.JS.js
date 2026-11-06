// 2.1
// var a = 1;
// var a = 2;
// console.log(a); // correcto, porque la variable está declarada con var y var, se puede redeclarar con var si ya existe una variable con el mismo nombre en el mismo ámbito.

// var a = 1;
// let a = 2;
// console.log(a); // da error porque la variable está declarada con var y let, no se puede redeclarar con let si ya existe una variable con el mismo nombre en el mismo ámbito.

//  let a = 1;
//  var a = 2;
// console.log(a); // da error porque la variable está declarada con let y var, no se puede redeclarar con var si ya existe una variable con el mismo nombre en el mismo ámbito.   

// let a = 1;
// let a = 2;
// console.log(a); // da error porque la variable está declarada con let y let, no se puede redeclarar con let si ya existe una variable con el mismo nombre en el mismo ámbito.

// 3.1
// let a = 5; // correcto
// let b = 5z; // da error porque la variable está declarada con let y let, no se puede redeclarar con let si ya existe una variable con el mismo nombre en el mismo ámbito. Además, 5z no es un valor válido para una variable.
// let c = "c"; // correcto
// let c = "c'; // da error porque la variable está declarada con let y let, no se puede redeclarar con let si ya existe una variable con el mismo nombre en el mismo ámbito.
//let c = "c'c'c"; // correcto
// let c = "c'c"c'; // da error porque la variable está declarada con let y let, no se puede redeclarar con let si ya existe una variable con el mismo nombre en el mismo ámbito. Además, "c'c"c' no es un valor válido para una variable.
// let n = 35; // correcto
// let n = 35va; // da error porque la variable está declarada con let y let, no se puede redeclarar con let si ya existe una variable con el mismo nombre en el mismo ámbito. Además, 35va no es un valor válido para una variable.
// console.log(n);

// 3.2
// let a = 5; // correcto
//let b = c; // incorrecto, porque la variable c no está definida. Esto genera un error al intentar asignar el valor de c a b.
// c = 7; // correcto
// console.log(c); 

//3.3
// let a = 55; // variable de tipo numero entero
// let b = 55.5; // variable de tipo numero decimal
// let c = "Hola"; // variable de tipo cadena de texto
// let d = 'Hola'; // variable de tipo cadena de texto
// let e = true; // variable de tipo booleano
// console.log(a);

// 4.1
// let a = 25;
// let b = 15 + a;
// let c = b * 2;
// console.log(a,b,c); // imprime 25 40 80

// 4.2.
// let a = 10;
// let b = 20;
// let c = 5;
// a = a + 3; // a = 13
// b = b + 4 - a; // b = 20 + 4 - 13 = 11
// c = a + b + c; // c = 13 + 11 + 5 = 29
// a = a + c; // a = 13 + 29 = 42
// b = 4; // b = 4 
// c = c + 3 - b + 2; // c = 29 + 3 - 4 + 2 = 30
// console.log(a,b,c); // imprime 42 4 30

//4.3.
// let a = 5;
// let b = 18;
// let c = 15;
// let d = 22;
// a = a + 10; // a = 15
// b = b + 5 - c; // b = 18 + 5 - 15 = 8
// c = c + 4 + b; // c = 15 + 4 + 8 = 27
// d = d + b + a; // d = 22 + 8 + 15 = 45
// a = a + 1; // a = 15 + 1 = 16
// b = b + c; // b = 8 + 27 = 35
// c = b + c; // c = 35 + 27 = 62
// d = b + b; // d = 35 + 35 = 70
// console.log(a,b,c,d); // 16 35 62 70

// 4.4
// let a = 10
// let b = 20
// let c = 5
// a = a + 3 // Fixat en aquesta instrucció.
// Quin valor tenia la variable a abans
// d’executar-se la instrucció?
// I desprès?
// console.log(a); // a = 13
// b = b + 4 – a
// console.log(b); // b = 20 + 4 - 13 = 11
// c = a + b + c
// console.log(c); // c = 13 + 11 + 5 = 29
// a = a + c
// console.log(a); // a = 13 + 29 = 42
// b = 4
// console.log(b); // b = 4
// c = c + 3 - b + 2
// console.log(c); // c = 29 + 3 - 4 + 2 = 30

// 4.5.
// let a = 5;
// let b = 18;
// let c = 15;
// let d = 22;
// a = a + 10; // a = 15
// b = b + 5 - c; // b = 18 + 5 - 15 = 8
// c = c + 4 + b; // c = 15 + 4 + 8 = 27
// d = d + b + a; // d = 22 + 8 + 15 = 45
// console.log(a,b,c,d); // imprime 15 8 27 45
// a = a + 1; // a = 15 + 1 = 16
// b = b + c; // b = 8 + 27 = 35
// c = b + c; // c = 35 + 27 = 62
// d = b + b; // d = 35 + 35 = 70
// console.log(a,b,c,d); // imprime 16 35 62 70

// 4.6.
// let a = 10;
// let b = 5;
// let c = a / b; // c = 10 / 5 = 2
// let d = a * b; // d = 10 * 5 = 50
// let e = a % 3; // e = 10 % 3 = 1
// console.log (c,d,e); // imprime 2 50 1

// 4.7.
// let a = 10;
// let b = 5;
// let c = a * b * 3; // c = 10 * 5 * 3 = 150
// let d = a / 3; // d = 10 / 3 = 3.33
// console.log(c,d); // imprime 150 3.33

// 5.1.
// let a = 5;
// a++; // a = 6 (a = a + 1)
// console.log(a); // imprime 6
// let b = a++; // b = 6 (b = a, luego a = a + 1)
// console.log(a,b); // imprime 7 6

//5.2.
// ++a;
// console.log(a);
// let b = ++a;
// console.log(a,b); // imprime 7 7

// 5.3.
// let a = 5;
// let b = a++; //Como el ++ está detrás de a, primero asigna a b el valor antiguo de a y después aumenta a.
// let c = a--;
// console.log(a,b,c); // imprime 5 5 6

// a = 5;
// b = ++a;
// c = --a;
// console.log(a,b,c); imprime 5 6 5
// a = 5;
// let d = 25 + a++; d = 25 + 5 = 30, luego a = a + 1 = 6
// a = 5;
// let e = 25 + ++a; e = 25 + 6 = 31, luego a = a + 1 = 6
// console.log(d,e); // imprime 30 31

// 6.1.
// let a = 10;
// a += 5;
// console.log(a); a = a + 5 = 15
// a *= 5;
// console.log(a); a = a * 5 = 75
// a -= 5;
// console.log(a); a = a - 5 = 70
// a /= 5;
// console.log(a); a = a / 5 = 14

// 7.1.
// let a = "Hola";  correcto, empieza y termina con comillas dobles.
// let b = 'Hola'; correcto, empieza y termina con comillas simples.
// let c = 'Hola"; incorrecto, empieza con comillas simples y termina con comillas dobles.
// let d = "Hola 'gramola'"; correcto, empieza y termina con comillas dobles y dentro tiene comillas simples.
// let e = 'Hola "gramola'"; incorrecto, empieza con comillas simples y termina con comillas dobles.

// 7.2.
// let a = "Hola";
// let b = "Adéu";
// console.log (a+b); HolaAdéu
// console.log (a+" "+b); Hola Adéu
// console.log (a+b+" "+b+a); HolaAdéu AdéuHola
// let c = a + 2;
// console.log (c); Hola2

// 8.1.
// let a = 5, b = 7;
// let c = 5,d = "5";
// let e1 = a == b; false, porque 5 no es igual a 7.
// let e2 = c == d; true, porque 5 es igual a "5" en valor, aunque no en tipo.
// let e3 = c === d; false, porque 5 no es estrictamente igual a "5" en tipo.
// console.log(e1,e2,e3);

//8.2.
// let a = true;
// let b = false;
// let c1 = true === false;
// let c2 = true == 1;
// let c3 = true === 1;
// console.log(c1,c2,c3); false true false, porque true no es estrictamente igual a false, pero true es igual a 1 en valor, aunque no en tipo.

//8.3.
// let a = 10;
// let b = 20;
// console.log (a > b, a < b); // false true, porque 10 no es mayor que 20, pero 10 es menor que 20.

//8.4.
// let a = "Hola";
// let b = "hola";
// let c = "Adéu";
// let d1 = a === b;
// let d2 = a < b;
// let d3 = a < c;
// console.log (d1,d2,d3);

//8.5.
// let a = 9;
// let b = 7;
// let c = 3;
// let d = a < b < c; false, porque a < b es false, y false < c es true, pero el resultado final es false.
// console.log(d); true, porque a < b es false, y false < c es true, pero el resultado final es false.

//9.1.
// console.log(true && true); true, porque ambas condiciones son verdaderas.
// console.log(true && false); false, porque una de las dos condiciones es falsa.
// console.log(false && (3 == 4)); false, porque una de las dos condiciones es falsa.
// console.log(false && true); false, porque una de las dos condiciones es falsa.
// console.log(false && false); false, porque ambas condiciones son falsas.

//9.2.
// console.log(false || false); false, almenos una de las dos condiciones es verdadera, el resultado es verdadero.
// console.log(false || true); true
// console.log(false || (3 == 4)); false
// console.log(true || true); true
// console.log(true || false); true

// 10.1.
// let a = 5;
// let b = 10;
// let c = 2;
// a = a + b * c; // Pensa bé quin hauria de ser el resultat
// // d’aquesta operació. 30? o 25?
// console.log(a); imprime 25, porque primero se hace la multiplicación
// let r = a % b + 1; // Quina operació és %?
// let d = c + a / b;
// console.log(d,r); resultado de d = 2 + 25 / 10 = 2 + 2.5 = 4.5, resultado de r = 25 % 10 + 1 = 5 + 1 = 6

// 10.2.
// let a = 5;
// let b = 6;
// let c = 2;
// let d1 = a + b * c; // d1 = 5 + 6 * 2 = 5 + 12 = 17
// let d2 = (a + b) * c; // d2 = (5 + 6) * 2 = 11 * 2 = 22
// let d3 = a - b * c + a / c + 6 % 5; // d3 = 5 - 6 * 2 + 5 / 2 + 6 % 5 = 5 - 12 + 2.5 + 1 = -3.5
// console.log (d1,d2,d3); 17 22 -3.5

// 10.3.
// let e1 = false && false || true; true, porque false && false es false, y false || true es true.
// let e2 = false || false && true; false, porque false || false es false, y false && true es false.
// console.log(e1,e2); true false


//10.4.
// let a = 5;
// let b = 4;
// let e1 = a > b || a < b;
// let e2 = a > b && a < b;
// let e3 = e1 || e2;
// let e4 = a <= b + 1 && b - 1 * 5 < 0;
// // Atenció a la prioritat de les operacions!!!
// console.log (e1,e2,e3,e4); true false true true, porque e1 es true, e2 es false, e3 es true, e4 es true.



//11.1.
// let a = prompt ("Introdueix un número");
// let b = (a>=18) ? "Ets major d’edat":"No ets major d’edat";
// console.log (b);


// 11.2.- Escriu un programa que demani dos números (fent servir la instrucció prompt) i
// escrigui a la consola qual és el més gran. Fes servir l’operador interrogant (?)
// 11.3.- Escriu un programa que demani dues paraules (fent servir la instrucció prompt) i ens
// digui si les dues paraules són iguals.







// 13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero.


// let número = Number(prompt("Introdueix un nombre:"));

// if(número<0){
//     console.log("el número llegit és negatiu")
// }

// 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és parell” si el número es parell.

// let número = Number(prompt("Introdueix un nombre"));

// if(número % 2 == 0){
//     console.log("el número llegit és parell")
// }

// 13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit
// és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if
// per cada cas.

// let a = Number(prompt("Introdueix un nombre"));

// if(a % 2 == 0){
//     console.log("el número llegit és parell")
// }
// else{
//     console.log("el número llegit és senar")
//     }

// 15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número
// de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 

// let numero = Number(prompt("Introdueix un nombre de l'1-12"));

// switch (numero){
//     case 1:
//         console.log("Gener");
//         break;
//     case 2:
//            console.log("Febrer");
//         break;
//     case 3:
//            console.log("Març");
//         break;
//     case 4:
//            console.log("Abril");
//         break;
//     case 5:
//            console.log("Maig");
//         break;
//     case 6:
//            console.log("Juny");
//         break;
//     case 7:
//            console.log("Juliol");
//         break;
//     case 8:
//            console.log("Agost");
//         break;
//     case 9:
//            console.log("Septembre");
//         break;
//     case 10:
//            console.log("Octubre");
//         break;
//     case 11:
//            console.log("Novembre");
//         break;
//     case 12:
//            console.log("Decembre");
//         break;
//     default: 
//         console.log("Error")
//     }


// 15.3.- Escriu un programa, que donat una lletra que representa un dia de la setmana (l -
// dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o
// festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch.


// let diesSetmana = ['l','m','x','j','v','s','d']

// for(let i = 0; i < diesSetmana.length; i++){
//     let dia = diesSetmana[i]

//     switch (dia){
//         case 'l':
//         case 'm':
//         case 'x':
//         case 'j':
//         case 'v':
//             console.log('EL dia ' + dia + ' és laborable')
//             break
//         case 's':
//         case 'd':
//             console.log('El dia ' + dia + ' és festiu')
//             break
//         default:
//             console.log('Error')
        
//     }
// }


// let tipusGelat = prompt("Vols un conus (c) o una terrina (t)?");
// let sabor = Number(prompt("Quin sabor vols? (1, 2 o 3)"));

// let preuBase = 0;
// let increment = 0;
// let dadaCorrecta = true;

// // 2. Comprovació del tipus de gelat
// if (tipusGelat === "c") {
//     preuBase = 3.45;
// } else if (tipusGelat === "t") {
//     preuBase = 3.95;
// } else {
//     dadaCorrecta = false;
// }

// // 3. Càlcul de l'increment segons el sabor amb switch
// switch (sabor) {
//     case 1:
//         increment = 0;
//         break;
//     case 2:
//         increment = 0.5;
//         break;
//     case 3:
//         increment = 1.0;
//         break;
//     default:
//         dadaCorrecta = false;
//         break;
// }

// // 4. Mostrar resultat o error
// if (dadaCorrecta) {
//     let preuFinal = preuBase + increment;
//     console.log("El preu final és: " + preuFinal.toFixed(2) + "€");
// } else {
//     console.log("Error dades mal introduïdes");
// }

// 16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el
// text “Estem fent bucles”

for(let i = 0; i < 10; i++){
    console.log("Estem fent bucles")
}

