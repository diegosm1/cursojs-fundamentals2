/*
const diego = {
    firstName: 'Diego',
    birthYear: 1996,
    friends: ['Iwano', 'Pala', 'Chozo'],
    calcAge: function() {
        return 2022 - this.birthYear;
    },
    job: 'Programmer',
    hasDiverLicence: true,
    requestLicence: function() {
        return this.hasDiverLicence ? 'he has drivers licence' : 'he dont have driver licence';
    }
}

console.log(`Diego has ${diego.friends.length}, and his bes friend is called ${diego.friends[0]}`);


console.log(diego.calcAge());


console.log(`${diego.firstName} is a ${diego.calcAge()}-year old ${diego.job}, and ${diego.requestLicence()}`)
*/


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = (this.mass / (this.height ** 2))
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = (this.mass / (this.height * this.height)); //se puede crear una nueva propiedad pero para obtener el valor se nececita ejecutar la funcion
        return this.bmi
    }
}

john.calcBMI();
mark.calcBMI();

if (john.bmi >= mark.bmi ) {
    
    console.log(`Joh´n BMI ${john.calcBMI()} is higher than Mark´s ${mark.calcBMI()}`);
} else if (mark.bmi >= john.bmi ) {
    console.log(`Mark´s BMI ${mark.calcBMI()} is higher than John´s ${john.calcBMI()}`);
}
// console.log(john.calcBMI(), mark.calcBMI())



