const counter = (function(){
    count = 0
    return{
        inc: function(){count = count + 1},
        get: function(){console.log(count)}
    }
})()
counter.get()
counter.inc()
console.log("type of conunt",typeof count)
console.log(count)

