// console.log("Conditional Expressions")

let a = prompt("Hey what's your age?:")

a = Number.parseInt(a)// conerting a string to  a number
console.log(typeof a)

if(a<0){
  alert("This is an invalid age:")
}

else if(a<9){
alert("you are  a kid")
}
else if(a<18 && a>=9){
alert("you are  a kid and you can think")
}

else{
    alert("you can drive")
}

console.log("done")
// alert("hey whats your age:")

// ternary operator
console.log("you can", (a<18? "not drive" :"drive"))



// switch case 

// const fruit = 'papaya';

// switch (fruit){
//     case 'orange':
//         console.log("Orannges are & 0.25");
//         break;

//     case 'mango':
//         console.log("Orannges are & 0.25");
//         break;
//     case 'papayas':
//         console.log("Orannges are & 0.25");
//         break;

//         default:
//             console.log("Sorry , we  are out of", {fruit});
// }


