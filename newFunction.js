
function rename (n){
    let name = "";
    for(let i = 0; i < n.length; i++)name += n.charAt(i) + " " + (i+1) + " "
    return name;
}
console.log(rename("elijah"))