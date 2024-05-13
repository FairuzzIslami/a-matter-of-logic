// for(let i = 0; i< 100; i++){ //pintar2 melihat kondisi nya
//     if(i %3 == 0 && i %5 == 0){
//         console.log(`${i} adalah fizzbuzz`)
//     }else if(i %3 == 0){
//     console.log(`${i} adalah fizz`)
//     }else if(i %5 == 0){
//         console.log(`${i} addalah buzz`)
//     }
// }

let array = [1,0,2,3,4,4,5,6,7,8]
let array2 = [3,5,6,7,8]
let counter = []

for(let i = 0; i < Math.max(array.length,array2.length); i++ ){
    if(array2[i] == undefined){
        counter.push(array[i] + 0) // yang baru
    } else {
        counter.push(array[i] + array2[i]) // yang baru
    } 


}
console.log(counter)



