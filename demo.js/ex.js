function  makeFunctioArray(){
    const arr = []
    for(var i =0;i<5;i++){
        arr.push((function(x){
            return function(){console.log(x)}
        })(i))
    }
    return arr
}
const functionArr = makeFunctioArray()
functionArr[0]()

