// TASK:
// menampilkan setiap nilai siswa yang ada di array object
// dan mengurutkan nilai siswa dari yang terkecil hingga yang terbesar

const nilaiSiswa = [
    {
        nama:'fairuz',
        nilaiUlangan: 60
    },
    {
        nama:'damar',
        nilaiUlangan: 70
    },
    {
        nama:'ahmad',
        nilaiUlangan: 65
    },
    {
        nama:'sholeh',
        nilaiUlangan: 70
    }
]

//task 1
let siswa1 = nilaiSiswa[0].nama + '-' + nilaiSiswa[0].nilaiUlangan // menyebutkan nama varieblnya, kemudian index,diakhiri dgn jenis objectnya
let siswa2 = nilaiSiswa[1].nama +  '-' + nilaiSiswa[1].nilaiUlangan
let siswa3 = nilaiSiswa[2].nama +  '-' + nilaiSiswa[2].nilaiUlangan
let siswa4 = nilaiSiswa[3].nama +  '-' + nilaiSiswa[3].nilaiUlangan

console.log(siswa1)
console.log(siswa2)
console.log(siswa3)
console.log(siswa4)


//task 2
let mengurutkanNilai = nilaiSiswa.sort(function(a,b){
    return a.nilaiUlangan - b.nilaiUlangan
})
console.log(mengurutkanNilai)