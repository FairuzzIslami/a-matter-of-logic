// gabungkan 2 array object di array function


let siswa1 = [
    {
        id:1,
        nama:'fairuz'
    },
    {
        id:2,
        nama:'aqila'
    },
    {
        id:3,
        nama:'damar'
    }
]
siswa2 = [
    {
        id:4,
        nama:'mongolaoid'
    },
    {
        id:5,
        nama:"jaro"
    },
    {
        id:6,
        nama:'law'
    }
]

function combine2variebel(var1,var2){
    return var1.concat(var2)
}
console.log(combine2variebel(siswa1,siswa2))
