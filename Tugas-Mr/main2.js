const jawab = prompt("apakah kau suka bubur ayam? :")
let jawab2;
if(jawab === "ya"){
    jawab2 = prompt("suka di aduk atau gak?")
    if(jawab2 === "di aduk"){
        console.log("agak laen sumpah")
    }else{
        console.log("ok masih aman aja")
    }
}else{
    console.log("kapan kapan coba bubur ayam bro")
}