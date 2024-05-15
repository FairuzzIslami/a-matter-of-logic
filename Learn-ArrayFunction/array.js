// array adalah sebauh variabel yang menampilkan lebih dari 1 nilai/lebih
// seperti bolean,method,string
// kegunaan array juga sebagai 
// memper mudah pengelola nilai ,mengurangi manejemen memori



//before
//ketika kita ingin mendata siswa yang bisa di bilang banyak kita tidak bisa
// membuat 1 variebl yang isinya 1 siswa saja,kita harus membuat 
// array untuk membuat variebl yang nilainya lebih dari 1
let siswa1 = 'fairuz'
let siswa2 = 'damar'
let siswa3 = 'anton'
let siswa4 = 'budi'
let siswa5 = 'asep'


//after
//jika kita membuat array dalam data siswa kita hanya
// membuat 1 variabel dgn nilai yang lebih dari 1 / banyak
let dataSiswa = ['fairuz','damar','anton','budi','asep']
console.log(array)


//perbedaan index dan item di array
let array = ['fairuz','yosep','luufy','sanji'] // fairuz,yosep,luufy ,itu disebut item/value
//              0       1        2      3    ===> di sebut index dan di mulai sari 0
//     NB:setiap nilai/item yang berbeda itu index nya akan berubah sesuai
//         tempat dimana array nya di taro
console.log(array[2]) // ==> menampilkan array yang index ke 2 = luufy


//NB: - array atau index array di mulai dari 0
//       contoh : array['fairuz','damar','andre'] 
//                         0        1       2    ===> disebut index
//     -di dalam 1 variabel array, boleh di isi beberapa tipe data/bebas 
//       contoh: array['fairuz',2,3,4,5,'aqila']
