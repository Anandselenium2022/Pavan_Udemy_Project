let a:number=10, b:number=20;

// Arithmetic Operators

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(5**2);

//Assignment Operators
console.log('****************');

a = 10;
b  =5;

//a=a+b;  // this is similar to a=+b
//a+=b
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);

// Relational Operators  - used to complate the values

// always returns a boolean value

console.log('********** Relational Operators');
//> < >= <= == != === this is called strict equal to

a=10;
b=20;
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);

// difference between == (equality) and === (Strict equality)
console.log('********');

let number1:any= 10;  // number type
let number2:any= "10";  // string

console.log(number1==number2); // true =  as it complares values
console.log(number1===number2); // false as it complate values & type


// Logical Operator








