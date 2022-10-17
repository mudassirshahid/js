// FOUR PILLARS OF OBJECT ORIENTED PROGRAMMING
// 1 Encapsulation
// 2 Abstraction
// 3 Inheritance
// 4 Polymorphism

// Encapsulation

// let baseSalary = 30.000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + (overtime * rate);
// }

// let employee = {
//     baseSalary: 30.000,
//     overtime: 10,
//     rate:20,
//     getWage: function(){
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// };
// employee.getWage();
// console.log(employee.getWage())

// OBJECT LITERAL SYNTAX

// const circle ={
//     radius:1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('draw')
//     }
// };

// circle.draw();

// OBJECT DEFINE USING FACTORIES

// IN ES6 WE HAVE THIS NEW FEATURE SO IF THE KEY AND VALUE ARE THE SAME WE CAN REMOVE THE NOISE IN THE CODE BY REMOVING THE VALUE
// EXAMPLE:
// radius: radius,
// key   :   value

// FACTORY FUNCTION
// function createCircle(radius){
//     return{
//        radius,
//        draw: function(){
//         console.log('draw')
//      }
//     };   
// }

// const circle = createCircle(1);
// circle.draw();

// // CONSTRUCTOR FUNCTION
// //NAMING CONVENTION WE USE FOR CONSTRUCTOR FUNCTION IS DIFFERENT FIRST LETTER SHOULD BE UPPERCASE

// function Circle(radius){        //PASS PARAMETER RADIUS BUT IN BODY INSTEAD OF RETURNING AN OBJECT WE GONNA USE THE THIS KEYWORD TO SET THE PROPERTIES OF THIS OBJECT BUT WHAT IS THIS?  THIS IS BASICALLY A REFERENCE TO THE OBJECT THAT IS EXECUTING PEACE OF CODE WE USE THIS WITH DOT NOTATION TO SET VARIUS PROPERTIES ON THAT OBJECT WE SET RADIUS PROPERTY WITH RADIUS ARGUMENT

//     console.log('this', this)
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw')
//     }

// }
// //create new circle
// const another = new Circle(1);
//TO WAYS TO CREATE AN OBJECT WE CAN USE FACTORY OR CONSTRUCTOR FUNCTION THERE IS NOTHING SPECIAL AOUT THESE THEY ARE BOTH REGULAR FUNCTION IN JAVASCRIPT IF WE RETURN AN OBJECT WE USE FACTORY FUNCTION BUT IF WE USE THIS KEYWORD ALONG WITH A NEW OPERATOR USE AS A CONSTRUCTORN FUNCTION

//CONSTRUCTOR PROPERTY
//SEARCH IN CONSOLE another.constuctor or circle.constructor
//EVERY OBJECT HAS A CONSTRUCTOR PROPERTY AND THAT REFERENCES THE FUNCTION THAT I WAS USED TO CREATE AN OBJECT

//FUNCTIONS ARE OBJECTS
//IN JS FUNCTIONS ARE OBJECTS

//VALUE/PRIMITIVE TYPES VS REFERENCE TYPES
//NUMBER                   OBJECT  
//STRING                   FUNCTION
//BOOLEAN                  ARRAY
//SYMBOL(NEW IN ES6) 
//UNDEFINED 
//NULL    
//PRIMITIVES ARE COPIED BY THEIR VALUE  LIKE
// let x = 10;
// let y = x;
// x  = 20;    //OUTPUT IS X = 20 BUT Y = 10


// let number = 10;

// function increase(number){
//     number++;
// }
// increase(number);
// console.log(number);    //OUTPUT 10


// //OBJECTS ARE COPIED BY THEIR REFERENCE
// let a = {value : 10};
// let b = a;
// a.value  = 20;    //OUTPUT IS A = 20 AND B = 20


// let obj = { value: 10};

// function increase(obj){
//     obj.value++;
// }
// increase(obj);
// console.log(obj);    //OUTPUT {value: 11}

// ADDING REMOVING PROPERTIES
//WE USE DOT NOTATION FOR SIMPLE VALUE LIKE VALUE IS LOCATION SO WE WRITE LIKE THIS.LOCATION BUT IF THE VALUE IS DIFFERENT AND HAS SPACE AND SPECIAL CHARACTERS LIKE MAP-LOACTION AND MAP LOACTION ETC S O WE USE BRACKET NOTATION LIKE THIS THIS['MAP-LOACATION'] WE CAN USE THE BRACKET NOTATION TO ACCESS A MEMBER

// ENUMERATING PROPERTIES

function Circle(radius){        //PASS PARAMETER RADIUS BUT IN BODY INSTEAD OF RETURNING AN OBJECT WE GONNA USE THE THIS KEYWORD TO SET THE PROPERTIES OF THIS OBJECT BUT WHAT IS THIS?  THIS IS BASICALLY A REFERENCE TO THE OBJECT THAT IS EXECUTING PEACE OF CODE WE USE THIS WITH DOT NOTATION TO SET VARIUS PROPERTIES ON THAT OBJECT WE SET RADIUS PROPERTY WITH RADIUS ARGUMENT

    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }

}
//create new circle
const circle = new Circle(10);

for (let key in Circle){
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

//TO KNOW ABOUT OBJECT EVEN PROPERTY WE USE IN OPERATOR 
if ('radius' in circle)
console.log('circle has a radius')

//ABSTRACTION

//ABSTRACTION MEANS WE SHOULD HIDE THE DETAILS AND COMPLEXITY AND SHOW OR EXPOSE ONLY THE ESSENTIALS

//PRIVATE PROPERTIES AND METHODS
//SCOPE IS TEMPORARY BUT CLOSURES STAYS THERE


//GETTERS SETTERS

//KEYVALUE PAIR THE KEY IS GET THIS IS A SPECIAL KEYWORD FOR JS AND THE VALUE IS FUNCTION 
// get: function(){

// }
// set: function(){

// }