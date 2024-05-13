// // let array = [null ,15,false,30,56]
// // let counter = []


// // for(let i = 0; i < array.length ; i++){
// //     if(Number(array[i])){
// //         counter.push(array[i])
// //     }else{
// //         // console.log('else ', array[i])
// //     }
// // }




// // cari yang terpanjang

// let nama = ['go','google','facebook','instagram','x']
// let Terpanjang = nama[0]

// for(let i = 0; i < nama.length; i++){
//     if(nama[i].length > Terpanjang.length){
//         Terpanjang = nama[i]
//     }
//     // console.log(Terpanjang.length)
// }
// console.log(Terpanjang)



// // hasil nya keluarin [1,2,40,50]
// let angka1 = [1,2,40]
// let angka2 = [1,2,50]
// let penampung = new Set(angka1,angka2)
// let akhir = Array.from(penampung)
// console.log(penampung)

const array = [55, 43, 67, 89, 76, 88, 90, 95, 91];
let tinggi = 0

for(let i = 0; i < array.length; i++){
    if(tinggi < array[i]){
        tinggi = array[i]
    }
}
console.log(tinggi)

