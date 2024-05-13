let bilangan = 5;
console.log("Bilangan:" +  bilangan);

let bentuk = '';
for (let i = 1; i <= bilangan; i++) {
    for (let j = 1; j <= i; j++) {
        bentuk += j;
    }
    bentuk += '\n';
}

console.log(bentuk); 
