function tohex(converter) {
    if (converter > 255) {
        return "FF"; //if the value is greater than 255 it has to return F because hexa number cannot exceed 'F'
    }
    else if (converter <= 0) {
        return "00";
    }
    else if (String(converter).length == 1) {
        return "0" + converter;
    }
    else {
        return converter.toString(16).toUpperCase();
    }
}
function rgb(a, b, c) {
    return tohex(a) + tohex(b) + tohex(c);
}
console.log(rgb(7, 258, 255))//output='07FFFF'
