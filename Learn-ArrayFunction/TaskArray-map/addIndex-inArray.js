// nambahin index di array functio0n di map
function playerNumber(number){
    number = [1,2,3,4,5,67,7,8,9,90,0]
    return number.map(function(e,a){
        return `ini item yang nilai ${e} dan berada di index ${a}`
    })
}
console.log(playerNumber())