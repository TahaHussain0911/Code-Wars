/*Rot13 changes each character in a string to its corresponding character
	ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
  NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm
*/
function rot13(message) {
    let arr = [];
    for (let i = 0; i < message.length; i++) {
        let msg = message.charCodeAt(i);
        if ((msg >= 78 && msg < 97) || (msg >= 110 && msg <= 122)) {
            arr.push(String.fromCharCode(msg - 13))
        }
        else if (msg >= 65 && msg <= 122) {
            arr.push(String.fromCharCode(msg + 13))
        }
        else {
            arr.push(message[i])
        }
    }
    return arr.join('')
}
console.log(rot13('taha')) //output='gnun'
