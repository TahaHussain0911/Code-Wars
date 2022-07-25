function zero(isfunc) {
    return isfunc ? isfunc(0) : 0
}
function one(isfunc) {
    return isfunc ? isfunc(1) : 1
}
function two(isfunc) {
    return isfunc ? isfunc(2) : 2
}
function three(isfunc) {
    return isfunc ? isfunc(3) : 3
}
function four(isfunc) {
    return isfunc ? isfunc(4) : 4
}
function five(isfunc) { return isfunc ? isfunc(5) : 5 }
function six(isfunc) { return isfunc ? isfunc(6) : 6 }
function seven(isfunc) { return isfunc ? isfunc(7) : 7 }
function eight(isfunc) { return isfunc ? isfunc(8) : 8 }
function nine(isfunc) { return isfunc ? isfunc(9) : 9 }

function plus(func) {
    return function (add) {
        return func + add;
    }
}
function minus(func) {
    return function (sub) {
        return sub - func;
    }
}
function times(func) {
    return function (mul) {
        return func * mul
    }
}
function dividedBy(func) {
    return function (div) {
        return Math.floor(div / func)
    }
}
console.log(seven(times(five()))) //output=35
