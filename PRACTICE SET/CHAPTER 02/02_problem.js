// Demonstrate the use of switch case statements in Javascript
let age = prompt("what is your age?")
age = Number.parseInt(age)

switch (age){

    case 12:
        console.log("Your age is 12")
        break;

    case 17:
        console.log("Your age is 17")
        break;
    case 15:
        console.log("Your age is 15")
        break;
default:
        console.log("Your age is not special ") 
}