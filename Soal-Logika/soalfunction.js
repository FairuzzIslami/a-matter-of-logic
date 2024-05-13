function angka(nilai){
    // let nilai = prompt("massukkan nilai anda: ");
    if( nilai <55 ){
        return "blok"
    }
    else if( nilai >=55 && nilai <= 70){
        return "ya ok aja"
    }
    else if (nilai >=71 && nilai <= 80 ){
        return "ok cukup"
    }
    else if (nilai>= 81 && nilai <= 85){
        return "busetttt"
    }
    else{
        return "kelaszxxzz"
    }
}
let nilai = 80
// let hasilNilai = angka(nilai)
console.log( angka(nilai))

//jika saya meng run menggunakan return nanti hasil nya gak keliatan karena
//di dalam function nya sudah di isi oleh parameter return jadi kita harus 
//menampilkan menggunakan parameter lainya 
