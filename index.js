// function allow us do some javascript operations and use them multiple times when needed

// function delcaration

// keyword name()
// function addition(){
//     console.log(3+5)
// }

// function subtraction(){
//     console.log(6-4)
// }
// addition()
// subtraction()

// function argument or function parameters- it allows user to pass in parameter that want to be executed
// function addition(a,b){
//     console.log(a+b)
// }
// addition(10,3)

// function subtraction(a,b){
//     console.log(a-b)
// }
// subtraction(10,3)

// function showMessage(){
//     let msg = 'i love javascript'
//     console.log(msg);
// }
// showMessage()

// function showDiscount(purchase = prompt('enter your purchase amount')){
//     if(!purchase){
//         alert('enter your purchase amount')
//     }
//     if(purchase>=1500){
//         alert('congratulation! you have 15% discount applied to your purchase')
//     } else if(purchase<1500){
//         alert('kindly make purchase of over 1500')
//     }
// }
// showDiscount()

// local variable are variable that are declared inside of a function, and cannot be accessed outside of the function scope


// default values for function arguments
// function showMessage(msg, name){
//     if (!name){
//         name = 'bob'
//     }
//  let showMessage = msg +" "+ name;
//  alert(showMessage)
// }
// showMessage("hello, i am a message from", "abiola")

// returning from a function
// function sum(a,b){
//     return a+b
// }
// let result = sum(4,6)
// alert(result);

// let age = prompt("how old are you?", 18)
// function checkAge(age){
//     if(age>=18){
//         return true
//     } else {
//         return false
//     }
// }
// if(checkAge(age)){
//     alert("Access Granted")
// } else {
//     alert("Access Denied")
// }

// function exanple- finding prime numbers with function
// function isPrime(n){
//   if(n<=1)
//     return false
  
//   for(let i=2; i<n; i++){
//     if(n%i==0){
//         alert('this is not a prime number')
//         return false
//     }
//     alert(n)
//     return true
//   }

// }
// isPrime(6)

// function expression- this allow us create a new function in a form of expression

// let sayHi = function(){
//   alert('hello world')
// }
// sayHi()

// function expression is a method of storing a function inside of a varaible
// function ask(question, yes, no){
//    if (confirm(question)){
//     yes()
//    } else {
//     no()
//    }
// }

// function showOk(){
//   alert('you have agreed')
// }
// function showCancel(){
//   alert('you canceled the execution')
// }
// ask('Do you Agree?', showOk, showCancel)

// function delcaration vs function expression
// whenever we execute a code in javascript, the execution start from top to bottom, check example below
// alert('first line')
// alert('second line')
// alert('third line')
// alert('fouth line')
// alert('fifth line')

/*javascript first look for all the function created using function declaration
let try and call our function expression and see the code wont get executed because
we are trying to call it ahead of function declaration, function expression cant be called
before it is declared, only function declaration has hoisting power to be called before declaration*/

// multiply(4,5)
// function sum(a,b){
//   alert(a+b)
// }

// function sub(a,b){
//   alert(a-b)
// }

// let multiply = function(a,b){
//   alert(a*b)
// }
// multiply(2,4)

/*second difference between function delcaration and expression is that, in a use strict mode same function 
declaration name cant be used used twice in the region of our project but function expression
can be used when the function has been delcared in a global scope but not assigned*/

// example using function declaration
"use strict"
// let age = prompt("what is your age?", 18)
// if(age<18){
//   function welcome(){
//     alert('you are a teenager')
//   }
// } else {
//   function welcome(){
//     alert('you are not a teenager')
//   }
// }

// welcome()

let age = prompt()
let welcome;
if(age<18){
  welcome = function(){
    alert('you are a teenager')
  }
} else{
  welcome = function(){
    alert('you are not a teenager')
  }
}
welcome()







