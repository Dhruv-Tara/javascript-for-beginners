
console.log("Welcome to JS for beginners.")

// Writes hello World in cmd line ///

// Places to run JS //

// Replit.com//
// Browser //
// Node.js //


// I will be using Node.js mainly as its the best of all the 3 //
/*

Well Node and replit are kinda same but replit is hosted on cloud 
node is self hosted in pc OR localhost so its very fast and reliable 

lemme show u how to run a js code in browser
 


Writing of Variables :::


What are variables u ask ?
Variables are like a container which can store anything 
think of something like a storage drum 
U can store food in it // Water in it // Anything


So in JS there are 2 typed of variable 

1) var [ Which can be changed in future ]  EX of same ::  var X = "1";

I can again change the value of X in future if I need to 

heres a snippet for same 




*/



var X = 123;
console.log(X);

X = "This is our First Session";
console.log(X);


/* 
PS C:\Users\ys801\OneDrive\Documents\GitHub\javascript-for-beginners> node xyz.js
123
This is our First Session 
*/


/*

Another Type of variable is const 
Its a variable but can only be defined once in a program or in a function


EXAMPLE : 


const X = "HELLO";

console.log(X);

*/


const X = "Hello";
console.log(X);
X = "Hello Again ?"
console.log(X)

/*

This Snippet gives us error because we tried to change a constant 
the variable we declared here was given the keyword of constant so it will 
never change again in future 

Therefore we were given an error 
""""
X = "Hello Again ?"
  ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (C:\Users\ys801\OneDrive\Documents\GitHub\javascript-for-beginners\xyz.js:78:3)   
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.17.0

""""

*/


/*

Combined all together we can say that for future proof and no bug program we should be using 

const 

If you want to change anything then use 

" let "

there's a term for this behavior
called 'mutable'

in this case a var declared with let is mutable and a var declared with const is immutable


DON'T use " var " :: Its not deprecated yet idk why but its very harmful for the program

var is like a GLOBAL variable instead of a local var

So use 

let and const 

I taught u var so u know what's it used for and what is its usage but its kinda deprecated 
so dont use it .\
*/



let alpha = "pro";
const coder = "I am ";
console.log(coder + alpha);


// Variables are case sensitive //

/* 

const XYZ = 1;
const XyZ = 2;



*/

const XYZ = 1;
const XyZ = 2;

console.log(XYZ);
console.log(XyZ);

// PS C:\Users\ys801\OneDrive\Documents\GitHub\javascript-for-beginners> node xyz.js
// 1
// 2

////


// Data Types

// in js we have 7 types of Primitive datatypes 

// 1 null
// true 
// false
// undefined


// 7 primitive datat types are

// 1 null {none in python}
// 2 Number
// 3 Symbol
// 4 String
// 5 Boolean
// 6 BigInt
// 7 undefined

// const x = new String("xhuaaslas");


///


// Key Value Pairs 

// JSON 

// Json == "Java Script Object Notation";
// Also called map in JS
// Like we call dict in python

const json = {
    "dict" : {
        "json" : [1234,"string",true] 
    },
    "numbers" : 17,

    "name" : "abc",

    abc : [123,"xyz",true]
};

console.log(json); // This will return the whole json variable ;
console.log(json.numbers); 
console.log(json.dict.json[0]);


// An array starts with 0 not 1;
// If you are thinking about 1 do -1 in it its the value .
// If I am thinking about 3rd value in an array so I will write 3-1 = 2

// const homo_arr = [123,456,789] // Homogenous array //
// // All of them are numbers //

// const hetro_arr = [123,true,"xyz"] // Heterogenous array 
// // All the index values are of different typed //

// // How to find what type is a object or whatever //

console.log(typeof(hetro_arr[0])) // Number
console.log(typeof(hetro_arr[1])); //Boolean
console.log(typeof(hetro_arr[2])) // String



const dict = {
    "dict" : {
        "json" : [1234,"string",true] 
    },
    "numbers" : 17,

    "name" : "abc",

    abc : [123,"xyz",true]
};

console.log(dict);

dict["abc"] = null;
dict["op"] = undefined;

console.log(dict)

// PS C:\Users\ys801\OneDrive\Documents\GitHub\javascript-for-beginners> node xyz.js
// {
//   dict: { json: [ 1234, 'string', true ] },
//   numbers: 17,
//   name: 'abc',
//   abc: [ 123, 'xyz', true ]
// }
// {
//   dict: { json: [ 1234, 'string', true ] },
//   numbers: 17,
//   name: 'abc',
//   abc: null,
//   op: undefined
// }

// END OF THE DAY //
// Q1 Write a json and change its value and add a value in it .
// Q2 Write 5 variables and then change their value.