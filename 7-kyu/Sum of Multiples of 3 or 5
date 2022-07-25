function solution(number) {
    if (number <= 1) {
        return number
    }
    else {
        let arr = [];
        for (let i = 2; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                arr.push(i);
            }
        }
        return arr.reduce((acc, value) => acc + value, 0)
    }
}
console.log(solution(10)) //output=23 since sum of [3,5,6,9]=23
