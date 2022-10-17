// let firstname = 'Mudassir';
// let lastname = 'Shahid';
// console.log(firstname + lastname);

// String always write in qoutes
// Cannot be a reserved keyword
// should be meaningful
// cannot start with a number (1name)
// cannot contain a space or hyphen (-)

// let firstname = 'Mudassir', lastname = 'Shahid';
// console.log(firstname + lastname);


// let name = 'Mudassir';
// name = 'Shahid';
// console.log(name)

// CONST CONST VALUE CANNOT CHANGE
// IF YOU DINT NEED TO REASSIGN VALUE CONST SHOULD BE YOUR DEFAULT CHOICE OTHERWISE USE LET
// const name = 'Mudassir';
// name = 'Shahid';
// console.log(name)

// PRIMITIVE/VALUE TYPES
// 1 STRING  let name = 'mudassir'; STRING LITERAL 
// 2 NUMBER  let age = 18; NUMBER LITERAL
// 3 BOOLEAN let isApproved = true; BOOLEAN LITERAL
// 4 UNDEFINED let name;   BY DEFAULT VALUE IS UNDEFINED let name = undefined; SAME WAY
// 5 NULL let num = null; WE USE NULL TO CLEAR THE VALUE OF VARIABLE


// TWO TYPES OF LANGUAGE
// STATIC (Statically-typed) When we declare a variable the type of that variable is set and it cannot be changed in the future LIKE:
// string name = 'mudassir';
// DYNAMIC (Dynamically-typed) In a dynamic language like JavaScript the type of a variable can change at runtime lets see this in code LIKE:
// let name = 'mudassir';
// like if you reassign name value name = 1 so it will change the value of name and also change the variable type string to number that is called dynamic language

// TYPEOF OPERATOR
// typeof operator helps you to know variable type in console like string boolean etc
// write in console typeof and after that write variable name like this: typeof name


// REFERENCE TYPES
// 1 OBJECT  A person has name age and address and so on these are properties of a person we have a same concept in JavaScript so when we are dealing with multiple related variables we can put these variables inside of an object  for example

// OBJECTS DECLARED ONE VARIABLE AND SET MULTIPLE THINGS

// let person = {
//     name: 'mudassir',
//     age: 18,
//     designation: 'Developer'
// }
// console.log(person);

// THERE ARE TWO WAYS TO WORK WITH THESE PROPERTIES LETS SAY WE WANT TO CHANGE THE NAME OF THIS PERSON SO WE NEED TO ACCESS THE NAME PROPERTY THERE ARE TWO WAYS THE FIRST WAY IS WHAT WE CALL THE DOT NOTATION SO WE ADD THE NAME OF OUR OBJECT IN THIS CASE PERSON DOT NOW YOU CAN SEE ITS PROPERTIES WE HAVE AGE NAME ETC 
// Dot Notation

// person.name = 'shahid'
// console.log(person.name);

// THE OTHER WAY TO ACCESS THE PROPERTY IS USING BRACKET NOTATION
// Bracket Notation 
// person['name'] = 'shahid';
// console.log(person.name);

// BETTER APPROACH IS DOT NOTATION 

// 2 ARRAY  Like List of products or shopping cart or listing any data We use Arrays
// let selectedcolors = ['red', 'black', 'blue']; 
// console.log(selectedcolors)
// IF YPU WANT TO DISPALY SPECIFIC ITEM IN AN ARRAY WRITE INDEX NUMBER OF THAT ELEMENT LIKE THIS:
// console.log(selectedcolors[1])

// ADD MORE ITEMS IN ARRAY
// let selectedcolors = ['red', 'black', 'blue'];  
// selectedcolors[3] = 'grey'
// console.log(selectedcolors)
// console.log(selectedcolors.length)


// 3 FUNCTION
 

//PERFORMING A TASK
// function greet(name, lastname) {              //() THIS IS PARANTHESES AND WE PASS IN BETWEEN THIS PARAMETERS SO GREET FUNCTION HAS ONE PARAMETER CALLED NAME AND ESSENTIALLY NAME IS LIKE A VARIABLE THAT IS ONLY MEANINGFUL INSIDE OF THIS FUNCTION SO INSIDE OF THIS FUNCTION WE CA WORK WITH THIS NAME VARIABLE BUT IT WILL NOT BE ACCESSIBLE OUTSIDE OF THIS FUNCTION THE NAME IS AN INPUT TO THIS FUNCTION SO INSTEAD OF DISPLAYING HEELO WORLD WE CAN DISPLAY HELLO THEN ADD A PLUS HERE TO CONCATENATE TWO STRINGS.WE CAN ADD MULTIPLE PARAMETERS
 //    console.log('Hello ' + name + ' ' + lastname);          // SO WE CAN ADD NAME AFTER NOW WHEN CALLING THE GREET FUNCTION WE NEED TO PASS A VALUE FOR THE NAME VARIABLE OR NAME PARAMETER MORE ACCURATELY SO WE CAN PASS
 //}
// WE CALL THE FUNCTION LIKE THIS:
 //greet('Muhammad', 'Mudassir');  //Semi colon to indicate that this is a statement
// greet('Mudassir', 'Shahid');  


 //CALCULATING A VALUE

//  function square(number){
//     return number * number
//  }
//  //1st way
//  let number = square(2);
//  console.log(number);
//  //2nd way
//  console.log(square(2));