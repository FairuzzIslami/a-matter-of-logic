// menghitung panjang item di array menggunakan function
function lengthArray(){
    let array = ['fairuz','aqila','islami']
    let hasil = array.map(function(e){
        return e.length
    })
    return array,hasil // return di awal dan di akhir itu penting
}
console.log(lengthArray())
