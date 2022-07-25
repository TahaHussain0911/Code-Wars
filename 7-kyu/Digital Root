function digital(n) {
    n = String(n);
    let number = n.split('').reduce((acc, value) => acc + Number(value), 0)
    return number >= 10 ? digital(number) : number;
}
console.log(digital(235)) //output=1 since 2+3+5=10 then 1+0=1
