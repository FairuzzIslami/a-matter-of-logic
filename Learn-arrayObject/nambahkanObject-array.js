//nambahkan object baru di varibel array object
const memberjkt48 = [
    {
        nama:'ashel',
        umur: 19
    },
    {
        nama : 'katrina',
        umur : 18
    },
    {
        nama: 'indah',
        umur : 22
    }
]
// nambahin object baru
let nambahMember = memberjkt48.push({
    nama:'marsha',
    umur: 18
})

// urutkan yg tertua ke muda
let urutkanUmur = memberjkt48.sort(function(a,b){
    return a.umur - b.umur
})
console.log(memberjkt48)
console.log(urutkanUmur)