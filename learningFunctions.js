let details = {
    sex : "male",
    firstName :"elijah",
    lastName : "moses",
    getFullName : function (anotherFunction){
        console.log(anotherFunction(this))
    }
}

details.getFullName((obj) => {
    let fullname = obj.firstName + " " + obj.lastName 
        if (obj.sex === "male"){
            fullname = "Mr" + " " + fullname
        }
        else {
            fullname = "Mrs" + " " + fullname
        }
        return fullname
})