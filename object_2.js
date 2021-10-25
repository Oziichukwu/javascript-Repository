let othernative = new Object()

function createObject(name, age, gender, height, hobby){

    this.name = name
    this.age = age 
    this.gender = gender
    this.height = height
    this.hobby = hobby
}

let newNative = new createObject("goodnews", "12","male","6.1ft","sleepin")

console.log(newNative)

//RETRIVAL
// THERE ARE TWO METHODS OF RETRIVING DATA FROM AN OBJECT.

//1. DOT NOTATION

let  age = newNative.age

console.log(age)

//2. BRACKET NOTATION

let ageB = newNative["age"]
console.log(age,ageB)

// 3. UPDATE DATA IN OBJECT
newNative.age = 13;
let newAge = newNative["age"]
console.log(newAge)

// DELETING DATA IN OBJECT

delete newNative.age
console.log(newNative)

//LOOPING THROUGH AN OBJECT
// the values are gotten
for(let n in newNative){
    console.log(newNative[n])
}

// an array of keys in the object is gotten
console.log(Object.keys(newNative));

// an array of array of keys and values
console.log(Object.entries(newNative));

// USING THE THIS KEYWORD

let cohort8Native = {

    fullname: "uche Elijah",
    gender: "male",
    height: "short",
    hobby: "footbal",
    getfullname: function(){
        return this.fullname
    }
}

console.log(cohort8Native.gender)


// INTRODUCTION TO BIND KEYWORD

let returnFullname = cohort8Native.getfullname.bind(cohort8Native)
console.log(returnFullname())