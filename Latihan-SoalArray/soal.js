const player = [
    {
        name:"messi",
        goal:810
    },
    {
        name:"Ronaldo",
        goal: 915
    },
    {
        name:"mbappe",
        goal:515
    }
]

player.sort(function(a,b){
    return b.goal-a.goal
})

console.log(player)
console.log(player[0])

console.log(`the goat is ${player[0].name} and goal ${player[0].goal}`)
