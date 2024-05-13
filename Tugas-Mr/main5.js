let jumlah_uang = prompt("massukan jumlah uang: Rp.")
jumlah_uang = Number(jumlah_uang)
let ratusan_ribu = Math.floor(jumlah_uang / 100000)
let sisa = jumlah_uang - (ratusan_ribu*10000)

let lima_puluh = Math.floor(sisa / 50000)
sisa = sisa - (lima_puluh*50000)

let dua_puluh = Math.floor(sisa / 20000)
sisa = sisa - (dua_puluh*20000)

let sepuluh = Math.floor(sisa / 10000)
sisa = sisa - (sepuluh*10000)

let lima_ribu = Math.floor(sisa / 5000)
sisa = sisa - (lima_ribu * 5000)

let dua_ribu = Math.floor(sisa / 2000)
sisa = sisa - (dua_ribu * 2000)

let seribu = Math.floor(sisa /1000)
sisa = sisa - (seribu * 1000)

let lima_ratus = Math.floor(sisa/500)
sisa = sisa - (lima_ratus)

console.log(`uang yang di massukan ${jumlah_uang}`)
console.log(`seratus ${ratusan_ribu}`)
console.log(`lima puluh: ${lima_puluh}`)
console.log(`dua puluh: ${dua_puluh}`)
console.log(`sepuluh : ${sepuluh}`)
console.log(`lima ribu ${lima_ribu}`)
console.log(`dua ribu ${dua_ribu}`)
console.log(`seribu: ${seribu}`)
console.log(`lima ratus perak: ${lima_ratus}`)