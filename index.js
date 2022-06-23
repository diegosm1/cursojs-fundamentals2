'use strict'; //nos permite saber errores que el lenguaje comunmente no nos dice

// let hasDriversLicense = false;
// const passTest = true;


// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can Drive')

//Funciones
/*
function logger() {
    console.log('hola');
}

logger();


function fruitProcessor(appless, oranges) {
    console.log(appless, oranges);
    const juice = `Juice with ${appless} apples and ${oranges} oranges.`

    return juice;
}

const result =  fruitProcessor(6, 3);

console.log(result)
*/


//declaraciones de Funciones

/*
const age1 = calcAngel(1991); //se puede utilizar una funcion antes de su declaracion.
function calcAngel(birthYear) { //normal funcion 
    return 2037 - birthYear;
}


//function expresion

const calcAge2 = function (birthYear) { // funcion anonima asiciada a una constante
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


const yearsUntilRetirement = (birthYear, firtsName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firtsName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1996, 'Diego'))
*/

// function calls into another functions
/*
const cutPieces = (fruit) => {
    return fruit * 4;
}

function fruitProcessor(appless, oranges) {
    
    const applePieces = cutPieces(appless);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pices of apples and ${orangePieces} pices of oranges.`

    return juice;
}

console.log(fruitProcessor(2, 3));
*/

//funciones dentro de otras

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearsUntilRetirement = (birthYear, firtsName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return (retirement,
            console.log(`${firtsName} retires in ${retirement} years`))
    } else {
        return (-1,
            console.log(`${firtsName} has alredy retired:D`))
    }

}

console.log(yearsUntilRetirement(1991, 'Diego'))