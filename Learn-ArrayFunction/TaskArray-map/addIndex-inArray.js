// nambahin index di array functio0n di map
function playerNumber(number){
    number = [1,2,3,4,5,67,7,8,9,90,0]
    return number.map(function(e,a){
        return `ini item yang nilai ${e} dan berada di index ${a}`
    })
}
console.log(playerNumber())


//NB:  -ketika kita menggunakan array method dan melakukan call back function,
//     - dan function tersebut tidak membuat varibel functionya mengapa?
//     - karena dia sudah di wakilkan oleh array methodnya
//      - jadi gak perlu lagi membaut variebl function, cukup buat parameter aja