/* 

Variable : container which can hold/store some data

x= 10;

studentName = "John"  // give proper name to the variable

 */
// var let const

// syntax - keyword variableName : dataType(optional) = value;
// Ex -     var age:number = 30;
// Ex -     var age=30;

var ageVar=30;
console.log(ageVar);

// var vs let vs const
//------------------------

/* 
1) scope
2) declaration/value assignment
3) Re-Declaration
4) Re-Initialization/Re-assignment
5) Hoisting


*/
//var - we do not use this in Modern JS/TS.as var is function scope and can lead to unexpeced values
//let - use let when you need a variable that can change
//const -  use const when the variable value should not change

//1) scope - Accessible area (Functional scope (var) & Block scope (let and const))

// ex 1: var( funcitonal scope)

/* function varScope(){

    if(true){
    var msg = "Var fucntionl scope demo."
    console.log(msg);
        
    }
   // console.log(msg);
}
varScope(); */

// ex2 :

/* function blockScope(){

    if(true){
    let msg = "let blocked scope demo."
    const constAge = "const blocked scope demo."
       console.log(msg);
       console.log(constAge);
       
        
    }
    console.log(msg); // error: can not find name 'msg'
    console.log(constAge);  // Cannot find name 'constAge'
}
blockScope(); */


// 2. Declaration/value Assignment

//ex1: var can be declared with out initialization

var x;  // declaration

console.log(x);

x=10;   // initialization

console.log(x);

//ex2: let also can be declared with out initialization

/* let y;  // declaration

console.log(y);

y="Anand"; // initializaiton

console.log(y); */

// ex3: where as const must be intialized while decalaration itself

//const z; // incorrect  // const declarations must be initalized

/* const z= 70;
console.log(z); */


// 3. Re-declarartion

//var - allows re CSSStyleDeclaration
//let and const does not support re declaration
//ex1: var
/* var city = "New york";
var city = "London"  // it does not throw any error

console.log(city); */

//ex2; let does not allow re declaration

//let country = "India";
//let country = "New Zealand"  // compilor error

//ex3; const does not allow re declaration

//const planet = "Earth";
//const planet = "Mars";  // throws error 

//4. Re initialization/ or Re assignment

// var and let reassignment is allowed
// const does not support re assignment

//ex1: var
/* var ageTest = 25;
ageTest = 60;
console.log(ageTest); */


//ex2: let
/* let ageTestlet = 25;
ageTestlet = 60;
console.log(ageTestlet); */

//ex2: cosnt
/* let ageTestcosnt = 25;
//ageTestconst = 60;  // not allowed
console.log(ageTestcosnt); */
 
//5. Hoisting
/* 
console.log(a);
var a = 10;
console.log(a); */


// let

/* console.log(b);
let b = 10;
console.log(b); */


//same for const as well













