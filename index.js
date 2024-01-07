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
function isPrime(n){
  if(n<=1)
    return false
  
  for(let i=2; i<n; i++){
    if(n%i==0){
        alert('this is not a prime number')
        return false
    }
    alert(n)
    return true
  }

}
isPrime(6)




