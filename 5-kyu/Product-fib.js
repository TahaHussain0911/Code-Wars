/*0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 is a fibonacci series
first we have created this series then check if the product of fib[n] and fib[n+1]=prod*/

function productFib(prod) {
    let arr = [];
    for (let i = 0; i < prod; i++) {
        let fib = 0;
        if (i <= 1) {
            arr.push(i);
        }
        else {
            fib = arr[i - 1] + arr[i - 2]
            arr.push(fib);
            if (fib >= prod) {
                break
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] * arr[i + 1] == prod) {
            return [arr[i], arr[i + 1], true];
        }
        else if (arr[i] * arr[i + 1] > prod) {
            return [arr[i], arr[i + 1], false];
        }
    }
}
console.log(productFib(714)) //output=true
