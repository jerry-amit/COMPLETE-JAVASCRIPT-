// Write a Javascript program to find whether in number individual by either two or three

let num = prompt("what is your num?")
num = Number.parseInt(num)

if(num %2==0 || num % 3==0){
    console.log("the number is divided either by 2 and 3",+num)
}

else{
    console.log("Your number is not divisle by 2 and 3",num)
}