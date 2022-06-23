'use-strict';
const dolphinScore = [85, 54, 41];
const koalasScore = [23, 34, 27];

const clacAverage = (array) => {

    let element = 0;

    for (let index = 0; index < array.length; index++) {
        element = element + array[index]
    }

    return element / array.length;
}


function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= (avgKoalas * 2)) {
        return console.log('Dolpins Wins');
    } else {
        return console.log('Koalas Wins');
    }
}

const avgDolphins = clacAverage(dolphinScore);
const avgKoalas = clacAverage(koalasScore);

console.log(checkWinner(avgDolphins, avgKoalas))
