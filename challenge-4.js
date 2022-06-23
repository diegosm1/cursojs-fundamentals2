'use-strict'
/*
const diego = [
    'Diego',
    'Sanchez',
    25,
    ['Iwano', 'Pala', 'Tux'],
    'Programador'
]

console.log('--- Continue ---')
//utilizacion del continue en un loop
for (let i = 0; i < diego.length; i++) {
    if (typeof diego[i] !== 'string') continue;

    console.log(diego[i], typeof diego[i]);

}

console.log('--- Break ---')
//utilizacion del break 
for (let i = 0; i < diego.length; i++) {
    if (typeof diego[i] === 'object') break;

    console.log(diego[i], typeof diego[i]);

}

//recorriendo un array al revés

for (let i = diego.length - 1; i >= 0; i--) {
    console.log(i, diego[i])
}


//utilizacion de ejemplo de bucle while

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tip = (bill) => bill.map(tip => (tip >= 50 && tip <= 300) ? tip * .15 : tip * .20);

const tips = tip(bills);

console.log(tips)

const totals = [];

const clacAverage = (array) => {

    let element = 0;

    for (let index = 0; index < array.length; index++) {
        element = element + array[index]
    }

    return element / array.length;
}


function clacTip(arr1, arr2, i) {
    return arr1[i] + arr2[i]
    
}



const total = [];

for (let i = 0; i < bills.length; i++) {
    
     total.push(clacTip(bills, tips, i)); 
    
}

console.log(total)
console.log(clacAverage(total))