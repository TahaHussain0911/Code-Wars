//the number that fullfills theproperty of n1^1+n2^2..n^n-1=n1n2
//e.g : sumdigpow(89)=8^1+9^2=89
/*return all numbers which fullfill this property
under range of a to b*/
function sumDigPow(a, b) {
    let arr = []
    for (let i = a; i <= b; i++) {
        let count = 0;
        for (let k = 0; k < String(i).length; k++) {
            count += Number(String(i)[k]) ** (k + 1)
        }
        if (count == Number(i)) {
            arr.push(Number(i))
        }
    }
    return arr;
}
console.log(sumDigPow(1, 136)) //output=[1,2,3,4,5,6,7,8,9,89,135]
