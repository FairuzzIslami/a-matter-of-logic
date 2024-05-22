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
    return player.filter(function name(){
        return name.age < age
    })
}
console.log(showPlayer(player,20))