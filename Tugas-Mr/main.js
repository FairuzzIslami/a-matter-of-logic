tahun = prompt("massukan tahun lalhir anda")
if(tahun >= 1944 && tahun <= 1964){
    console.log("anda adalah baby boomer")
}else if (tahun >= 1965 && tahun <= 1979 ){
    console.log("anda adalah generasi X")
}else if (tahun >= 1980 && tahun <= 1994){
    console.log("anda adalah gen milenial")
}else if(tahun >= 1995 && tahun <= 2015){
    console.log("anda adalah generaasi z")
}else{
    console.log("blm ada tahun nya")
}