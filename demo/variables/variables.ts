/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations

const courseName = "typescript";
const courseName2 = 'typescript'; 
const courseName3 = `typescript`;
const amount = 10; 
const fraction = 10.5; 
const oneThousand = 1e3; 
const allPermission = 0o777; 
const hexByte = 0xff; 
const binary = 0b000111; 
const bigInt = 9000n;
const yes = true;
const no = false;

// completely missing 
const missing = undefined;

// we know it is missing 
const empty = null; 

let someNum = 0;
someNum = 1; 
someNum = 2; 
someNum = 5; 

// let someNum =5; 
{
    let someNum = 5; 
    // test code...
}

let hello; 

hello = "hi"; 
hello = "hey"; 
hello = "hello"; 

// const whoops; error rather use let for uninstalized variable