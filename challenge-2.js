'use-strict'

const bill = [125, 555, 44];

const tip = (bill) => bill.map(tip => (tip >= 50 && tip <= 300) ? tip * .15 : tip * .20);

const tips = tip(bill);
console.log(tips);

const total = [] 

for (let i = 0; i < bill.length; i++) {
    total.push(bill[i] + tips[i])
};
 
console.log(total)