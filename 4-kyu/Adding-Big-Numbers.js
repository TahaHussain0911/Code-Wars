/*we can add a 3-4 digit number but for more it will return an 
exponential value we need to overcome it so we will add each digit separately
*/
function add(a, b) {
    let str = '';
    let carry = 0;
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || carry) {
        carry = carry/*since carry =true therefor it will store 1 in*/ + Number(a.pop()) + Number(b.pop())
        str = carry % 10 + str;
        carry = Math.floor(carry / 10);
    }
    return str;
}
console.log(add('8885326153715623131', '22232131287312893131')) 
