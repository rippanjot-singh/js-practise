//take input

let star = 1;
let rows = parseInt(prompt("Enter the number of rows"));
rows = rows*2;
let spaces = parseInt((rows/2));

while(star<rows){
    console.log(' '.repeat(spaces) + '*'.repeat(star) + ' '.repeat(spaces));
    star += 2;
    spaces -= 1;
}