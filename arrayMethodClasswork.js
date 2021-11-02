let objArray = [
    {
        gender : 'male',
        firstName : 'john',
        lastName : 'smith',
    },

    {
        gender : 'male',
        firstName : 'demola',
        lastName : 'femi',
    },

    {
        gender : 'female',
        firstName : 'tife',
        lastName : 'harry',
    }
];

let question1 = " using array method foreach, print out the firstname"

let question2 = "using array method map, print out a new keyword fullname"
"per object and the value would be the combination of the firstname and the lastname"


function letter (values){

    console.log("firstnames " + values.firstName)
    console.log("gender " + values.gender)

}
Array.from(objArray).forEach(letter)

let fullname = objArray.map(my =>(

    {
        //firstName : my.firstName,
        //lastName : my.lastName,
        fullname : my.firstName + " " + my.lastName,
    }

));

console.log(fullname)


let maleGender = objArray.filter(sex => sex.gender==='male')

console.log(maleGender)

let femaleGender = objArray.filter(sex => sex.gender === 'female')

console.log(femaleGender)