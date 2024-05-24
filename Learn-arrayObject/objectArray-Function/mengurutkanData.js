// mengurutkan data array menggunakn function

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
function urutkanUmur(person,age){
    return person.sort(function(a,b){
        return a.age - b.age
    })
}

console.log(urutkanUmur(player))