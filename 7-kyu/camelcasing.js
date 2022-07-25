
//Divides word depending on the first capital letter
function sol(string) {
    return string.replace(/([A-Z])/g, " $1")
}

console.log(sol("ScarletWitch")) //output:Scarlet Witch
