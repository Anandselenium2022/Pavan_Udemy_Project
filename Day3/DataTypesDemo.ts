/* 
1) Primitive data type (Single value can be stored)
number
string 
boolean
null 
undefined
any
union type
void

2) non primitive data types  ( group of values can be stored)
Array
class
function
interface
tuple  etc...



*/

//1). Number Type Interger and floating point numbers

let age:number=25;
let price=25.50;
let big=453245236236;
console.log("Age: ",age);
console.log("Price: ",price);
console.log("Big: ",big);

console.log(typeof(age));
console.log(typeof age);


//String data type
//Represent textual data 

/* 1). Single quote ('')
2). double quote (" ")
3). Back tick (` `) */


let firstName:string="Anand"
let lastName:string="R"

console.log("Hello",firstName,lastName);
// to store in a variable

let greeting:string=`Hello ${firstName} ${lastName}`;
console.log(greeting);

//3). Boolean Type

// represent true or false values

let isStudent:boolean=true;
let hasJob:boolean=false
console.log("Is Student?",isStudent);
console.log("Has Job?",hasJob);

//4). NULL & UNDEFINED Type

/* let emptyValue:null = null;

let notAssigned:undefined=undefined;
console.log(emptyValue)
console.log(notAssigned);

let price1:number;
console.log(price1); */

//5). Any Type

// looses typescript benefits

/* let value:any="Welcome";
console.log(typeof(value));

value=100;
console.log(typeof(value));

value=true;
console.log(typeof(value));

console.log(value); */

//6). UNION TYPE - combine multiple types

/* let id:number | string | boolean
id="Anand";
console.log(id);


id = 1234;
console.log(id);
id=true;
console.log(id); */


//7). void type

// used for function that does not return any value

/* function show():void{ // void is optional 
    console.log("Welcome");
    
}
show(); */

function sum(x:number,y:number):number{
return (x+y);
}

const sumResult:number = sum(10, 20);

console.log(sumResult);
