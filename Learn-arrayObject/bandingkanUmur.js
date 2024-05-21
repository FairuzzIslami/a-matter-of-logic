    // soal mengurutkan umur siswa dari yang paling muda hingga tertua
    const namaSiswa = [
        {
            nama:'fairuz',
            umur : 9,
            kelas :'x-rpl'
        },
        {
            nama:'bima',
            umur : 9,
            kelas :'x-rpl'
        },
        {
            nama:'bima',
            umur : 30,
            kelas :'x-tkr'
        },
        {
            nama:'andre',
            umur : 19,
            kelas :'x-tsm'
        }
    ]
    namaSiswa.sort(function(a,b){
        return a.umur - b.umur
    })
console.log(`siswa dgn termuda yang tertua adalah:`)
console.log(namaSiswa)