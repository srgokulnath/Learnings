 //class vs( instance or object) vs (properties or value attached to instance
class Set{
    constructor(arr){
        this.arr = arr
    }
    add(val){
        if(!this.has(val)) this.arr.push(val)

    }
    delete(val){
        this.arr=  this.arr.filter(x=>!x==val)

    }
    has(val){
        return this.arr.includes(val)
    }
    get size(){
        return this.arr.length
    }
    
}
const s = new Set([1,2,3,4,5])
s.add(1)
s.add(1)
console.log("this arr shd contain only 5",s.size)
console.log(s.has(5))
