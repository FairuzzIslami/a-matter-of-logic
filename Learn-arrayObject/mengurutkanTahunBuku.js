const buku = [
    {
        title: 'allah tuhan ku',
        pembuat : 'Damar',
        tahunTerbit : 2005
    },
    {
        title: 'yesus tuhan ku',
        pembuat : 'bertus',
        tahunTerbit : 2020
    },
    {
        title: 'Hayya',
        pembuat : 'Sipit',
        tahunTerbit : 2010
    },
    {
        title: 'MAMAKKU',
        pembuat : 'BENSU',
        tahunTerbit : 1945
    }
]
let urutkanTahun_terbit = buku.sort(function(a,b){
    return a.tahunTerbit - b.tahunTerbit
})
console.log(urutkanTahun_terbit)