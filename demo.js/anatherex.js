function addOne(num){
    return num+1
}
function get(){
    return addOne(10)
}
function c(){
    console.log(get()+get())
}
c()