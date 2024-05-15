// menambahkan string "usd" di setiap index array map
function nilaiSiswa(nilai){
    nilai = [1,2,3,4,5,6,78,9]
    hasil = nilai.map(function(e){
        //return e = 'usd' // gantin item array nya jadi usd == itu salah 
        return e + 'usd' // ==> ini di setiap element itu di tambahkan string
    })
    return nilai,hasil
}
console.log(nilaiSiswa())