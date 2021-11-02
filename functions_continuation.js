let details = {
    first_name : "Gideon",
    last_name : "Mojoyin",
    getFulName : function (anotherFunction){

        console.log(anotherFunction(this))
    }

}

details.getFulName((obj) => {
    let fulname = obj.first_name +  " " + obj.last_name
    return fulname
}
    )