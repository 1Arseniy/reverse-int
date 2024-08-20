module.exports = function reverse(n) {
    n = String(n);
    const arrRevers = n.split("");
    arrRevers.reverse();
    let arrNumber = arrRevers.join("");
    arrNumber = parseInt(arrNumber);
    return arrNumber;
}
