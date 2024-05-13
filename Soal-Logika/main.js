// * Test Cases:
// - dibawah 55 (ga lulus)
// - ketika nilainya 55-70 (C)
// - ketika nilainya 71-80 (B)
// - ketika nilainya 81-85 (A)
// - ketika nilainya 86> (A+)
// */

var nilai = prompt("massukkan nilai anda: ");

if( nilai <55 ){
    console.log("kurang pinter")
}
else if( nilai >=55 && nilai <= 70){
    console.log("C")
}
else if (nilai >=70 && nilai <= 80 ){
    console.log("B")
}
else if (nilai>= 80 && nilai <= 85){
    console.log("A")
}
else{
    console.log(" Kelass A+")
    console.log("cihuyyy")
}