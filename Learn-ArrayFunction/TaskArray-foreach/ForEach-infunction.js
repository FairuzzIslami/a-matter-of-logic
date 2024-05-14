// tugas menampilkan array di function menggunakan array forEach
function nilai(nilaisSiswa){
    nilaisSiswa = [2,43,5,1,2,34,4,5]
    nilaisSiswa.forEach(function(e,a){
        console.log(`hallo nama saya bernilai ${e} dan berada di index ke ${a}`)
    })
    return nilaisSiswa
}
console.log(nilai())