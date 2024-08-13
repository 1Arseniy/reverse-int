module.exports = function reverse (n) {
    n = String(n);
    const arrRevers = n.split("");
    console.log(arrRevers);
    arrRevers.reverse();
    let arrNumber = arrRevers.join("");
    arrNumber = Number(arrNumber);
    return arrNumber;

}

const ff = reverse(123);

console.log(ff);
