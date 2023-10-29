// Operators //


function print(arg) {
    console.log(arg);
};


/*

== equal to 
!= not equal to 
=== equal to and type 
!== not equal to and type
> greater than 
< smaller than
>= greater than or is equal to
<= smaller than or is equal to 
? Tunary Operator 

*/



const x = "123"

if (x == 123) {
    console.log(true)
} 

x = "123";

console.log(x === 123);


// In one word Always use "===";


// greater than > 

// const x = 1 

// console.log(x > 0)


// smaller than "<";

// const x = 10 ;

// console.log(10 < 10);


// Turnary OP

const x = "10" 

console.log(x === 10 ? "YES" : "NO"); // NO
console.log(x == 10 ? "YES" : "NO"); // YES

(x === 9 ? "Yes" : "No")




// // Logical op 

// && : logical and 

// EX :
// x and y 
// x && y

// // ||

// || : Logical OR


// EX :

// a OR b
// a || b;

// //

// ! : LOGICAL NOT

// EX :

//  a is not equal to b
// a != b


// EXAMPLES :

// && 

// const x = 5 ;
// const y = 6;

if (x === 5 && y === 8) {
    console.log(true);
} else {
    console.log(false)
};

// // TURNARY OP :

// console.log(x === 5 && y === 6 ? true : false)


// // OR " || "


// const x = 1 ;
// const y = 2;
// const z = undefined;

if (x === 3 || y === 8 || z === undefined) {

    print(true);

} else {

    print(false);

};



// logical not  "!"
// ex :

const x = 1
const y = 2

if (x !== null) {
    print(true)
} else {
    print(false)
}



// Conditional statements 

// if () {};
// If you want to add second condition or more than that 
// else if "like in python we use (elif)"
// if (c=x) {"THIS"} else if (c = y) {"Then tis"}  else if (c!=y) { "Then This" }

// else {"END WITH THIS"};


// BASIC EX : 

const x = 1;
const y = 2;
const z = 3;

if (x === 2) {
    print(`Value of x : ${x}`);
} else if ("") {
    print(`Value of X : ${x} \nValue of Y : ${y}`);
} else if ("abc" === undefined) {
    print("ABC")
} else {
    print("THIS IS END OF CONDITIONAL STATEMENT");
}



// There are 5 types of loops in js 

// 1 -  FOR LOOP  -> loops a block of code for number of times 
// 2 - For in loop - > loops through keys of an object (json) 
// 3 -  For of loop ->   loops through values of an object
// 4 - while loop -> loops a block based on a specific condition 
// 5 - DO while loop -> variant of While loop which runs atleast once 


// EX of a simple loop

// for (let i = 0 ; i < 5 ; i++) {
//     print(i);
// };
