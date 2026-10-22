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
// let b = a++;
// let c = a--;
// console.log(a,b,c); // imprime 5 5 6
// a = 5;
// b = ++a;
// c = --a;
// console.log(a,b,c);
// a = 5;
// let d = 25 + a++;
// a = 5;
// let e = 25 + ++a;
// console.log(d,e); // imprime 30 31