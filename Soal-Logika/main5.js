// const huruf = prompt("massukan huruf yang anda mau: ")
// // let counter = 0
// let hurufZ = false
// for(let i = 0; i< huruf.length; i++){
//     // SOAL 1
//     if(huruf[i] === "z"){
//         hurufZ = true
//         break // buat berhenttin nilai yang ada
//     }else{
//         hurufZ = false
//     }
//     //soal 2 ada bearapa huruf z di dalam kalimat 
//     // if(huruf[i] =='z'){
//     //     counter+=1
//     // }
// }

// // console.log(counter)

// if(hurufZ === true){
// console.log("ada z nye")
// }else{
// console.log("gak ada")
// }


let massukan = prompt("massukan huruf :")
let result = ''
for (let i = massukan.length-1; i>=0; i--){
    console.log(massukan[i])
    result += massukan[i]
}
console.log(result)




