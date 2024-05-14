function number(array,hasil){
    array = [1,2,3,4,5,6,7,8,9,10]
    hasil = array.map(function(e){
        return e.toString()
    })
    return array,hasil
}
console.log(number())