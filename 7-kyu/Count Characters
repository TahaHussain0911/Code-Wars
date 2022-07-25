function occuring(str) {
    str = str.toLowerCase().split('')
    alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let obj = {};
    for (let i = 0; i < alpha.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (alpha[i] == str[j]) {
                count += 1
            }
        }
        if (count >= 1) {

            obj[alpha[i]] = count;
        }
    }
    return obj;
}
console.log(occuring("taha")) //output={'a':2,'h':1,'t':1}
