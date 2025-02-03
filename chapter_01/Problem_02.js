// Problem 02 :- Demonstrate the use of SWITCH case statement in JS.
let a=prompt("enter num")
let b=prompt("enter num")
let op=prompt("enter operator")
switch(op){
    case '1':
        console.log("addition  ="+ a+b)
        break;
    case '2':
        console.log("subtraction  ="+ a-b)
        break;
    case '3':
        console.log("multiplication ="+ a*b)
        break;
    case '4':
        console.log("division ="+ a/b)
        break;
    default:
        console.log("invalid choice!!")
    }
