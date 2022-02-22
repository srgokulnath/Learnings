// closure a function which has access to variables which lost the scope
function makeHelloFunction(){
    const message = "Hello"  // even var na also it does not depend on the error as msg not defined


function sayHello(){
    console.log(message)
}
return sayHello
}
const sayHello = makeHelloFunction()
console.log("type of msgmessage",typeof message)  // ans is undefined
console.log(sayHello.toString())
//console.log(message) error bcoz the const msg has lost its scope and cant be recollected (REMEBER THE COMPLING PROCESS OF JS)
sayHello()// here sayHello does not know wht msg is but through closure it getss the data associated with it
