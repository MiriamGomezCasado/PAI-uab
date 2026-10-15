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
let a = 55;
// let b = 55.5;
// let c = "Hola";
// let d = 'Hola';
// let e = true;
console.log(a);