// membuat alogoritma tentang array di kali  di dalam fooor loop
// jika ingin membuat array itu bisa di tambah,kali,kurang dll itru kita harus buat variabel penmapung 
// agfar arrya nya bisa + - dll


let array = [2,3,4,5,1,5,5]
let counter = 1


for(let i = 0; i < array.length; i++){
    counter = counter * array[i]
}
console.log(counter)