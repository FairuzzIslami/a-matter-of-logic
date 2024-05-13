const angka = prompt("masssukan angka yang anda ingin kan")

if(angka  %3 == 0){ //menandakan jika di bagi 3 == hasil nya 0
    console.log("angka ini bisa di bagi3")
}else{
    console.log("angka ini tidak bisa di bagi 3")
}
//menggunakan % karena dia di gunakan untuk mendpatkan sisa bagi dari angka/nilai yang kita inginkan
//Contoh:
//Jika a = 10 dan b = 3 jika kita modulo maka akan tersisa 1 karena 10:3 = 9 sisa 1
// ya karena si 20 %4 == 0  ---> tidak ada sisa maka hasil nya genap