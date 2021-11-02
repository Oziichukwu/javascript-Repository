let cohort8Array = ["ozioma", "jerry", "tife", "cubana","femi"]

for(let i = 0; i < cohort8Array.length; i++){
    if(cohort8Array[i] !== "tife"){
        console.log(cohort8Array[i])
    }
}

for (let key in cohort8Array){
    console.log(cohort8Array[key])
}






console.log(cohort8Array.splice(1,1))
console.log(cohort8Array)

let newArray = cohort8Array.slice(1,2)
console.log(newArray)
