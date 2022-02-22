function makeFunctionArray(){
    const arr = []
    for(var i = 0;i<5;i++){   //var has closure scope up to line 8,let na up to 5
        arr.push(function() {console.log(i)})
    }
    return arr
    
}
const functionarr = makeFunctionArray()
functionarr[3]()
