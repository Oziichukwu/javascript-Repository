function wrapValue(n){

    let local = n;

    return () => local;
}

let wrap1 = wrapValue(8);
let wrap2 = wrapValue(3);

console.log(wrap1());