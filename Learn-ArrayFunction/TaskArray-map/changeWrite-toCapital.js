// mengubah nama di array function yang item nya awalnya huruf kecil menjadi kapital

function changeItem(namaSiswa){
    namaSiswa = ['fairuz','damar','asep','deankt']
    return namaSiswa.map(function(e){  // tidak memakai variabel
        return e.toUpperCase()         // kenapa pas gak di kasoh variebl gak bisa , karena dia di dalam function
    })                                 //jasi kta harus buat variabel atau bisa langsung di returnya bisa
}
console.log(changeItem())

