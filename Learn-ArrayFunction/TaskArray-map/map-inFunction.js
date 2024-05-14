//menampilkan array baru d ifunction menggunakan map
function nilaisiswa(nilai,hasil){
    nilai = [20,30,40,50,80,10]
    hasil = nilai.map(function(a){
        return a*2
    })
    return nilai,hasil
}
console.log(nilaisiswa())