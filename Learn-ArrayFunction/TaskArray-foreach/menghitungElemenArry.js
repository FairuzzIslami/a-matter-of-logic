// meng nambahkan semua di arrray menggunakan function
function SumbitArry(sumb,hasil){
    sumb = [10,20,50,5,5]
    hasil = sumb.forEach(function(e){
        return  e + 2 
    })
    return sumb,hasil
}
console.log(SumbitArry())

//NB : ARRAY FOREACH ITU TIDAK BISA MENYIMPAN/MEMANIPULASI sUATU NILAI yang baru 
//     BISANYA HANYA DI ARRAY MAP