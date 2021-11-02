let mergedArrays = (arrayOne, arrayTwo) => {
    let newArray = []
    for (let index = 0; index < arrayOne.length; index++) {
        if(!(newArray.includes(arrayOne[index]))) {
             newArray.push(arrayOne[index]);
    }
    for (let index = 0; index < arrayTwo.length; index++) {
        if(!(newArray.includes(arrayTwo[index]))) {
            newArray.push(arrayTwo[index]);
        } 
    }
}
    return newArray;
}
let mergedArray = [1,2,4,7]
let arrayTwo = [1,5,8,2]
console.log("Merged array = ", mergedArrays(mergedArray, arrayTwo));


//Question 2
let temp = 0
let ascendingSorting = (sortedArrays) => {
    for (let i = 0; i < sortedArrays.length; i++){
        for (let j = i+1; j < sortedArrays.length; j++) {
        if(sortedArrays[i] > sortedArrays[j]){
            temp = sortedArrays[i];
            sortedArrays[i] = sortedArrays[j];
            sortedArrays[j] = temp;
        }
    }
    }
    return sortedArrays;
}
console.log("Ascending sorted array = ", ascendingSorting(mergedArrays(mergedArray, arrayTwo)));

let descendingSorting = (sortedArrays) => {
    for (let i = 0; i < sortedArrays.length; i++){
        for (let j = i+1; j < sortedArrays.length; j++) {
        if(sortedArrays[i] < sortedArrays[j]){
            temp = sortedArrays[i];
            sortedArrays[i] = sortedArrays[j];
            sortedArrays[j] = temp;
        }
        }
    }
    return sortedArrays;
}
console.log("Descending sorted array = ", descendingSorting(mergedArrays(mergedArray, arrayTwo)));

//Question 3
let stringArray = []
let integerArray = []
let booleanArray = []
let combinedArray = []
combinedArray.push(stringArray)
combinedArray.push(integerArray)
combinedArray.push(booleanArray)
let combinedArrays = (mergedArray) => {
    for (let i = 0; i < mergedArray.length; i++){
        if(typeof mergedArray[i] === 'boolean') {
            booleanArray.push(mergedArray[i])
        }
        if(typeof mergedArray[i] === 'string') {
            stringArray.push(mergedArray[i])
        }
        if(typeof mergedArray[i] === 'number') {
            integerArray.push(mergedArray[i])
        }
    }
    return combinedArray;
}
let a = ["Bolu", 2, true]
let b = ["Yetunde", 5, false]
console.log(combinedArrays(mergedArrays(a,b)))


// Question 4
let arrayObject = [
    {
        id:3,
        firstname:"saheed",
        lastname: "adesuwa"
    },
    {
        id:2,
        firstname:"yetunde",
        lastname: "hamad"
    },
    {
        id:1,
        firstname:"goodnews",
        lastname: "confidence"
    },
    {
        id:4,
        firstname:"gideon",
        lastname: "mojoyin"
    },
]
let sortedArrayObjectInAscendingOrder = () => {
    for (let i = 0; i < arrayObject.length; i++) {
        for (let j = i+1; j < arrayObject.length; j++) {
            if (arrayObject[i].id > arrayObject[j].id) {
                temp = arrayObject[i];
                arrayObject[i] = arrayObject[j];
                arrayObject[j] = temp;
            }
        }
    }
    return arrayObject;
}
console.log("Ascending sorted array object: ", sortedArrayObjectInAscendingOrder())

let sortedArrayObjectIndescendingOrder = () => {
    for (let i = 0; i < arrayObject.length; i++) {
        for (let j = i+1; j < arrayObject.length; j++) {
            if (arrayObject[i].id < arrayObject[j].id) {
                temp = arrayObject[i];
                arrayObject[i] = arrayObject[j];
                arrayObject[j] = temp;
            }
        }
    }
    return arrayObject;
}
console.log("Descending sorted array object: ", sortedArrayObjectIndescendingOrder())
