
//Solução 1
function verificarPalindromo(string) {
    if(!string) return "string inexistente";

    string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("ama"));

//Solução 2
// omo
function verificarPalindromo(string) {
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[1]!== string[string.length -1 - i]){
            return false;
        }
        

    }
    return true;
}
console.log(verificarPalindromo(abba));

