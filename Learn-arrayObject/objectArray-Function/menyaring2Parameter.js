// menyaring 2 parameter di function menggunakna array object

let player = [
    {
        name:'fairuz',
        age : 30
    },
    {
        name: 'aqila',
        age : 10
    },
    {
        name:'zahra',
        age : 20
    },
    {
        name:'giska',
        age : 15
    }
]

function showPlayer(player,age){
    return player.filter(function (name){ // jika ada 
        return name.age < age
    })
}
console.log(showPlayer(player,20))


//NB:  -ketika kita menggunakan array method dan melakukan call back function,
//     - dan function tersebut tidak membuat varibel functionya mengapa?
//     - karena dia sudah di wakilkan oleh array methodnya
//      - jadi gak perlu lagi membaut variebl function, cukup buat parameter aja